import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { bannerComment } from "@/app/data/Banner/banner";
import { Jersey_20, Montserrat } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dataTopComment } from "@/components/data/TopComent/TopComent";
import { ITopComment } from "@/components/data/TopComent/type";
import Stars from "../common/Stars";

const jersey = Jersey_20({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"] });

const TopComment = () => {
    return (
        <div className={`h-auto py-12 relative ${jersey.className}`}>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerComment})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 mt-8">
                <h2 className="text-center text-4xl font-bold mb-6 text-red-500">
                    Shop Bliss Box with confidence.
                </h2>
                <p className="text-center text-gray-300 text-xl mb-10">
                    Over <span className="font-bold text-green-400">100</span>{" "}
                    Satisfied Customers!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {dataTopComment &&
                        dataTopComment.map(
                            (comment: ITopComment, index: number) => (
                                <Card
                                    key={comment.id || index}
                                    className="bg-gray-100 shadow-lg w-4/5 flex flex-col"
                                >
                                    <CardHeader className="flex items-center gap-3 p-4">
                                        <Avatar className="w-20 h-20">
                                            <AvatarImage
                                                src="https://github.com/shadcn.png"
                                                alt="@shadcn"
                                            />
                                            <AvatarFallback>
                                                Avatar
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex items-center gap-1">
                                            <Stars
                                                startNumber={comment.stars}
                                            ></Stars>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="px-4 flex-grow">
                                        <h3 className="font-bold text-green-700 text-3xl mb-2 text-center">
                                            {comment.title}
                                        </h3>
                                        <p className="text-black opacity-60 mb-4 text-xl indent-5 line-clamp-6">
                                            {comment.comment}
                                        </p>
                                        <p className="text-gray-500 text-lg text-end">
                                            {comment.nameUser}
                                        </p>
                                    </CardContent>

                                    <CardFooter className="flex justify-center">
                                        <Button
                                            className={`px-4 py-2 bg-orange-600 hover:bg-orange-400 rounded-md text-white font-medium transition duration-300 ${montserrat.className} w-4/5`}
                                        >
                                            Set box
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        )}
                </div>
            </div>
        </div>
    );
};

export default TopComment;
