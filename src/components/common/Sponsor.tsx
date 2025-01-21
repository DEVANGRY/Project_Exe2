import React from "react";
import { sponsorData } from "@/components/data/Sponsor/sponsorData";
import { ISponsor } from "@/components/data/Sponsor/type";
import { propsSponsor } from "@/app/types/data.interface";

const Sponsor = (props: propsSponsor) => {
    return (
        <div
            className={`section_sponsor ${props.className} text-white flex flex-wrap px-4 md:px-20 items-center justify-center gap-8 md:gap-20 h-[350px] md:h-[140px]`}
        >
            {sponsorData &&
                sponsorData.map((item: ISponsor, index: number) => {
                    const Icon = item.icon;
                    return (
                        <div
                            className="item_sponsor flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-auto"
                            key={item.id || index}
                        >
                            <div className="icon_sponsor text-4xl md:text-5xl">
                                <Icon className="text-orange-600" />
                            </div>
                            <div className="title_sponsor mt-2 text-center text-sm uppercase font-semibold">
                                {item.detail}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Sponsor;
