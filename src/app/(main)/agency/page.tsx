import { getUserAuthDetails } from "@/lib/queries";
import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
    const userAuth = await currentUser();

    if (!userAuth) {
        redirect("/agency/sign-in");
    }

    // Get User Details
    const user = getUserAuthDetails()

    return <div>Agency Dashboard</div>;
};

export default Page;
