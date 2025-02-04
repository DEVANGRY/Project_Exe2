import React from "react";
import { banner1 } from "@/app/data/Banner/banner";
import { Button } from "@/components/ui/button";
import { Playwrite_IT_Moderna } from "next/font/google";
import { useTranslations } from "next-intl";

const playwrite = Playwrite_IT_Moderna({});

const Banner = () => {
    const t = useTranslations("Banner1");
    return (
        <div className="relative w-full h-full">
            <div
                className="relative w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${banner1})`,
                }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white md:ml-[150px] ml-28">
                <p className={`text-2xl ${playwrite.className} font-semibold`}>
                    {t("NameWeb")}
                </p>
                <p className="text-2xl mt-2 uppercase font-bold max-w-[400px]">
                    {t("DetailBanner")}
                </p>
                <Button className="mt-4 px-6 py-2 bg-orange-600 hover:bg-orange-500 rounded-md text-white font-medium">
                    {t("GetStart")}
                </Button>
            </div>
        </div>
    );
};

export default Banner;
