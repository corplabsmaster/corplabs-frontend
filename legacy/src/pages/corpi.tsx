import SEO from "@components/common/seo";
import Layout from "@components/layout";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import React, { useEffect, useState } from "react";

type Props = {
  location?: {
    pathname: string;
  };
};

const CorpiPage: React.FC<Props> = ({ location }: Props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  // ── Feature icons: 40px, outlined, gradient #AEE0FC→#BFD8FA→#E4D9FB ──
  const features = [
    {
      title: "Talks Like a Real Consultant",
      description:
        "Responds naturally in English, BM, Mandarin, or Manglish — in your brand's tone and voice.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fg1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="50%" stopColor="#BFD8FA" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          {/* Chat bubble outline */}
          <path d="M5 7C5 5.34 6.34 4 8 4H32C33.66 4 35 5.34 35 7V24C35 25.66 33.66 27 32 27H13L6 34V27C5.45 27 5 26.55 5 26V7Z" stroke="url(#fg1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Lightning bolt inside bubble */}
          <path d="M22 9L19 17H22L20 27L27 14H23L25 9Z" stroke="url(#fg1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Qualifies Leads Naturally",
      description:
        "Through conversation, Corpi uncovers what the customer needs, their budget, and location — no forms, no drop-offs.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fg2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="50%" stopColor="#BFD8FA" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          {/* Funnel/filter shape */}
          <path d="M7 6H33V13L24 22V33L16 29V22L7 13V6Z" stroke="url(#fg2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Saves Leads Automatically",
      description:
        "Every qualified lead lands in your Notion CRM with name, phone, objectives, budget, and a conversation summary.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fg3" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="50%" stopColor="#BFD8FA" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          {/* Database cylinder */}
          <ellipse cx="20" cy="12" rx="12" ry="4.5" stroke="url(#fg3)" strokeWidth="1.5" />
          <path d="M8 12V28C8 30.48 13.37 32.5 20 32.5C26.63 32.5 32 30.48 32 28V12" stroke="url(#fg3)" strokeWidth="1.5" />
          {/* Mid seam */}
          <path d="M8 20C8 22.48 13.37 24.5 20 24.5C26.63 24.5 32 22.48 32 20" stroke="url(#fg3)" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Upward arrow */}
          <path d="M20 28V18M17 21L20 18L23 21" stroke="url(#fg3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Knows Your Products",
      description:
        "Update your bot's knowledge anytime by editing a Notion page. Changes go live in 30 minutes — no code needed.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fg4" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="50%" stopColor="#BFD8FA" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          {/* Open book — spine at x=20 */}
          <path d="M20 8V34M20 8C18 7 12 6 6 8V34C12 32 18 34 20 34M20 8C22 7 28 6 34 8V34C28 32 22 34 20 34" stroke="url(#fg4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Live Dashboard",
      description:
        "Monitor bot status, view leads, update stages, and restart the bot — from a dashboard on your own domain.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fg5" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="50%" stopColor="#BFD8FA" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          {/* Monitor */}
          <rect x="3" y="5" width="34" height="24" rx="2" stroke="url(#fg5)" strokeWidth="1.5" />
          <path d="M12 35H28M20 29V35" stroke="url(#fg5)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Pulse / heartbeat line */}
          <path d="M8 19L12 19L15 13L18 25L21 17L24 19L32 19" stroke="url(#fg5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Human Escalation",
      description:
        "When a customer wants a real person, Corpi hands off gracefully and professionally.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fg6" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AEE0FC" />
              <stop offset="50%" stopColor="#BFD8FA" />
              <stop offset="100%" stopColor="#E4D9FB" />
            </linearGradient>
          </defs>
          {/* Person 1 */}
          <circle cx="12" cy="13" r="5" stroke="url(#fg6)" strokeWidth="1.5" />
          <path d="M4 35C4 29.48 7.58 25 12 25" stroke="url(#fg6)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Person 2 */}
          <circle cx="28" cy="13" r="5" stroke="url(#fg6)" strokeWidth="1.5" />
          <path d="M36 35C36 29.48 32.42 25 28 25" stroke="url(#fg6)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Arrow between */}
          <path d="M17 22H23M23 22L21 20M23 22L21 24" stroke="url(#fg6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const whatYouGet = [
    { label: "AI WhatsApp Agent", desc: "Custom-branded bot with your persona, tone, and product knowledge" },
    { label: "Lead CRM", desc: "Notion database capturing all qualified leads automatically" },
    { label: "Live Dashboard", desc: "Web dashboard on your domain — bot controls, lead table, QR scan" },
    { label: "Knowledge Base", desc: "Notion page you control — update bot knowledge anytime, no code needed" },
    { label: "Multilingual Support", desc: "English, BM, Mandarin, Manglish (or your preferred languages)" },
    { label: "Setup & Configuration", desc: "Full deployment by Corplabs — you just scan a QR code" },
    { label: "Ongoing Support", desc: "Monthly retainer includes monitoring, maintenance, and updates" },
  ];

  const steps = [
    { day: "Day 1", title: "Discovery Call", desc: "We learn about your business, customers, and goals. You tell us your bot name, products, and languages." },
    { day: "Day 2–7", title: "We Build It", desc: "Corplabs sets up your server, bot persona, Notion CRM, and branded dashboard. You don't touch any code." },
    { day: "Day 7–10", title: "Review & Refine", desc: "You test your own bot as a customer. We refine until the tone and responses are exactly right." },
    { day: "Day 10–14", title: "Go Live", desc: "You scan one QR code. Your bot is live on WhatsApp. We monitor the first 48 hours with you." },
    { day: "Day 14+", title: "Handoff & Training", desc: "We walk you through your dashboard and Notion workspace. From here, your bot runs itself." },
  ];

  const plans = [
    { name: "Starter", price: "RM 300", period: "/month", desc: "Up to 500 conversations/month", recommended: false },
    { name: "Growth", price: "RM 500", period: "/month", desc: "Up to 2,000 conversations/month", recommended: true },
    { name: "Scale", price: "RM 800", period: "/month", desc: "Unlimited conversations", recommended: false },
  ];

  // ── Step icons: 18px white fill ──
  const stepIcons = [
    /* Step 1 — phone/handset */
    <svg key="s1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2H6.5L8 6L6 7.5C6.8 9.2 8.8 11.2 10.5 12L12 10L16 11.5V15C16 15.55 15.55 16 15 16C7.82 16 2 10.18 2 3C2 2.45 2.45 2 3 2Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    /* Step 2 — wrench */
    <svg key="s2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2C11 2 9.5 3.5 9.5 5.5C9.5 5.9 9.58 6.28 9.72 6.63L3 13.34C2.61 13.73 2.61 14.37 3 14.76L3.24 15C3.63 15.39 4.27 15.39 4.66 15L11.37 8.28C11.72 8.42 12.1 8.5 12.5 8.5C14.5 8.5 16 7 16 5C16 4.44 15.87 3.9 15.63 3.43L13.57 5.49L12.51 4.43L14.57 2.37C14.1 2.13 13.56 2 13 2Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    /* Step 3 — magnifying glass */
    <svg key="s3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="5" stroke="white" strokeWidth="1.5" />
      <path d="M12 12L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
    /* Step 4 — rocket */
    <svg key="s4" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 1C9 1 14.5 3.5 14.5 8C14.5 10 13.5 11.5 13.5 11.5L9 17L4.5 11.5C4.5 11.5 3.5 10 3.5 8C3.5 3.5 9 1 9 1Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="8" r="1.5" stroke="white" strokeWidth="1.2" />
      <path d="M4.5 11.5L3 15M13.5 11.5L15 15" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    </svg>,
    /* Step 5 — key */
    <svg key="s5" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6.5" cy="7.5" r="3.5" stroke="white" strokeWidth="1.5" />
      <path d="M9.5 10.5L16 17M13 13.5L14.5 15M11.5 12L13 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
  ];

  // ── Tier icons: 24px gradient fill ──
  const tierIcons = [
    /* Starter — single lightning bolt */
    <svg key="t1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tg1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      <path d="M13 2L5 14H12L11 22L19 10H12L13 2Z" stroke="url(#tg1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    /* Growth — double lightning bolt */
    <svg key="t2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tg2" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      {/* Main bolt */}
      <path d="M11 2L5 13H10L9 22L16 11H11L13 2Z" stroke="url(#tg2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Accent bolt */}
      <path d="M18 3L15 9H18L17 15" stroke="url(#tg2)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    /* Scale — rocket */
    <svg key="t3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tg3" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      <path d="M12 2C12 2 19 5 19 11C19 13.5 17.5 15.5 17.5 15.5L12 21L6.5 15.5C6.5 15.5 5 13.5 5 11C5 5 12 2 12 2Z" stroke="url(#tg3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2" stroke="url(#tg3)" strokeWidth="1.3" />
      <path d="M6.5 15.5L4 20M17.5 15.5L20 20" stroke="url(#tg3)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>,
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
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">

              {/* Left: hero text */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-4 py-1 mb-6 text-xs font-intersemibold tracking-widest text-gray-200 uppercase rounded-full border border-white-100/20 bg-white-100/5">
                  A Corplabs Product · Powered by Claude AI
                </span>
                <h1 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4">
                  Your Business, Always On.
                </h1>
                <p className="text-base lg:text-lg font-worksanslight text-gray-200 mb-8 leading-relaxed">
                  Corpi Intelligence — AI WhatsApp sales agent, built and managed by Corplabs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

              {/* Right: phone illustration */}
              <div className="flex-shrink-0 w-full max-w-[260px] md:max-w-sm mx-auto md:mx-0">
                <svg
                  viewBox="0 0 400 420"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="phoneGrad" x1="108" y1="15" x2="288" y2="365" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#AEE0FC" />
                      <stop offset="50%" stopColor="#BFD8FA" />
                      <stop offset="100%" stopColor="#E4D9FB" />
                    </linearGradient>
                    <linearGradient id="phoneChatGrad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stopColor="#AEE0FC" />
                      <stop offset="100%" stopColor="#E4D9FB" />
                    </linearGradient>
                  </defs>

                  {/* ── Static decorative layer (no float) ── */}
                  {/* Orbit dashed ellipse */}
                  <ellipse
                    cx="195"
                    cy="205"
                    rx="122"
                    ry="168"
                    stroke="#424DE2"
                    strokeOpacity="0.55"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    fill="none"
                  />
                  {/* 3 accent dots */}
                  <circle cx="60" cy="88" r="3" fill="#424DE2" />
                  <circle cx="340" cy="298" r="4" fill="#424DE2" />
                  <circle cx="76" cy="336" r="2" fill="#424DE2" />

                  {/* ── Phone group — float animation ── */}
                  <g className="phone-float" style={{ transformOrigin: "195px 205px" }}>
                    {/* Phone body */}
                    <rect x="108" y="15" width="180" height="352" rx="24" fill="#00003C" stroke="url(#phoneGrad)" strokeWidth="2" />
                    {/* Screen background */}
                    <rect x="120" y="55" width="156" height="260" rx="4" fill="#03093F" />
                    {/* Camera dot */}
                    <circle cx="198" cy="36" r="4" fill="url(#phoneGrad)" />
                    {/* Home bar */}
                    <rect x="168" y="349" width="60" height="6" rx="3" fill="url(#phoneGrad)" opacity="0.45" />

                    {/* ── Chat bubbles ── */}
                    {/* Customer bubble — left-aligned, grey outline */}
                    <rect x="128" y="75" width="96" height="30" rx="12" fill="none" stroke="#B5BAD9" strokeOpacity="0.35" strokeWidth="1.2" />
                    <rect x="138" y="82" width="38" height="4" rx="2" fill="#B5BAD9" opacity="0.25" />
                    <rect x="138" y="90" width="60" height="4" rx="2" fill="#B5BAD9" opacity="0.2" />

                    {/* Bot reply 1 — right-aligned, #424DE2 fill */}
                    <rect x="132" y="122" width="124" height="40" rx="14" fill="#424DE2" />
                    <rect x="142" y="132" width="82" height="5" rx="2" fill="white" opacity="0.7" />
                    <rect x="142" y="142" width="56" height="4" rx="2" fill="white" opacity="0.4" />

                    {/* Bot reply 2 — right-aligned with checkmark ✓ */}
                    <rect x="144" y="178" width="112" height="36" rx="12" fill="#424DE2" />
                    <rect x="154" y="190" width="70" height="4" rx="2" fill="white" opacity="0.7" />
                    {/* Checkmark inside bubble */}
                    <path d="M222 192L226 197L234 188" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />

                    {/* ── Lead card (floating to the right of the phone) ── */}
                    <rect x="298" y="118" width="88" height="80" rx="10" fill="#03093F" stroke="#424DE2" strokeOpacity="0.45" strokeWidth="1.2" />
                    {/* Person icon */}
                    <circle cx="316" cy="144" r="7" stroke="url(#phoneGrad)" strokeWidth="1.2" fill="none" />
                    <path d="M306 164C306 159 310.48 156 316 156" stroke="url(#phoneGrad)" strokeWidth="1.2" strokeLinecap="round" />
                    {/* Name + sub lines */}
                    <rect x="328" y="139" width="44" height="5" rx="2" fill="url(#phoneGrad)" opacity="0.5" />
                    <rect x="328" y="149" width="30" height="4" rx="2" fill="#B5BAD9" opacity="0.3" />
                    {/* Green "lead saved" dot */}
                    <circle cx="309" cy="180" r="4" fill="#22c55e" />
                    <rect x="318" y="177" width="36" height="5" rx="2" fill="#B5BAD9" opacity="0.25" />

                    {/* ── 4-point sparkle ── */}
                    <path d="M340 64L342.5 71L349 73.5L342.5 76L340 83L337.5 76L331 73.5L337.5 71Z" fill="url(#phoneGrad)" opacity="0.85" />
                  </g>
                </svg>
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 2: The Problem ── */}
        <section className="bg-black-950 py-20 px-5">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-12 fade-in">
              The Problem We Solve
            </h2>
            <p className="text-base font-worksanslight text-gray-200 leading-relaxed mb-4 max-w-3xl mx-auto text-center fade-in">
              Most businesses in Malaysia lose leads simply because no one replies fast enough. A customer messages at 11pm. Nobody&apos;s there. They move on. That sale is gone.
            </p>
            <p className="text-base font-worksanslight text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto text-center fade-in">
              Corpi Intelligence fixes that. The moment someone messages your WhatsApp, they get an intelligent, helpful, human-like response — instantly. Your team wakes up to a CRM full of qualified leads with names, needs, budgets, and contact details already captured.
            </p>

            {/* Dashed divider */}
            <div className="max-w-3xl mx-auto mb-10 fade-in">
              <svg width="100%" height="2" viewBox="0 0 600 2" preserveAspectRatio="none" aria-hidden="true">
                <line x1="0" y1="1" x2="600" y2="1" stroke="#424DE2" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  stat: "11pm",
                  label: "When most leads message after hours",
                  icon: (
                    /* Crescent moon */
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="sg1" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#AEE0FC" />
                          <stop offset="100%" stopColor="#E4D9FB" />
                        </linearGradient>
                      </defs>
                      <path d="M21 14C21 18.97 16.97 23 12 23C7.03 23 3 18.97 3 14C3 9.03 7.03 5 12 5C12.55 5 13.09 5.05 13.62 5.14C11.47 6.56 10 8.99 10 11.77C10 16.13 13.54 19.67 17.9 19.67C19.42 19.67 20.83 19.21 22 18.42C21.65 16.98 21 15.57 21 14Z" stroke="url(#sg1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  stat: "24/7",
                  label: "Corpi is always available",
                  icon: (
                    /* Clock */
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="sg2" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#AEE0FC" />
                          <stop offset="100%" stopColor="#E4D9FB" />
                        </linearGradient>
                      </defs>
                      <circle cx="14" cy="14" r="10" stroke="url(#sg2)" strokeWidth="1.5" />
                      <path d="M14 8V14L18 17" stroke="url(#sg2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  stat: "< 2 weeks",
                  label: "From sign-up to live bot",
                  icon: (
                    /* Rocket */
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="sg3" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#AEE0FC" />
                          <stop offset="100%" stopColor="#E4D9FB" />
                        </linearGradient>
                      </defs>
                      <path d="M14 3C14 3 20.5 6 20.5 12C20.5 14.5 19.5 16 19.5 16L14 22L8.5 16C8.5 16 7.5 14.5 7.5 12C7.5 6 14 3 14 3Z" stroke="url(#sg3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="14" cy="11.5" r="1.5" stroke="url(#sg3)" strokeWidth="1.2" />
                      <path d="M8.5 16L6.5 20M19.5 16L21.5 20" stroke="url(#sg3)" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-10 bg-black-900 border border-white-100/10 rounded-lg text-center fade-in"
                >
                  <div className="mb-4">{item.icon}</div>
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
        <section className="bg-black-950 py-20 px-5 relative overflow-hidden">
          {/* Background dashed circle — desktop only, behind cards */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-0" aria-hidden="true">
            <svg width="680" height="680" viewBox="0 0 680 680" fill="none">
              <ellipse cx="340" cy="340" rx="328" ry="328" stroke="#424DE2" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="6 6" />
            </svg>
          </div>

          <div className="container mx-auto max-w-5xl relative z-10">
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-12 fade-in">
              What Corpi Intelligence Does
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col p-8 bg-black-900 border border-white-100/10 rounded-lg fade-in"
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
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-12 fade-in">
              What You Get
            </h2>
            <div className="border border-white-100/10 rounded-lg overflow-hidden fade-in">
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
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-4 fade-in">
              How We Onboard You
            </h2>
            <p className="text-base font-worksanslight text-gray-200 text-center mb-12 fade-in">
              From first conversation to live bot in under 2 weeks.
            </p>

            {/* Desktop: horizontal timeline */}
            <div className="hidden lg:flex items-start gap-0 relative fade-in">
              {/* Dashed connector line — sits at center of the step circles */}
              <div
                className="absolute left-[10%] right-[10%] h-0 border-t-2 border-dashed border-[#424DE2]/50 z-0"
                style={{ top: "46px" }}
              />
              {steps.map((step, i) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center z-10 px-2">
                  {/* Small icon above the circle */}
                  <div className="mb-1 h-[22px] flex items-center justify-center">
                    {stepIcons[i]}
                  </div>
                  {/* Filled circle */}
                  <div className="w-12 h-12 rounded-full bg-[#424DE2] flex items-center justify-center font-interbold text-white text-base mb-4">
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
                <div key={i} className="flex gap-4 fade-in">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#424DE2] flex items-center justify-center font-interbold text-white text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-[2px] flex-1 mt-2"
                        style={{
                          background:
                            "repeating-linear-gradient(to bottom, rgba(66,77,226,0.4) 0px, rgba(66,77,226,0.4) 5px, transparent 5px, transparent 9px)",
                        }}
                      />
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
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-12 fade-in">
              Simple, Transparent Pricing
            </h2>

            {/* Setup fee callout */}
            <div className="mb-10 p-6 rounded-lg border border-[#424DE2]/50 bg-[#424DE2]/10 text-center fade-in">
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
                  className={`relative flex flex-col p-8 rounded-lg border fade-in ${
                    plan.recommended
                      ? "border-[#424DE2] bg-[#424DE2]/10 ring-2 ring-[#424DE2]"
                      : "border-white-100/10 bg-black-900"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-intersemibold bg-[#424DE2] text-white rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  {/* Tier icon */}
                  <div className="mb-4">{tierIcons[i]}</div>
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
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-12 fade-in">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-white-100/10 rounded-lg overflow-hidden bg-black-900 fade-in"
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
        <section className="bg-black-950 py-20 px-5 relative overflow-hidden">
          {/* Background dashed ellipse */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <svg width="620" height="380" viewBox="0 0 620 380" fill="none">
              <ellipse cx="310" cy="190" rx="295" ry="178" stroke="#424DE2" strokeOpacity="0.10" strokeWidth="1.5" strokeDasharray="5 5" />
            </svg>
          </div>
          {/* 4 background accent dots */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute w-2 h-2 rounded-full bg-[#424DE2] opacity-40" style={{ left: "8%", top: "22%" }} />
            <div className="absolute w-3 h-3 rounded-full bg-[#424DE2] opacity-25" style={{ right: "10%", top: "30%" }} />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-[#424DE2] opacity-45" style={{ left: "16%", bottom: "24%" }} />
            <div className="absolute w-2.5 h-2.5 rounded-full bg-[#424DE2] opacity-20" style={{ right: "18%", bottom: "20%" }} />
          </div>

          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <h2 className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in">
              Ready to Get Started?
            </h2>
            <p className="text-base font-worksanslight text-gray-200 mb-8 leading-relaxed fade-in">
              Book a discovery call with the Corplabs team. We&apos;ll have your bot live in under 2 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 fade-in">
              <a
                href="mailto:contact@corplabs.co"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
              >
                Email Us
              </a>
              {/* WhatsApp button with ping pulse ring */}
              <span className="relative inline-flex">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#424DE2] opacity-30" aria-hidden="true" />
                <a
                  href="https://wa.me/60166727208"
                  className="relative inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
                >
                  WhatsApp Us
                </a>
              </span>
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
