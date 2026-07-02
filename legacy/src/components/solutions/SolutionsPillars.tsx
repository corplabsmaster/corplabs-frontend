import React from "react";

interface PillarCard {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  startsFrom?: string;
  ctaLabel: string;
  icon: React.ReactNode;
}

const ICON_GRAD = "url(#solutions-pillar-grad)";

const Defs: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <linearGradient
        id="solutions-pillar-grad"
        x1="0"
        y1="0"
        x2="56"
        y2="56"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#AEE0FC" />
        <stop offset="50%" stopColor="#BFD8FA" />
        <stop offset="100%" stopColor="#E4D9FB" />
      </linearGradient>
    </defs>
  </svg>
);

const pillarCards: PillarCard[] = [
  {
    id: "corpi",
    name: "Corpi",
    tagline: "AI WhatsApp sales agents.",
    description:
      "Done-for-you Claude-powered WhatsApp agents that capture leads, qualify them, and save them straight to your CRM — 24/7.",
    href: "/corpi",
    ctaLabel: "Explore Corpi",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
        <path
          d="M8 12C8 9.79 9.79 8 12 8H44C46.21 8 48 9.79 48 12V34C48 36.21 46.21 38 44 38H22L14 46V38H12C9.79 38 8 36.21 8 34V12Z"
          stroke={ICON_GRAD}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38 14L39.5 17.5L43 19L39.5 20.5L38 24L36.5 20.5L33 19L36.5 17.5L38 14Z"
          stroke={ICON_GRAD}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="25" r="1.5" fill={ICON_GRAD} />
        <circle cx="28" cy="25" r="1.5" fill={ICON_GRAD} />
      </svg>
    ),
  },
  {
    id: "corpcode",
    name: "Corpcode",
    tagline: "Custom software builds.",
    description:
      "Internal tools to ERP-class platforms. Paid discovery, fixed milestones, and a Malaysian-led team. From RM 30k.",
    href: "/corpcode",
    startsFrom: "from RM 30k",
    ctaLabel: "Explore Corpcode",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
        <path
          d="M20 18L10 28L20 38"
          stroke={ICON_GRAD}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 18L46 28L36 38"
          stroke={ICON_GRAD}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M32 14L24 42" stroke={ICON_GRAD} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "corprise",
    name: "Corprise",
    tagline: "Subscription-priced ERP.",
    description:
      "Replace RM 80k+ Odoo implementations with a monthly subscription from RM 1,000. MyInvois-ready. Live in weeks, not quarters.",
    href: "/corprise",
    startsFrom: "from RM 1k / mo",
    ctaLabel: "Explore Corprise",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
        <path d="M10 46V20L28 10L46 20V46" stroke={ICON_GRAD} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M8 46H48" stroke={ICON_GRAD} strokeWidth="2.5" strokeLinecap="round" />
        <rect x="22" y="28" width="12" height="18" stroke={ICON_GRAD} strokeWidth="2" />
        <path
          d="M16 26V32M16 36V42M40 26V32M40 36V42"
          stroke={ICON_GRAD}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "corpsite",
    name: "Corpsite",
    tagline: "Websites — design, build, ongoing care.",
    description:
      "Six tiers from RM 2,000 starter sites to enterprise platforms. Modern stack (Next.js / Payload / Cloudflare). Free for NGOs.",
    href: "/corpsite",
    startsFrom: "from RM 2k",
    ctaLabel: "Explore Corpsite",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
        <rect x="8" y="12" width="40" height="32" rx="3" stroke={ICON_GRAD} strokeWidth="2.5" />
        <path d="M8 20H48" stroke={ICON_GRAD} strokeWidth="2.5" />
        <circle cx="13" cy="16" r="1.2" fill={ICON_GRAD} />
        <circle cx="17" cy="16" r="1.2" fill={ICON_GRAD} />
        <circle cx="21" cy="16" r="1.2" fill={ICON_GRAD} />
        <path
          d="M14 28H30M14 33H38M14 38H26"
          stroke={ICON_GRAD}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const SolutionsPillars: React.FC = () => {
  return (
    <section
      id="pillars"
      className="bg-black-950 py-20 px-5"
      aria-labelledby="solutions-pillars-heading"
    >
      <Defs />
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            Our pillars
          </span>
          <h2
            id="solutions-pillars-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
          >
            Four pillars covering every surface.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed fade-in">
            Each pillar has a public price floor, a transparent process, and a
            dedicated page below. Click through for tiers, FAQs, and a way to
            start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillarCards.map((p) => (
            <a
              key={p.id}
              href={p.href}
              className="group flex flex-col p-8 rounded-xl border border-white-100/10 bg-black-900 hover:border-[#424DE2]/60 hover:bg-white-100/5 transition-colors fade-in"
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-xl font-intersemibold text-white-100 mb-1">
                {p.name}
              </h3>
              <p className="text-sm font-intersemibold text-[#AEE0FC] mb-3">
                {p.tagline}
              </p>
              <p className="text-base font-worksanslight text-gray-200 leading-relaxed mb-5 flex-1">
                {p.description}
              </p>
              {p.startsFrom && (
                <p className="text-xs font-intersemibold tracking-widest uppercase text-gray-200/70 mb-3">
                  {p.startsFrom}
                </p>
              )}
              <span className="inline-flex items-center gap-1 text-sm font-intersemibold text-[#AEE0FC] group-hover:text-white-100 transition-colors">
                {p.ctaLabel}
                <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsPillars;
