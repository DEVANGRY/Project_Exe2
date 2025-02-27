import { IBenefitItem } from "@/components/data/BenefitItem/type";

export interface propsBanner {
    className?: string;
}
export interface propsBannerMain {
    className?: string;
}
export interface propsHeaderHome {
    className?: string;
}
export interface propsLogo {
    propClassName?: string;
}
export interface propsSponsor {
    className?: string;
}
export interface propsSubHeaderHome {
    className?: string;
}
export interface propsFeatured {
    className?: string;
    onClick?: (id : string) => void;
}
export interface propsFooter {
    className?: string;
}
export interface propsBenefitsSection {
    className?: string;
}
export interface propsBenefitCardItem {
    className?: string;
    data: IBenefitItem;
}
export interface propsFaqs {
    className?: string;
}
export interface propsStart {
    className?: string;
    startNumber: number;
}

export interface propsNavigation {
    className?: string;
}
export interface propsFilter {
    className?: string;
}
export interface propsBannerShop {
    className?: string;
}
