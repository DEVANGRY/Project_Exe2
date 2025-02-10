import React from "react";
import { banner2 } from "@/app/data/Banner/banner";
import { Button } from "@/components/ui/button";
import { Playwrite_IT_Moderna } from "next/font/google";
import { useTranslations } from "next-intl";

const playwrite = Playwrite_IT_Moderna({});

const Banner2 = () => {
    const t = useTranslations("Banner2");
    return (
        <div className="relative w-full h-full">
            <div
                className="relative w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${banner2})`,
                }}
            ></div>
        </div>
    );
};

export default Banner2;
