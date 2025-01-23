import { Montserrat } from "next/font/google";
import "@/app/styles/globals.css";
import SubHeaderHome from "@/components/common/SubHeaderHome";
import HeaderHome from "@/components/common/HeaderHome";
import Footer from "@/components/common/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ELanguage } from "@/components/data/Language/type";
import { backGroundColorWeb } from "@/app/data/Color/color";

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: ELanguage.EN | ELanguage.Vi };
}>) {
    const messages = await getMessages();
    if (!routing.locales.includes(locale)) {
        return notFound();
    }
    return (
        <html lang={locale}>
            <body
                className={`antialiased ${montserrat.className} flex flex-col`}
            >
                <NextIntlClientProvider messages={messages}>
                    <SubHeaderHome
                        className={`px-14 h-[40px] bg-black w-full text-white ${backGroundColorWeb} sticky top-0 z-50`}
                    ></SubHeaderHome>
                    <HeaderHome
                        className={`border-t-[2px] h-[70px] px-3 md:px-7 bg-black flex text-white justify-between items-center ${backGroundColorWeb} sticky top-[40px] z-40`}
                    ></HeaderHome>
                    {children}
                    <Footer className="bg-slate-800 md:h-[70vh] h-[950px] px-10"></Footer>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
