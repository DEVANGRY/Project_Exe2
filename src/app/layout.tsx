import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/styles/globals.css";
import SubHeaderHome from "@/components/common/SubHeaderHome";
import HeaderHome from "@/components/common/HeaderHome";
import Banner from "@/components/common/Banner";
import Sponsor from "@/components/common/Sponsor";
import { backGroundColorWeb } from "./data/Color/color";

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
            <body
                className={`antialiased ${montserrat.className} flex flex-col`}
            >
                <SubHeaderHome
                    className={`px-14 h-[40px] bg-black w-full text-white ${backGroundColorWeb} sticky`}
                ></SubHeaderHome>
                <HeaderHome
                    className={`mt-[2px] h-[70px] px-3 md:px-7 bg-black flex text-white justify-between items-center ${backGroundColorWeb}`}
                ></HeaderHome>

                <Banner className="h-[70vh]"></Banner>
                <Sponsor className={`${backGroundColorWeb}`} />

                {children}
            </body>
        </html>
    );
}
