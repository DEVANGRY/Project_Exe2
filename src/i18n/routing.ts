import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
    locales: ["en", "vi"],
    defaultLocale: "en",
    pathnames: {
        "/": { en: "/", vi: "/" },
        "/shop": {
            en: "/shop",
            vi: "/cua-hang",
        },
    },
});

export const {
    Link: LinkI18n,
    redirect,
    usePathname,
    useRouter,
    getPathname,
} = createNavigation(routing);
