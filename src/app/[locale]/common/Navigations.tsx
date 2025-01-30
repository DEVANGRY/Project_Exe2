import { propsNavigation } from "@/app/types/props.interface";
import { LinkI18n } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

const Navigation = (props: propsNavigation) => {
    const t = useTranslations("Navigation");
    return (
        <div className={`${props.className} w-full py-5`}>
            <div className="nav_container flex">
                <LinkI18n href="/" className="home opacity-50">
                    {t("Home")}
                </LinkI18n>
                <span className="ml-2">/</span>
                <LinkI18n href="/shop" className="detail ml-2">
                    {t("Gift Box")}
                </LinkI18n>
            </div>
        </div>
    );
};

export default Navigation;
