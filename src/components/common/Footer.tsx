import { propsFooter } from "@/app/types/props.interface";
import React from "react";
import { Button } from "@/components/ui/button";
import { dataFooter } from "@/components/data/Footer/dataFooter";
import { useTranslations } from "next-intl";

const Footer = (props: propsFooter) => {
    const t = useTranslations("Footer");
    return (
        <footer className={`${props.className} text-white py-10`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-8 mb-8">
                    <div className="md:w-2/3">
                        <h1 className="text-2xl font-bold">
                            {t(dataFooter.nameLogo)}
                        </h1>
                        <p className="text-sm text-gray-400 mt-2 w-[350px] md:w-[500px]">
                            {t(dataFooter.detail)}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                    <div>
                        <h2 className="font-semibold mb-3 uppercase">
                            {t("About")}
                        </h2>
                        <ul className="space-y-2 text-gray-400">
                            {dataFooter.about &&
                                dataFooter.about.map((item: string) => {
                                    return (
                                        <li
                                            key={item}
                                            className="hover:text-white cursor-pointer"
                                        >
                                            {t(item)}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-3 uppercase">
                            {t("Support")}
                        </h2>
                        <ul className="space-y-2 text-gray-400">
                            {dataFooter.about &&
                                dataFooter.support.map((item: string) => {
                                    return (
                                        <li
                                            key={item}
                                            className="hover:text-white cursor-pointer"
                                        >
                                            {t(item)}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-3 uppercase">
                            {t("Crates")}
                        </h2>
                        <ul className="space-y-2 text-gray-400">
                            {dataFooter.about &&
                                dataFooter.crates.map((item: string) => {
                                    return (
                                        <li
                                            key={item}
                                            className="hover:text-white cursor-pointer"
                                        >
                                            {t(item)}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="font-semibold mb-3 text-center md:text-left uppercase">
                            {t("Want Epic Deals & Looter Intel")}
                        </h2>
                        <Button className="px-6 py-2 bg-orange-500 text-white font-bold text-sm rounded hover:bg-orange-600 transition w-[280px] uppercase">
                            {t("Sign me up")}
                        </Button>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-500 text-xs ">
                    <p className="hover:text-white cursor-pointer">
                        {t("Copyright © 2025 Bliss box")} |{" "}
                        {t("Terms of Service")} | {t("Privacy Policy")} |{" "}
                        {t("Accessibility Options")}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
