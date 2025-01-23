import BannerCarousel from "@/components/home/BannerCarousel";
import BannerMain from "@/components/home/BannerMain";
import BenefitsSection from "@/components/home/BenefitsSection";
import Faqs from "@/components/home/Faqs";
import Featured from "@/components/home/Featured";
import Sponsor from "@/components/home/Sponsor";
import TopComment from "@/components/home/TopComment";
import { backGroundColorWeb } from "@/app/data/Color/color";

export default function Home() {
    return (
        <div className="">
            <BannerCarousel className="h-[70vh]"></BannerCarousel>
            <Sponsor className={`${backGroundColorWeb}`} />
            <Featured className="bg-slate-100"></Featured>
            <BannerMain className="h-[60vh] relative"></BannerMain>
            <BenefitsSection className="h-[800px] md:h-[65vh] bg-gray-100"></BenefitsSection>
            <TopComment></TopComment>
            <Faqs></Faqs>
        </div>
    );
}
