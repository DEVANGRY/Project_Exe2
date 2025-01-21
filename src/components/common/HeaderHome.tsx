import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Store } from "lucide-react";
import { propsHeaderHome } from "@/app/types/props.interface";

const HeaderHome = (props: propsHeaderHome) => {
    return (
        <header className={`${props.className}`}>
            <div className="left_content cursor-pointer">
                <Logo propClassName="h-[80px] w-[80px]"></Logo>
            </div>
            <div className="right_content md:flex">
                <Link href={"/#"} className="login hover:text-orange-600">
                    Join | Login
                </Link>
                <Store className="ml-10  hover:text-orange-600 cursor-pointer" />
            </div>
        </header>
    );
};

export default HeaderHome;
