import React from "react";
import { Roboto } from "next/font/google";
import { propsBenefitCardItem } from "@/app/types/props.interface";
import { useTranslations } from "next-intl";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });
const BenefitCardItem = (props: propsBenefitCardItem) => {
    const Icon = props.data.icon;
    const t = useTranslations("BenefitsSection");
    return (
        <div className={`w-[450px] ${inter.className} ${props.className}`}>
            <div className="flex flex-col justify-center items-center gap-3">
                <Icon className="w-8 h-8 md:w-14 md:h-14 mt-3 text-yellow-600" />
                <h4 className="title_item_benefit text-xl md:text-2xl">
                    {t(props.data.name)}
                </h4>
                <p className="detail_item_benefit text-xs md:text-sm text-center">
                    {t(props.data.detail)}
                </p>
            </div>
        </div>
    );
};

export default BenefitCardItem;
