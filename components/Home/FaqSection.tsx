"use client";

import React, { useState } from "react";
import Script from "next/script";

const faqs = [
  {
    question: "What goat breeds do you provide?",
    answer:
      "We provide pure and crossbred Boer, Barbari, and Sirohi goats, along with indigenous breeds like Khari, Sinhal, Chyangra, and Terai goats. Our breeding stock is accredited by the National Goat Research Program, Bandipur (NARC).",
  },
  {
    question: "Where are your goat farms located?",
    answer:
      "Our breeding farm is located in Butwal, Lumbini Province. We deliver goats to every district across Nepal with transport charged separately based on distance and order size.",
  },
  {
    question: "What is the growth rate of Boer crossbreed goats?",
    answer:
      "Boer crossbreeds achieve 100-200 gm/day growth rates—nearly double the native Khari breed's 60 gm/day. A 50% Boer cross shows 120 gm/day average daily gain, making them ideal for commercial meat production.",
  },
  {
    question: "Do you provide technical support and training?",
    answer:
      "Yes. We provide complete technical support including feeding guides, shed construction advice, disease management protocols, vaccination schedules, and deworming records for every goat we supply.",
  },
  {
    question: "What are your prices for Boer goats?",
    answer:
      "Prices range from NPR 900 to NPR 2,500 per kg live weight depending on breeding percentage. 100% pure Boer costs NPR 1,900-2,500 per kg for breeding programs, while 50-87% crosses cost NPR 900-1,500 per kg for commercial meat production.",
  },
  {
    question: "How can I order goats?",
    answer:
      "Call +977 9847044546 or email ainshad711@gmail.com. You can visit our farm to see the animals and their parents before purchase. We deliver across Nepal with transport charged separately based on distance and order size.",
  },
];

// Reusable SVG Icon for the Toggle
const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={
      isOpen
        ? "rotate-180 transition-transform duration-300"
        : "transition-transform duration-300"
    }
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function FaqSection() {
  // Store the index of the currently open FAQ. Null means all are closed.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <section className="w-full bg-[#1A3322]/2 pt-6 pb-10 sm:pt-8 sm:pb-14 md:pt-16 md:pb-16">
        <div className="templateContainer">
          <div className="grid grid-cols-1 lg:grid-cols-[4.5fr_7.5fr] gap-2 md:gap-14 lg:gap-12">
            {/* LEFT SIDE: Sticky Header */}
            <div className="relative">
              <div className="lg:sticky lg:top-32 h-fit">
                <h2 className="bg-linear-to-r from-[#1B5E20] to-[#2E7D32] bg-clip-text text-xs md:text-sm font-medium tracking-[0.2em] text-transparent uppercase mb-3">
                  Farming Support
                </h2>
                <h3 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[36px] font-normal text-[#101010] leading-snug md:leading-[42.2px] lg:leading-[40px] font-heading mb-5 md:mb-6">
                  Frequently <br className="hidden lg:block" /> Asked Questions
                </h3>
                <p className="font-bricolage-grotesque text-[14.5px] sm:text-[15.5px] md:text-[16.36px] lg:text-[15.5px] font-light text-stone-600 mb-6 md:mb-8 leading-relaxed max-w-xl">
                  Answers about our goat breeds, Boer crossbreed performance,
                  pricing, delivery services, technical support, and farming
                  assistance.
                </p>


              </div>
            </div>

            {/* RIGHT SIDE: Scrollable Accordion List */}
            <div className="flex flex-col">
              <div className="w-full divide-y divide-gray-300/80 border-t border-b border-gray-300/80">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div key={index} className="py-4 sm:py-5 md:py-6 group">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="flex w-full items-start sm:items-center cursor-pointer justify-between gap-3 sm:gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E20] focus-visible:ring-offset-4 rounded-lg"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`font-heading text-[18px] sm:text-[20px] md:text-[22px] lg:text-[20px] leading-[1.35] font-normal transition-colors duration-300 ${
                            isOpen
                              ? "text-[#101010]"
                              : "text-stone-700 group-hover:text-[#101010]"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <span className="ml-1 sm:ml-4 md:ml-6 flex-shrink-0 pt-1 sm:pt-0">
                          <PlusIcon isOpen={isOpen} />
                        </span>
                      </button>

                      {/* Smooth Height Animation using CSS Grid */}
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pt-3 sm:pt-4 pb-1 sm:pb-2 font-bricolage-grotesque text-[14.5px] sm:text-[15.5px] md:text-[16.36px] font-light text-stone-600 leading-relaxed max-w-3xl pr-6 sm:pr-8">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
