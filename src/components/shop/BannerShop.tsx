import React from "react";
import { bannerShop } from "@/app/data/Banner/banner";
import { propsBannerShop } from "@/app/types/props.interface";

const BannerShop = (props: propsBannerShop) => {
    return (
        <div
            className={`${props.className} relative w-full rounded-md min-h-[200px] md:h-[40vh] lg:h-[50vh]`}
        >
            <div
                className="absolute inset-0 bg-cover bg-bottom rounded-md"
                style={{ backgroundImage: `url(${bannerShop})` }}
            >
                <div className="absolute inset-0 bg-black/25 rounded-md"></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg hover:text-red-300 cursor-pointer uppercase">
                    Hộp Quà Tặng
                </h2>

                <p className="text-sm md:text-xl mt-3 md:mt-5 max-w-[80vw] md:max-w-[60vw] tracking-wider italic hover:text-orange-500 cursor-pointer">
                    Không phải chi tiêu, mà là đầu tư hạnh phúc!
                </p>
            </div>
        </div>
    );
};

export default BannerShop;
