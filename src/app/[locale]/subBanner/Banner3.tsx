import React from "react";
import { banner3, banner4, banner5 } from "@/app/data/Banner/banner";
import { Button } from "@/components/ui/button";
import { Playwrite_IT_Moderna } from "next/font/google";
import { useTranslations } from "next-intl";

const playwrite = Playwrite_IT_Moderna({});

const Banner3 = () => {
    const t = useTranslations("Banner3");
    return (
        <div className="relative w-full h-full" >
            <div
                className="relative w-full h-full bg-cover bg-center "
                style={{
                    backgroundImage: `url(${banner5})`,
                }}
            ></div>
        </div>
    );
};

export default Banner3;
