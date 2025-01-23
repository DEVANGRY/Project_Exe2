import { useTranslations } from "next-intl";
import React from "react";

const MenuHelper = () => {
    const cssText: string =
        "cursor-pointer hover:text-gray-300 transition-colors font-semibold text-xs uppercase";
    const t = useTranslations("MenuHelper");
    return (
        <>
            <p className={`${cssText}`}>{t("HowItWork")}</p>
            <p className={`${cssText} mr-4`}>{t("Support")}</p>
        </>
    );
};

export default MenuHelper;
