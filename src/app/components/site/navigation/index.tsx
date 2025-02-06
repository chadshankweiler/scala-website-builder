import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navigation = () => {
    return (
        <div className="p-4 flex items-center justify-between relative">
            <aside>
                <Image
                    src={"https://scalawebdesign.com/"}
                    alt="logo"
                    width={40}
                    height={40}
                />
                <span className="text-xl font-bold">Scala Web</span>
            </aside>
            <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <ul className="flex items-center justify-between gap-8">
                    <Link href={"#"}>Pricing</Link>
                    <Link href={"#"}>About</Link>
                    <Link href={"#"}>Documentation</Link>
                    <Link href={"#"}>Features</Link>
                </ul>
            </nav>
            <aside className="flex gap-2 items-center">
                <Link href={"/agency"} className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/50">
                    Login
                </Link>
                <UserButton />
            </aside>
        </div>
    );
};
