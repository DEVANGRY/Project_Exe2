import { Cog, Gift, Medal } from "lucide-react";
import { IBenefitItem } from "./type";

export const benefitItemData: IBenefitItem[] = [
    {
        id: 1,
        icon: Cog,
        name: "Customizable",
        detail: "Tailor your gifts to reflect your unique style and message",
    },
    {
        id: 2,
        icon: Medal,
        name: "High-Quality",
        detail: "Only the finest products make it into our boxes",
    },
    {
        id: 3,
        icon: Gift,
        name: "Impactful Presentation",
        detail: "Our packaging is as beautiful as the gifts inside",
    },
];
