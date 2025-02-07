import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col ">
                <div
                    className="
                            absolute bottom-0 left-0 right-0 top-0 dark:bg-[linear-gradient(to_right, #161616_1px, transparent_1px), linear-gradient(to_bottom, #161616_1px, transparent_1px)]
                            bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]
                            "
                />
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
            <section className="flex justify-center items-center flex-col gap-4 md:mt-20">
                <h2 className="text-4xl text-center">
                    Choose what fits your right
                </h2>
                <p className="text-muted-foreground text-center">
                    {" "}
                    Our straightforward pricing plans are tailored to meet your
                    needs. If {"your're"} not <br /> ready to commit you can get
                    started for free.
                </p>
                <div className="flex items-center gap-4 flex-wrap mt-6">
                    {pricingCards.map((card) => (
                        <Card
                            key={card.title}
                            className={clsx(
                                "w-[300px] flex flex-col justify-between",
                                {
                                    "border-2 border-primary":
                                        card.title === "Unlimited Saas",
                                }
                            )}
                        >
                            <CardHeader>
                                <CardTitle
                                    className={clsx("", {
                                        "text-muted-foreground":
                                            card.title !== "Unlimited SaaS",
                                    })}
                                >
                                    {card.title}
                                </CardTitle>
                                <CardDescription>
                                    {card.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <span className="text-4xl font-bold">
                                    {card.price}
                                </span>
                                <span className="text-muted-foreground">
                                    /m
                                </span>
                            </CardContent>
                            <CardFooter className="flex flex-col">
                                <div>
                                    {card.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex gap-2 items-center"
                                        >
                                            <Check className="text-muted-foreground" />
                                            <p>{feature}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href={`/agency?plan=${card.priceId}`}
                                    className={clsx(
                                        "w-full text-center bg-primary p-2 mt-4 rounded-md",
                                        {
                                            "!bg-muted-foreground":
                                                card.title !== "Unlimited Saas",
                                        }
                                    )}
                                >
                                    Get Started
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}
