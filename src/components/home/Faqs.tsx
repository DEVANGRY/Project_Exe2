import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { dataFaqs } from "@/components/data/Faqs/Faqs";

const Faqs = () => {
    return (
        <div className="py-12 px-4 bg-white">
            <div className="max-w-4xl mx-auto md:flex">
                <h2 className="text-4xl mb-8 w-1/3 font-serif text-center md:text-start">
                    FAQs
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
                                        {faq.nameQuestion}
                                    </AccordionTrigger>

                                    <AccordionContent className="py-2 text-gray-600 text-base transition-all duration-300 indent-7">
                                        {faq.answer}
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
