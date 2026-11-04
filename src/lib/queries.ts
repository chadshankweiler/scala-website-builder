"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
import { redirect } from "next/navigation";

export const getUserAuthDetails = async () => {
    const user = await currentUser();
    if (!user) {
        return;
    }

    const userData = await db.user.findUnique({
        where: {
            email: user.emailAddresses[0].emailAddress,
        },
        include: {
            Agency: {
                include: {
                    SidebarOption: true,
                },
            },
        },
        Permissions: true,
    });

    return userData;
};

export const verifyAndAcceptInvitation = async () => {
    const user = await currentUser();

    if (!user) return redirect("/agency/sign-in");

    const invitationExists = await db.invitation.findUnique({
        where: {
            email: user.emailAddresses[0].emailAddress,
            status: "PENDING",
        },
    });
};
