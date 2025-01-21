import React from "react";
import { mainBanner } from "@/app/data/Banner/banner";
import { Button } from "@/components/ui/button";
import { propsBannerMain } from "@/app/types/data.interface";

const BannerMain = (props: propsBannerMain) => {
    return (
        <div className={`${props.className}`}>
            <div
                className="relative w-full h-full bg-cover bg-right"
                style={{ backgroundImage: `url(${mainBanner})` }}
            >
                <div className="absolute inset-0 bg-black/45"></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-white text-4xl font-bold drop-shadow-lg hover:text-red-300 cursor-pointer">
                    WHAT&apos;S INSIDE?
                </h1>

                <p
                    className={`text-sm mt-2 max-w-[60vw] tracking-wider italic hover:text-orange-500 cursor-pointer`}
                >
                    A curated collection of awesome items from the best pop
                    culture franchises, delivered to your door every month.
                </p>
                <Button className="mt-6 -ml-7 px-10 py-6 bg-orange-600 hover:bg-orange-500 rounded-md text-white font-medium">
                    Shop Now
                </Button>
            </div>
        </div>
    );
};

export default BannerMain;
