import React from "react";

import { pillars } from "../../data/corpcode-content";

type Variant = "page" | "homepage";

interface Props {
  variant?: Variant;
  currentId?: string;
}

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  corpi: (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pillar-corpi" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="50%" stopColor="#BFD8FA" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      <path
        d="M8 12C8 9.79 9.79 8 12 8H44C46.21 8 48 9.79 48 12V34C48 36.21 46.21 38 44 38H22L14 46V38H12C9.79 38 8 36.21 8 34V12Z"
        stroke="url(#pillar-corpi)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 14L39.5 17.5L43 19L39.5 20.5L38 24L36.5 20.5L33 19L36.5 17.5L38 14Z"
        stroke="url(#pillar-corpi)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="25" r="1.5" fill="url(#pillar-corpi)" />
      <circle cx="28" cy="25" r="1.5" fill="url(#pillar-corpi)" />
    </svg>
  ),
  corpcode: (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pillar-corpcode" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="50%" stopColor="#BFD8FA" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      {/* Code brackets < / > */}
      <path
        d="M20 18L10 28L20 38"
        stroke="url(#pillar-corpcode)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 18L46 28L36 38"
        stroke="url(#pillar-corpcode)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 14L24 42"
        stroke="url(#pillar-corpcode)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  corprise: (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pillar-corprise" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="50%" stopColor="#BFD8FA" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      {/* Building / enterprise */}
      <path
        d="M10 46V20L28 10L46 20V46"
        stroke="url(#pillar-corprise)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M8 46H48" stroke="url(#pillar-corprise)" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="22" y="28" width="12" height="18" stroke="url(#pillar-corprise)" strokeWidth="2" />
      <path
        d="M16 26V32M16 36V42M40 26V32M40 36V42"
        stroke="url(#pillar-corprise)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  corpsite: (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pillar-corpsite" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="50%" stopColor="#BFD8FA" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      {/* Browser window */}
      <rect
        x="8"
        y="12"
        width="40"
        height="32"
        rx="3"
        stroke="url(#pillar-corpsite)"
        strokeWidth="2.5"
      />
      <path d="M8 20H48" stroke="url(#pillar-corpsite)" strokeWidth="2.5" />
      <circle cx="13" cy="16" r="1.2" fill="url(#pillar-corpsite)" />
      <circle cx="17" cy="16" r="1.2" fill="url(#pillar-corpsite)" />
      <circle cx="21" cy="16" r="1.2" fill="url(#pillar-corpsite)" />
      {/* Content lines inside */}
      <path
        d="M14 28H30M14 33H38M14 38H26"
        stroke="url(#pillar-corpsite)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const ThreePillars: React.FC<Props> = ({ variant = "page", currentId }) => {
  const isHomepage = variant === "homepage";

  return (
    <section
      id={isHomepage ? "products-lineup" : undefined}
      className="bg-black-950 py-20 px-5"
      aria-labelledby="three-pillars-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            {isHomepage ? "Our Products" : "The Corplabs lineup"}
          </span>
          <h2
            id="three-pillars-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
          >
            {isHomepage ? (
              <>
                Four pillars,{" "}
                <span className="text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
                  one playbook
                </span>
              </>
            ) : (
              <>Where Corpcode fits</>
            )}
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed fade-in">
            {isHomepage
              ? "Pick the surface that solves your problem. Each pillar is built, deployed, and supported by the same Corplabs team."
              : "Four products, one team. Pick what solves the problem in front of you — and call us when the next one comes up."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillars.map((pillar) => {
            const isActiveOnPage = !isHomepage && pillar.id === currentId;
            return (
              <a
                key={pillar.id}
                href={isActiveOnPage ? undefined : pillar.href}
                aria-current={isActiveOnPage ? "page" : undefined}
                aria-disabled={isActiveOnPage ? "true" : undefined}
                onClick={isActiveOnPage ? (e) => e.preventDefault() : undefined}
                className={`group relative flex flex-col p-8 rounded-lg border fade-in transition-colors ${
                  isActiveOnPage
                    ? "border-[#424DE2] bg-[#424DE2]/10 ring-2 ring-[#424DE2] cursor-default"
                    : "border-white-100/10 bg-black-900 hover:border-[#424DE2]/60 hover:bg-white-100/5"
                }`}
              >
                {isActiveOnPage && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-intersemibold bg-[#424DE2] text-white rounded-full whitespace-nowrap">
                    You are here
                  </span>
                )}
                <div className="mb-4">{PILLAR_ICONS[pillar.id]}</div>
                <h3 className="text-xl font-intersemibold text-white-100 mb-2">
                  {pillar.name}
                </h3>
                <p className="text-base font-worksanslight text-gray-200 leading-relaxed mb-6 flex-1">
                  {pillar.blurb}
                </p>
                {!isActiveOnPage && (
                  <span className="inline-flex items-center gap-1 text-sm font-intersemibold text-[#AEE0FC] group-hover:text-white-100 transition-colors">
                    Explore {pillar.name}
                    <span aria-hidden="true">→</span>
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
