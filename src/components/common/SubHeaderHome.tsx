"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import SelectLanguage from "@/components/ui/selectLanguage";
import { Button } from "@/components/ui/button";
import MenuHelper from "./MenuHelper";
interface propsSubHeaderHome {
    className: string;
}
const SubHeader = (props: propsSubHeaderHome) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={` ${props.className}`}>
            <div className="hidden md:flex justify-end items-center px-4 h-full">
                <div className="flex items-center gap-6">
                    <MenuHelper></MenuHelper>
                    <div className="w-[80px]">
                        <SelectLanguage />
                    </div>
                </div>
            </div>

            <div className="md:hidden">
                <div className="flex justify-end items-center -mr-[40px] h-[40px]">
                    <Button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none w-[30px] h-[30px]"
                    >
                        <Menu size={24} />
                    </Button>
                </div>

                {isMenuOpen && (
                    <div className="absolute right-0 w-full bg-black border-t border-gray-700">
                        <div className="flex flex-col items-end px-4 py-2 gap-4">
                            <MenuHelper></MenuHelper>
                            <div className="w-[80px]">
                                <SelectLanguage />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubHeader;
