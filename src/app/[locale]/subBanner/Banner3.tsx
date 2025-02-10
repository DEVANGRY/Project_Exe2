import React from "react";
import { banner5 } from "@/app/data/Banner/banner";

const Banner3 = () => {
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
