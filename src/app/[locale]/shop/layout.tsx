import React from "react";
import Navigation from "@/app/[locale]/common/Navigations";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["cyrillic"] });

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className={`flex-grow ${nunitoSans.className}  px-24`}>
            <Navigation className="md:sticky top-24"></Navigation>
            {children}
        </main>
    );
}
