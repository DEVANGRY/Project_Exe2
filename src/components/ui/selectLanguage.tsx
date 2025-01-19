import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import {
    ELanguage,
    EPathLanguage,
    ILanguage,
} from "@/components/data/Language/type";
import { dataLanguage } from "@/components/data/Language/language";
interface propsSelectLanguage {
    className?: string;
}
const SelectLanguage = (props: propsSelectLanguage) => {
    return (
        <Select>
            <SelectTrigger className={`${props.className} h-8 border-black`}>
                <SelectValue>
                    <Image
                        src={EPathLanguage.VIETNAM}
                        alt={ELanguage.VIETNAM}
                        width={30}
                        height={20}
                    ></Image>
                </SelectValue>
            </SelectTrigger>
            <SelectContent>
                {dataLanguage &&
                    dataLanguage.map((item: ILanguage, index: number) => {
                        return (
                            <SelectItem
                                value={item.name}
                                key={item.id || index}
                            >
                                <div className="content flex items-center">
                                    <Image
                                        src={item.src}
                                        alt={item.name}
                                        width={20}
                                        height={10}
                                    ></Image>
                                    <p className="language ml-3">{item.name}</p>
                                </div>
                            </SelectItem>
                        );
                    })}
            </SelectContent>
        </Select>
    );
};

export default SelectLanguage;
