import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { dataFaqs } from "@/components/data/Faqs/Faqs";
import { useTranslations } from "next-intl";

const Faqs = () => {
    const t = useTranslations("Faq");
    return (
        <div className="py-12 px-4 bg-white">
            <div className="max-w-5xl ml-14 md:mx-auto md:flex">
                <h2 className="text-4xl mb-8 w-full md:w-1/2 font-serif md:text-start">
                    {t("Title")}
                </h2>

                <div className="faqs w-2/3 ml-10">
                    <Accordion
                        type="multiple"
                        className="space-y-4 border-t border-gray-200 w-full overflow-hidden"
                    >
                        {dataFaqs &&
                            dataFaqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b border-gray-200"
                                >
                                    <AccordionTrigger className="w-full flex justify-between items-center text-left py-4 text-lg font-medium text-gray-800 hover:text-gray-900 transition">
                                        {t(faq.nameQuestion)}
                                    </AccordionTrigger>

                                    <AccordionContent className="py-2 text-gray-600 text-base transition-all duration-300 indent-7">
                                        {t(faq.answer)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faqs;
