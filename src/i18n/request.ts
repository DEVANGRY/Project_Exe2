import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    console.log("Hello :", requestLocale);
    if (!locale || !routing.locales.includes(locale as "en" | "vi")) {
        locale = routing.defaultLocale;
    }
    console.log("Resolved Locale:", locale);
    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
