import React, { useState } from "react";

import { faqs } from "../../data/corpcode-content";
import FaqItem from "./FaqItem";

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corpcode-faq-heading"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            FAQ
          </span>
          <h2
            id="corpcode-faq-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
          >
            Questions, answered.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed fade-in">
            Still have one we haven&apos;t covered? Email contact@corplabs.co — we usually reply within a business day.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              id={String(i)}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
};

export default FaqSection;
