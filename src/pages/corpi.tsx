import SEO from "@components/common/seo";
import Layout from "@components/layout";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import React, { useState } from "react";

type Props = {
  location?: {
    pathname: string;
  };
};

const CorpiPage: React.FC<Props> = ({ location }: Props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Does this work with my existing WhatsApp number?",
      a: "Yes. Corpi links directly to your WhatsApp Business number. You just scan a QR code — similar to how WhatsApp Web works on your laptop.",
    },
    {
      q: "Do I need WhatsApp Business API (Meta)?",
      a: "No. Corpi uses a direct connection to WhatsApp that does not require a Meta Business API subscription, saving you the monthly fee and approval process.",
    },
    {
      q: "What happens if the bot doesn't know the answer?",
      a: "Corpi is designed to gracefully acknowledge when it doesn't have enough information and offer to connect the customer with your team. It will never make up answers.",
    },
    {
      q: "Can I update what the bot knows without calling Corplabs?",
      a: "Yes. Your Knowledge Base is a simple Notion page. Edit it yourself and the bot picks up changes within 30 minutes — no code, no restarts, no developer needed.",
    },
    {
      q: "Is my customer data safe?",
      a: "Yes. Each client has a dedicated server. Your leads and conversation data are stored only in your own Notion workspace and your private server. We do not store or share your customer data.",
    },
    {
      q: "What if my customers write in mixed languages?",
      a: "Corpi detects the language your customer is using and responds accordingly — including Manglish and mixed BM-English, which is common in Malaysia.",
    },
    {
      q: "Can I see what the bot said to my customers?",
      a: "Yes. Every lead saved to your Notion CRM includes a conversation summary. Full logs are accessible from your dashboard.",
    },
    {
      q: "What if I want to add more products later?",
      a: "Just update your Knowledge Base page in Notion. For significant changes to lead fields or CRM structure, that's covered under the retainer.",
    },
    {
      q: "Is there a contract?",
      a: "We operate on a monthly retainer with a minimum 3-month commitment. After that, it's month-to-month. Setup fee is non-refundable once deployment begins.",
    },
  ];

  const features = [
    {
      title: "Talks Like a Real Consultant",
      description:
        "Responds naturally in English, BM, Mandarin, or Manglish — in your brand's tone and voice.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="featGrad1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          <path d="M4 6C4 4.9 4.9 4 6 4H26C27.1 4 28 4.9 28 6V20C28 21.1 27.1 22 26 22H12L6 28V22H6C4.9 22 4 21.1 4 20V6Z" stroke="url(#featGrad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="13" r="1" fill="url(#featGrad1)" />
          <circle cx="16" cy="13" r="1" fill="url(#featGrad1)" />
          <circle cx="21" cy="13" r="1" fill="url(#featGrad1)" />
        </svg>
      ),
    },
    {
      title: "Qualifies Leads Naturally",
      description:
        "Through conversation, Corpi uncovers what the customer needs, their budget, and location — no forms, no drop-offs.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="featGrad2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          <path d="M6 4H26V10L20 16V26L12 22V16L6 10V4Z" stroke="url(#featGrad2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Saves Leads Automatically",
      description:
        "Every qualified lead lands in your Notion CRM with name, phone, objectives, budget, and a conversation summary.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="featGrad3" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="24" height="24" rx="3" stroke="url(#featGrad3)" strokeWidth="1.5" />
          <path d="M8 11H24M8 16H24M8 21H18" stroke="url(#featGrad3)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Knows Your Products",
      description:
        "Update your bot's knowledge anytime by editing a Notion page. Changes go live in 30 minutes — no code needed.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="featGrad4" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          <path d="M6 28V6C6 4.9 6.9 4 8 4H20L26 10V28C26 29.1 25.1 30 24 30H8C6.9 30 6 29.1 6 28Z" stroke="url(#featGrad4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 4V10H26" stroke="url(#featGrad4)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 16H22M10 20H18" stroke="url(#featGrad4)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Live Dashboard",
      description:
        "Monitor bot status, view leads, update stages, and restart the bot — from a dashboard on your own domain.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="featGrad5" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          <rect x="3" y="4" width="26" height="18" rx="2" stroke="url(#featGrad5)" strokeWidth="1.5" />
          <path d="M10 28H22M16 22V28" stroke="url(#featGrad5)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 15L13 11L17 13L23 9" stroke="url(#featGrad5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Human Escalation",
      description:
        "When a customer wants a real person, Corpi hands off gracefully and professionally.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="featGrad6" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          <circle cx="16" cy="10" r="5" stroke="url(#featGrad6)" strokeWidth="1.5" />
          <path d="M6 28C6 23.58 10.48 20 16 20C21.52 20 26 23.58 26 28" stroke="url(#featGrad6)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const whatYouGet = [
    {
      label: "AI WhatsApp Agent",
      desc: "Custom-branded bot with your persona, tone, and product knowledge",
    },
    {
      label: "Lead CRM",
      desc: "Notion database capturing all qualified leads automatically",
    },
    {
      label: "Live Dashboard",
      desc: "Web dashboard on your domain — bot controls, lead table, QR scan",
    },
    {
      label: "Knowledge Base",
      desc: "Notion page you control — update bot knowledge anytime, no code needed",
    },
    {
      label: "Multilingual Support",
      desc: "English, BM, Mandarin, Manglish (or your preferred languages)",
    },
    {
      label: "Setup & Configuration",
      desc: "Full deployment by Corplabs — you just scan a QR code",
    },
    {
      label: "Ongoing Support",
      desc: "Monthly retainer includes monitoring, maintenance, and updates",
    },
  ];

  const steps = [
    {
      day: "Day 1",
      title: "Discovery Call",
      desc: "We learn about your business, customers, and goals. You tell us your bot name, products, and languages.",
    },
    {
      day: "Day 2–7",
      title: "We Build It",
      desc: "Corplabs sets up your server, bot persona, Notion CRM, and branded dashboard. You don't touch any code.",
    },
    {
      day: "Day 7–10",
      title: "Review & Refine",
      desc: "You test your own bot as a customer. We refine until the tone and responses are exactly right.",
    },
    {
      day: "Day 10–14",
      title: "Go Live",
      desc: "You scan one QR code. Your bot is live on WhatsApp. We monitor the first 48 hours with you.",
    },
    {
      day: "Day 14",
      title: "Handoff & Training",
      desc: "We walk you through your dashboard and Notion workspace. From here, your bot runs itself.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "RM 300",
      period: "/month",
      desc: "Up to 500 conversations/month",
      recommended: false,
    },
    {
      name: "Growth",
      price: "RM 500",
      period: "/month",
      desc: "Up to 2,000 conversations/month",
      recommended: true,
    },
    {
      name: "Scale",
      price: "RM 800",
      period: "/month",
      desc: "Unlimited conversations",
      recommended: false,
    },
  ];

  return (
    <Layout location={location.pathname}>
      <SEO
        title="Corpi Intelligence — AI WhatsApp Sales Bot | Corplabs"
        description="Corpi Intelligence by Corplabs is a done-for-you AI WhatsApp sales agent. Captures leads 24/7, replies in BM/EN/Chinese, and saves to your CRM automatically."
      />
      <Header />
      <div className="min-h-screen bg-black-950">

        {/* ── Section 1: Hero ── */}
        <section className="text-gray-200 body-font bg-black-950 pt-[14vh] pb-20 px-5">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="inline-block px-4 py-1 mb-6 text-xs font-intersemibold tracking-widest text-gray-200 uppercase rounded-full border border-white-100/20 bg-white-100/5">
              A Corplabs Product · Powered by Claude AI
            </span>
            <h1 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4">
              Your Business, Always On.
            </h1>
            <p className="text-base lg:text-lg font-worksanslight text-gray-200 mb-8 leading-relaxed">
              Corpi Intelligence — AI WhatsApp sales agent, built and managed by Corplabs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
              >
                Get Started
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
              >
                See Pricing
              </a>
            </div>
          </div>
        </section>

        {/* ── Section 2: The Problem ── */}
        <section className="bg-black-950 py-20 px-5">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-12">
              The Problem We Solve
            </h2>
            <p className="text-base font-worksanslight text-gray-200 leading-relaxed mb-4 max-w-3xl mx-auto text-center">
              Most businesses in Malaysia lose leads simply because no one replies fast enough. A customer messages at 11pm. Nobody&apos;s there. They move on. That sale is gone.
            </p>
            <p className="text-base font-worksanslight text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto text-center">
              Corpi Intelligence fixes that. The moment someone messages your WhatsApp, they get an intelligent, helpful, human-like response — instantly. Your team wakes up to a CRM full of qualified leads with names, needs, budgets, and contact details already captured.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: "11pm", label: "When most leads message after hours" },
                { stat: "24/7", label: "Corpi is always available" },
                { stat: "< 2 weeks", label: "From sign-up to live bot" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col p-10 bg-black-900 border border-white-100/10 rounded-lg text-center"
                >
                  <span className="text-2xl lg:text-4xl font-interbold text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text mb-2">
                    {item.stat}
                  </span>
                  <span className="text-sm font-worksanslight text-gray-200 tracking-wide">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: What Corpi Does ── */}
        <section className="bg-black-950 py-20 px-5">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-12">
              What Corpi Intelligence Does
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col p-8 bg-black-900 border border-white-100/10 rounded-lg"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-intersemibold text-white-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: What You Get ── */}
        <section className="bg-black-950 py-20 px-5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-12">
              What You Get
            </h2>
            <div className="border border-white-100/10 rounded-lg overflow-hidden">
              {whatYouGet.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row sm:items-center px-8 py-5 ${
                    i !== whatYouGet.length - 1
                      ? "border-b border-white-100/10"
                      : ""
                  } ${i % 2 === 0 ? "bg-black-900" : "bg-black-950"}`}
                >
                  <span className="text-base font-intersemibold text-white-100 sm:w-1/3 mb-1 sm:mb-0">
                    {item.label}
                  </span>
                  <span className="text-base font-worksanslight text-gray-200 sm:w-2/3">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: How It Works ── */}
        <section className="bg-black-950 py-20 px-5">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-4">
              How We Onboard You
            </h2>
            <p className="text-base font-worksanslight text-gray-200 text-center mb-12">
              From first conversation to live bot in under 2 weeks.
            </p>

            {/* Desktop: horizontal timeline */}
            <div className="hidden lg:flex items-start gap-0 relative">
              {/* connector line */}
              <div className="absolute top-6 left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-gradient-1 to-gradient-2 z-0" />
              {steps.map((step, i) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center z-10 px-2">
                  <div className="w-12 h-12 rounded-full bg-black-900 border-2 border-[#424DE2] flex items-center justify-center font-interbold text-white-100 text-base mb-4">
                    {i + 1}
                  </div>
                  <span className="text-xs font-intersemibold text-[#AEE0FC] tracking-wider mb-1">
                    {step.day}
                  </span>
                  <h3 className="text-base font-intersemibold text-white-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-worksanslight text-gray-200 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile: vertical timeline */}
            <div className="flex lg:hidden flex-col gap-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black-900 border-2 border-[#424DE2] flex items-center justify-center font-interbold text-white-100 text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-[1.5px] flex-1 mt-2 bg-white-100/20" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-intersemibold text-[#AEE0FC] tracking-wider block mb-1">
                      {step.day}
                    </span>
                    <h3 className="text-base font-intersemibold text-white-100 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm font-worksanslight text-gray-200 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 6: Pricing ── */}
        <section className="bg-black-950 py-20 px-5" id="pricing">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-12">
              Simple, Transparent Pricing
            </h2>

            {/* Setup fee callout */}
            <div className="mb-10 p-6 rounded-lg border border-[#424DE2]/50 bg-[#424DE2]/10 text-center">
              <p className="text-lg font-intersemibold text-white-100 mb-1">
                One-time Setup Fee — from RM 1,500
              </p>
              <p className="text-sm font-worksanslight text-gray-200">
                Covers discovery, bot configuration, Notion setup, VPS provisioning, domain linking, and go-live support. Final price depends on scope.
              </p>
            </div>

            {/* Pricing cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col p-8 rounded-lg border ${
                    plan.recommended
                      ? "border-[#424DE2] bg-[#424DE2]/10"
                      : "border-white-100/10 bg-black-900"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-intersemibold bg-[#424DE2] text-white rounded-full">
                      Recommended
                    </span>
                  )}
                  <h3 className="text-lg font-intersemibold text-white-100 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl lg:text-4xl font-interbold text-white-100">
                      {plan.price}
                    </span>
                    <span className="text-base font-worksanslight text-gray-200">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm font-worksanslight text-gray-200 mb-6 flex-1">
                    {plan.desc}
                  </p>
                  <p className="text-xs font-worksanslight text-gray-200 mb-6">
                    VPS hosting · Dashboard · Notion CRM · Corplabs support
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <p className="text-xs font-worksanslight text-gray-200 text-center">
              Claude API usage above tier limits is billed at cost + 20% margin.
            </p>
          </div>
        </section>

        {/* ── Section 7: FAQ ── */}
        <section className="bg-black-950 py-20 px-5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-white-100/10 rounded-lg overflow-hidden bg-black-900"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-base font-intersemibold text-white-100 pr-4">
                      {faq.q}
                    </span>
                    <span className="text-[#AEE0FC] flex-shrink-0 text-lg font-interbold">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 border-t border-white-100/10">
                      <p className="pt-4 text-base font-worksanslight text-gray-200 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 8: CTA ── */}
        <section className="bg-black-950 py-20 px-5">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base font-worksanslight text-gray-200 mb-8 leading-relaxed">
              Book a discovery call with the Corplabs team. We&apos;ll have your bot live in under 2 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="mailto:contact@corplabs.co"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/60166727208"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="text-sm font-worksanslight text-gray-200">
              corplabs.co · contact@corplabs.co
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </Layout>
  );
};

export default CorpiPage;
