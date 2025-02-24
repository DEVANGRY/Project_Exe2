"use client";

import { box1 } from "@/app/data/Box/box";
import { dataGiftBox } from "@/components/data/GiftBox/dataGiftBox";
import { ETypeFormat, IGiftBox } from "@/components/data/GiftBox/type";
import BannerShop from "@/components/shop/BannerShop";
import Filter from "@/components/shop/Filter";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { convertFormatMoney } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Shop = () => {
    const router = useRouter();
    const locale = useLocale() || "vi";
    const t = useTranslations("Featured");

    return (
        <div className="shop flex flex-col lg:flex-row gap-5 ">
            <Filter className="w-full lg:w-1/4 xl:w-1/5 h-[570px] md:sticky top-36 mb-10"></Filter>

            <div className="container_shop border-l border-gray-200 w-full px-3 mb-40 h-[950px]">
                <BannerShop className="h-40 md:h-64 w-full mb-6"></BannerShop>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {dataGiftBox?.map((box: IGiftBox, index: number) => (
                        <Card
                            className="w-full shadow-md hover:shadow-lg transition duration-300 rounded-lg overflow-hidden"
                            key={box.id || index}
                        >
                            <CardHeader className="p-0">
                                <div className="relative w-full h-48 sm:h-56 md:h-64">
                                    <Image
                                        src={box.srcImage || box1}
                                        alt="item"
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 hover:scale-105 cursor-pointer"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                                    {t(box.nameBox)}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-3">
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
                                </p>
                                <Button
                                    className="px-4 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition duration-300"
                                    onClick={() =>
                                        router.push(
                                            `/${locale}/product-detail/${box.id}`
                                        )
                                    }
                                >
                                    Detail
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
