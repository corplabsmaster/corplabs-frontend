import React from "react";

interface BenefitCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const grad = (id: string) => (
  <defs>
    <linearGradient
      id={id}
      x1="0"
      y1="0"
      x2="40"
      y2="40"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0%" stopColor="#AEE0FC" />
      <stop offset="50%" stopColor="#BFD8FA" />
      <stop offset="100%" stopColor="#E4D9FB" />
    </linearGradient>
  </defs>
);

const benefits: BenefitCard[] = [
  {
    title: "WhatsApp leads into Odoo, automatically",
    description:
      "Corpi listens on WhatsApp, qualifies leads, and writes them straight into your Odoo CRM with notes, contacts, and next actions ready for your team.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {grad("aiIconGrad1")}
        <path
          d="M5 9a3 3 0 013-3h24a3 3 0 013 3v16a3 3 0 01-3 3H13l-7 6V9z"
          stroke="url(#aiIconGrad1)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M14 17c1 2 3 3 5 3s4-1 5-3"
          stroke="url(#aiIconGrad1)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Draft invoices from a sentence",
    description:
      "Tell Corpi “bill Ahmad RM 1,200 for the June retainer” and a MyInvois-ready draft lands in Odoo, waiting for your approval.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {grad("aiIconGrad2")}
        <rect x="9" y="5" width="22" height="30" rx="2" stroke="url(#aiIconGrad2)" strokeWidth="1.5" />
        <path d="M14 13h12M14 19h12M14 25h8" stroke="url(#aiIconGrad2)" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M29 30l3 3-3 3" stroke="url(#aiIconGrad2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Ask your ERP anything",
    description:
      "“How much stock of SKU-443 is in the Penang warehouse?” Corpi reads your Odoo data live and answers in plain English, BM, or Mandarin.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {grad("aiIconGrad3")}
        <circle cx="18" cy="18" r="11" stroke="url(#aiIconGrad3)" strokeWidth="1.6" />
        <path d="M26 26l8 8" stroke="url(#aiIconGrad3)" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14 18a4 4 0 118 0c0 2-2 3-2 4M18 25v.5" stroke="url(#aiIconGrad3)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ops that keep improving",
    description:
      "Claude powers weekly summaries, anomaly alerts, and workflow suggestions — every tier gets smarter the longer you stay.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {grad("aiIconGrad4")}
        <path
          d="M20 5l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8z"
          stroke="url(#aiIconGrad4)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M31 24l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" stroke="url(#aiIconGrad4)" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const AIIntegrationSection: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corprise-ai-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            AI · Corpi + Claude
          </span>
          <h2
            id="corprise-ai-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
          >
            Your ERP, with a Claude-powered teammate built in.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
            Every Corprise subscription includes Corpi — our Claude-powered assistant wired directly into your Odoo instance. It&apos;s how a five-person SME runs operations like a fifty-person team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="flex flex-col p-8 bg-black-900 border border-white-100/10 rounded-lg"
            >
              <div className="mb-4">{b.icon}</div>
              <h3 className="text-lg font-intersemibold text-white-100 mb-2">
                {b.title}
              </h3>
              <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
                {b.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIIntegrationSection;
