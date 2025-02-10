import React from "react";
import { banner2 } from "@/app/data/Banner/banner";


const Banner2 = () => {
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
