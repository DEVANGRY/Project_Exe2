"use client";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Banner1 from "@/app/common/subBanner/Banner1";
interface propsBanner {
    className: string;
}
const Banner = (props: propsBanner) => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <div className="w-full border-t-2 border-orange-600">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className={` ${props.className}`}>
                    <CarouselItem className="w-full">
                        <div className="h-full">
                            <Card className="h-full">
                                <CardContent className="flex items-center justify-center h-full p-0 ">
                                    <Banner1 />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="w-full">
                        <div className="h-full">
                            <Card className="h-full">
                                <CardContent className="flex items-center justify-center h-full p-0 ">
                                    <Banner1 />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="w-full">
                        <div className="h-full">
                            <Card className="h-full">
                                <CardContent className="flex items-center justify-center h-full p-0 ">
                                    <Banner1 />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
        </div>
    );
};

export default Banner;
