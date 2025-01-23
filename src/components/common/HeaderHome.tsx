import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Store } from "lucide-react";
import { propsHeaderHome } from "@/app/types/props.interface";
import { useTranslations } from "next-intl";

const HeaderHome = (props: propsHeaderHome) => {
    const t = useTranslations("HeaderHome");
    return (
        <header className={`${props.className}`}>
            <div className="left_content cursor-pointer">
                <Logo propClassName="h-[80px] w-[80px]"></Logo>
            </div>
            <div className="right_content md:flex">
                <Link href={"/#"} className="login hover:text-orange-600">
                    {t("Login")}
                </Link>
                <Store className="ml-10  hover:text-orange-600 cursor-pointer" />
            </div>
        </header>
    );
};

export default HeaderHome;
