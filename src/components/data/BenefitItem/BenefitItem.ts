import { Cog, Gift, Medal } from "lucide-react";
import { IBenefitItem } from "./type";

export const benefitItemData: IBenefitItem[] = [
    {
        id: 1,
        icon: Cog,
        name: "BenefitList.Customizable.Name",
        detail: "BenefitList.Customizable.Detail",
    },
    {
        id: 2,
        icon: Medal,
        name: "BenefitList.HighQuality.Name",
        detail: "BenefitList.HighQuality.Detail",
    },
    {
        id: 3,
        icon: Gift,
        name: "BenefitList.ImpactfulPresentation.Name",
        detail: "BenefitList.ImpactfulPresentation.Detail",
    },
];
