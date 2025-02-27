import Image from "next/image";
import React from "react";
import { logoIcon } from "@/components/data/Logo/logo";
import { Playwrite_IT_Moderna } from "next/font/google";
import { propsLogo } from "@/app/types/props.interface";
import Link from "next/link";



const playwrite = Playwrite_IT_Moderna({});

const Logo = (propsLogo: propsLogo) => {
    return (
        <div
            className={`logo flex flex-col text-white items-center justify-center ${propsLogo.propClassName}`}
        >
            <Link href="/#">
                <Image src={logoIcon} alt="logo" width={30} height={30} />
                <p className={`title_logo text-sm ${playwrite.className}`}>
                    Bliss box
                </p>
            </Link>
        </div>
    );
};

export default Logo;
