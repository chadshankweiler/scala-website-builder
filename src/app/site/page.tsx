import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col ">
                <div
                    className="
                            absolute bottom-0 left-0 right-0 top-0 dark:bg-[linear-gradient(to_right, #161616_1px, transparent_1px), linear-gradient(to_bottom, #161616_1px, transparent_1px)]
                            bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]
                            "
                ></div>
                <p>Run marketing from one place</p>
                <div
                    className="bg-gradient-to-r from-primary to-secondary-foreground
                    text-transparent bg-clip-text relative
                "
                >
                    <h1 className="text-9xl font-bold text-center md:text-[300px]">
                        Scala
                    </h1>
                </div>
            </section>
        </main>
    );
}
