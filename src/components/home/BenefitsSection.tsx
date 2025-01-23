import { propsBenefitsSection } from "@/app/types/props.interface";
import React from "react";
import { Dancing_Script } from "next/font/google";
import BenefitCardItem from "@/components/common/BenefitCardItem";
import { benefitItemData } from "@/components/data/BenefitItem/BenefitItem";
import { IBenefitItem } from "@/components/data/BenefitItem/type";
import { useTranslations } from "next-intl";

const dancing_Script = Dancing_Script({ subsets: ["latin"] });

const BenefitsSection = (props: propsBenefitsSection) => {
    const t = useTranslations("BenefitsSection");
    return (
        <div className={`${props.className} flex flex-col`}>
            <div
                className={`content_note flex flex-col items-center justify-center gap-5 h-full ${dancing_Script.className}`}
            >
                <h2
                    className={`title_benefit text-5xl font-bold mt-5 px-1 md:px-0`}
                >
                    {t("Why Choose Bliss Box")}
                </h2>
                <p className="text-sm text-center w-[250px] md:w-[850px] md:text-2xl text-orange-800 ">
                    {t("Detail Benefit")}
                </p>
            </div>
            <div className="item_benefit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-16 gap-16 justify-center px-10">
                {benefitItemData &&
                    benefitItemData.map((item: IBenefitItem, index: number) => {
                        return (
                            <BenefitCardItem
                                key={item.id || index}
                                data={item}
                            ></BenefitCardItem>
                        );
                    })}
            </div>
        </div>
    );
};

export default BenefitsSection;
