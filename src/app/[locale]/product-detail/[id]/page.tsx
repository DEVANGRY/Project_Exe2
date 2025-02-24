"use client"; // Chuyển thành Client Component

import { useParams } from "next/navigation"; // Dùng để lấy tham số từ URL
import { useEffect, useState } from "react";
import { IGiftBox } from "@/components/data/GiftBox/type";
import { dataGiftBox } from "@/components/data/GiftBox/dataGiftBox"; // Giả sử đây là dữ liệu sản phẩm của bạn
import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram } from "react-icons/fa";
export default function ProductDetail() {
    const params = useParams(); // Lấy params từ URL (bao gồm id)
    const [product, setProduct] = useState<IGiftBox | null>(null);
    const t = useTranslations("Featured");

    useEffect(() => {
        if (params?.id) {
            const foundProduct = dataGiftBox.find((item) => item.id?.toString() === params.id);
            setProduct(foundProduct || null);
        }
    }, [params]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                    <img className="w-full" alt="image of a girl posing" src={product.srcImage} />
                    <img className="mt-6 w-full" alt="image of a girl posing" src={product.srcImagedetail} />
                </div>
                <div className="md:hidden">
                    <img className="w-full" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                    <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                        <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                        <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                        <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                        <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                    </div>
                </div>
                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-6">
                        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">{t(product.nameBox)}</p>
                        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{t(product.nameBox)}</h1>
                    </div>
                   
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.facebook.com/profile.php?id=61571943447707" target="_blank" rel="noreferrer">
                            <button className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                                <FaFacebook className="mr-2" />
                                Share on Facebook
                            </button>
                        </a>
                        <button className="flex items-center justify-center bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
                            <FaInstagram className="mr-2" />
                            Share on Instagram
                        </button>
                    </div>
                    <div>
                        <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">{t(product.detailBox)}</p>
                        <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Product Code: 8BN321AF2IF0NYA</p>
                        <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Length: 13.2 inches</p>
                        <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Height: 10 inches</p>
                        <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Depth: 5.1 inches</p>
                        <p className="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p>
                    </div>
                    <div>
                        <div className="border-t border-b py-4 mt-7 border-gray-200">
                            <div data-menu className="flex justify-between items-center cursor-pointer">
                                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Shipping and returns</p>
                                <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
                                    <svg className="transform text-gray-300 dark:text-white" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L5 5L1 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300" id="sect">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable</div>
                        </div>
                    </div>
                    <div>
                        <div className="border-b py-4 border-gray-200">
                            <div data-menu className="flex justify-between items-center cursor-pointer">
                                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Contact us</p>
                                <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
                                    <svg className="transform text-gray-300 dark:text-white" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L5 5L1 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300" id="sect">If you have any questions on how to return your item to us, contact us.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
