import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Stars from "@/components/common/Stars";
import { propsFilter } from "@/app/types/props.interface";

const Filter = (props: propsFilter) => {
    return (
        <div
            className={`filter mt-5 lg:mt-0 p-4 bg-gray-50 rounded-md shadow-sm ${props.className}`}
        >
            <h2 className="title_filter border-b-[1px] text-lg lg:text-2xl font-bold border-black pb-1 mb-3">
                Filter
            </h2>
            <div className="container_filter space-y-4">
                <div className="list_item">
                    <h3 className="name_filter text-sm lg:text-lg font-semibold pb-1">
                        Category
                    </h3>
                    <div className="filter_item space-y-1">
                        <div className="item flex items-center">
                            <Checkbox id="noel" className="border-[1px]" />
                            <label
                                htmlFor="noel"
                                className="text-xs lg:text-sm font-medium cursor-pointer ml-2"
                            >
                                Noel
                            </label>
                        </div>
                        <div className="item flex items-center">
                            <Checkbox id="tet" className="border-[1px]" />
                            <label
                                htmlFor="tet"
                                className="text-xs lg:text-sm font-medium cursor-pointer ml-2"
                            >
                                Tet
                            </label>
                        </div>
                        <div className="item flex items-center">
                            <Checkbox id="all" className="border-[1px]" />
                            <label
                                htmlFor="all"
                                className="text-xs lg:text-sm font-medium cursor-pointer ml-2"
                            >
                                All occasions
                            </label>
                        </div>
                    </div>
                </div>

                <div className="list_item">
                    <h3 className="name_filter text-sm lg:text-lg font-semibold pb-1">
                        Gifts for
                    </h3>
                    <div className="filter_item space-y-1">
                        <div className="item flex items-center">
                            <Checkbox id="male" className="border-[1px]" />
                            <label
                                htmlFor="male"
                                className="text-xs lg:text-sm font-medium cursor-pointer ml-2"
                            >
                                Male
                            </label>
                        </div>
                        <div className="item flex items-center">
                            <Checkbox id="female" className="border-[1px]" />
                            <label
                                htmlFor="female"
                                className="text-xs lg:text-sm font-medium cursor-pointer ml-2"
                            >
                                Female
                            </label>
                        </div>
                        <div className="item flex items-center">
                            <Checkbox id="foreigner" className="border-[1px]" />
                            <label
                                htmlFor="foreigner"
                                className="text-xs lg:text-sm font-medium cursor-pointer ml-2"
                            >
                                Foreigner
                            </label>
                        </div>
                        <div className="item flex items-center">
                            <Checkbox id="business" className="border-[1px]" />
                            <label
                                htmlFor="business"
                                className="text-xs lg:text-sm font-medium cursor-pointer ml-2"
                            >
                                Business
                            </label>
                        </div>
                    </div>
                </div>

                <div className="list_item">
                    <h3 className="name_filter text-sm lg:text-lg font-semibold pb-1">
                        Evaluate
                    </h3>
                    <div className="filter_item space-y-2">
                        <RadioGroup defaultValue="comfortable">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="5stars" id="5stars" />
                                <Label
                                    htmlFor="5stars"
                                    className="flex items-center text-xs lg:text-sm"
                                >
                                    <Stars
                                        startNumber={5}
                                        className="w-3 lg:w-4 h-3 lg:h-4"
                                    />
                                    <span className="ml-1 md:flex hidden">
                                        5+ stars
                                    </span>
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="4stars" id="4stars" />
                                <Label
                                    htmlFor="4stars"
                                    className="flex items-center text-xs lg:text-sm"
                                >
                                    <Stars
                                        startNumber={4}
                                        className="w-3 lg:w-4 h-3 lg:h-4"
                                    />
                                    <span className="ml-1 md:flex hidden">
                                        4+ stars
                                    </span>
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="3stars" id="3stars" />
                                <Label
                                    htmlFor="3stars"
                                    className="flex items-center text-xs lg:text-sm"
                                >
                                    <Stars
                                        startNumber={3}
                                        className="w-3 lg:w-4 h-3 lg:h-4"
                                    />
                                    <span className="ml-1 md:flex hidden">
                                        3+ stars
                                    </span>
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>

                <div className="list_item">
                    <h3 className="name_filter text-sm lg:text-lg font-semibold pb-1">
                        Price
                    </h3>
                    <div className="filter_item space-y-1">
                        <RadioGroup defaultValue="comfortable">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="200-500k"
                                    id="200-500k"
                                />
                                <Label
                                    htmlFor="200-500k"
                                    className="text-xs lg:text-sm"
                                >
                                    Từ 200k đến 500k
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="500k-1tr"
                                    id="500k-1tr"
                                />
                                <Label
                                    htmlFor="500k-1tr"
                                    className="text-xs lg:text-sm"
                                >
                                    Từ 500k đến 1tr
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="above-1tr"
                                    id="above-1tr"
                                />
                                <Label
                                    htmlFor="above-1tr"
                                    className="text-xs lg:text-sm"
                                >
                                    Trên 1tr
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
