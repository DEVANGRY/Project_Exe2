import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/styles/globals.css";
import SubHeaderHome from "@/components/common/SubHeaderHome";
import HeaderHome from "@/components/common/HeaderHome";
import Sponsor from "@/components/home/Sponsor";
import { backGroundColorWeb } from "./data/Color/color";
import BannerCarousel from "@/components/home/BannerCarousel";
import BannerMain from "@/components/home/BannerMain";
import Featured from "@/components/home/Featured";
import Footer from "@/components/common/Footer";
import BenefitsSection from "@/components/home/BenefitsSection";
import TopComment from "@/components/home/TopComment";
import Faqs from "@/components/home/Faqs";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "App Create By Tuấn Dev",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body
                className={`antialiased ${montserrat.className} flex flex-col`}
            >
                <SubHeaderHome
                    className={`px-14 h-[40px] bg-black w-full text-white ${backGroundColorWeb} sticky top-0 z-50`}
                ></SubHeaderHome>
                <HeaderHome
                    className={`border-t-[2px] h-[70px] px-3 md:px-7 bg-black flex text-white justify-between items-center ${backGroundColorWeb} sticky top-[40px] z-40`}
                ></HeaderHome>

                <BannerCarousel className="h-[70vh]"></BannerCarousel>
                <Sponsor className={`${backGroundColorWeb}`} />
                <Featured className="bg-slate-100"></Featured>
                <BannerMain className="h-[60vh] relative"></BannerMain>
                <BenefitsSection className="h-[800px] md:h-[65vh] bg-gray-100"></BenefitsSection>
                <TopComment></TopComment>
                <Faqs className="h-[60vh] bg-white"></Faqs>
                {children}
                <Footer className="bg-slate-800 md:h-[65vh] h-[900px] px-10"></Footer>
            </body>
        </html>
    );
}
