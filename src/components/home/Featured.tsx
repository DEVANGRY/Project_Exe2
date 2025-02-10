"use client";
import { useRouter } from "next/navigation"; // 🟢 Dùng next/navigation thay vì next/router
import { propsFeatured } from "@/app/types/props.interface";
import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { box1 } from "@/app/data/Box/box";
import { dataGiftBox } from "@/components/data/GiftBox/dataGiftBox";
import { ETypeFormat, IGiftBox } from "@/components/data/GiftBox/type";
import { Button } from "@/components/ui/button";
import { convertFormatMoney } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";

const Featured = (props: propsFeatured) => {
    const t = useTranslations("Featured");
    const router = useRouter();
    const locale = useLocale() || "vi";
    return (
        <div className={`${props.className} p-6 bg-gray-50`}>
            <h2 className="md:text-3xl font-bold text-gray-800 mb-6 text-center uppercase text-2xl hover:text-orange-500 cursor-pointer">
                {t("Featured Subscriptions")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {dataGiftBox &&
                    dataGiftBox.map((box: IGiftBox, index: number) => {
                        return (
                            <Card
                                className="w-[400px] shadow-lg hover:shadow-2xl transition duration-300 rounded-lg overflow-hidden group"
                                key={box.id || index}
                            >
                                <CardHeader className="p-0 overflow-hidden">
                                    <div className="relative w-full h-[250px] overflow-hidden">
                                        <Image
                                            src={box.srcImage || box1}
                                            alt="item"
                                            width={400}
                                            height={250}
                                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                        {t(box.nameBox)}
                                    </h3>
                                    <p className="text-sm text-gray-600 line-clamp-4 indent-5">
                                        {t(box.detailBox)}
                                    </p>
                                </CardContent>
                                <CardFooter className="p-4 flex justify-between items-center border-t border-gray-200">
                                    <p className="text-sm text-gray-700">
                                        <span className="text-lg font-bold text-orange-600">
                                            {convertFormatMoney(
                                                box.price,
                                                ETypeFormat.Dot
                                            )}{" "}
                                            VNĐ
                                        </span>
                                        <span className="text-xs text-gray-500 ml-2"></span>
                                    </p>
                                    <Button className="px-4 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition duration-300"                                     
                                        onClick={() => router.push(`/${locale}/product-detail/${box.id}`)}
                                    >
                                        {t(box.buttonDetail?.toString() || "")}
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
            </div>
        </div>
    );
};

export default Featured;
