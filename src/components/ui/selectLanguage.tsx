"use client";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { ILanguage } from "@/components/data/Language/type";
import { dataLanguage } from "@/components/data/Language/language";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
interface propsSelectLanguage {
    className?: string;
}
const SelectLanguage = (props: propsSelectLanguage) => {
    const t = useTranslations("SelectLanguage");
    const router = useRouter();
    const handleChangeLanguage = (value: string) => {
        return router.push(value);
    };
    return (
        <Select onValueChange={(value) => handleChangeLanguage(value)}>
            <SelectTrigger
                className={`${props.className} h-8 border-black w-[120px]`}
            >
                <SelectValue placeholder={t("Language")} />
            </SelectTrigger>
            <SelectContent className="cursor-pointer w-[20px]">
                {dataLanguage &&
                    dataLanguage.map((item: ILanguage, index: number) => {
                        return (
                            <SelectItem
                                value={item.srcLink}
                                key={item.id || index}
                                className="cursor-pointer"
                            >
                                <div className="content flex items-center justify-center ">
                                    <p className="language mr-3 w-10">
                                        {item.name}
                                    </p>

                                    <Image
                                        src={item.srcImg}
                                        alt={item.name}
                                        width={20}
                                        height={10}
                                    ></Image>
                                </div>
                            </SelectItem>
                        );
                    })}
            </SelectContent>
        </Select>
    );
};

export default SelectLanguage;
