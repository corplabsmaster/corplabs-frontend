import React from "react";

import { hero } from "../../data/corpcode-content";

const CorpcodeHero: React.FC = () => {
  return (
    <section
      className="text-gray-200 body-font bg-black-950 pt-[14vh] pb-20 px-5"
      aria-labelledby="corpcode-hero-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-1 mb-6 text-xs font-intersemibold tracking-widest text-gray-200 uppercase rounded-full border border-white-100/20 bg-white-100/5">
              {hero.eyebrow}
            </span>
            <h1
              id="corpcode-hero-heading"
              className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
            >
              Custom software,
              <br />
              <span className="text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
                built for what your business actually does
              </span>
            </h1>
            <p className="text-base lg:text-lg font-worksanslight text-gray-200 mb-8 leading-relaxed max-w-2xl">
              {hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 w-full max-w-[280px] md:max-w-sm mx-auto md:mx-0">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroIllustration: React.FC = () => (
  <svg
    viewBox="0 0 400 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="corpcodeHeroGrad"
        x1="40"
        y1="40"
        x2="360"
        y2="380"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#AEE0FC" />
        <stop offset="50%" stopColor="#BFD8FA" />
        <stop offset="100%" stopColor="#E4D9FB" />
      </linearGradient>
      <linearGradient
        id="corpcodeHeroAccent"
        x1="0"
        y1="0"
        x2="1"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0%" stopColor="#AEE0FC" />
        <stop offset="100%" stopColor="#E4D9FB" />
      </linearGradient>
    </defs>

    {/* Outer dashed orbit ellipse */}
    <ellipse
      cx="200"
      cy="210"
      rx="172"
      ry="168"
      stroke="#424DE2"
      strokeOpacity="0.55"
      strokeWidth="1.5"
      strokeDasharray="3 3"
      fill="none"
    />

    {/* Accent dots */}
    <circle cx="44" cy="98" r="3" fill="#424DE2" />
    <circle cx="356" cy="296" r="4" fill="#424DE2" />
    <circle cx="78" cy="346" r="2" fill="#424DE2" />
    <circle cx="334" cy="86" r="2.5" fill="#424DE2" opacity="0.7" />

    {/* Code editor window */}
    <g style={{ transformOrigin: "200px 210px" }}>
      {/* Window body */}
      <rect
        x="78"
        y="92"
        width="244"
        height="232"
        rx="14"
        fill="#00003C"
        stroke="url(#corpcodeHeroGrad)"
        strokeWidth="2"
      />
      {/* Title bar */}
      <rect x="78" y="92" width="244" height="32" rx="14" fill="#03093F" />
      <rect x="78" y="108" width="244" height="16" fill="#03093F" />
      {/* Traffic-light dots */}
      <circle cx="96" cy="108" r="4" fill="#424DE2" opacity="0.8" />
      <circle cx="110" cy="108" r="4" fill="#424DE2" opacity="0.5" />
      <circle cx="124" cy="108" r="4" fill="#424DE2" opacity="0.3" />
      {/* Filename pill */}
      <rect
        x="186"
        y="100"
        width="92"
        height="16"
        rx="4"
        fill="none"
        stroke="url(#corpcodeHeroGrad)"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      <rect x="194" y="106" width="46" height="4" rx="2" fill="#B5BAD9" opacity="0.4" />

      {/* Code lines */}
      <g>
        {/* Line 1 */}
        <rect x="98" y="142" width="14" height="4" rx="2" fill="#424DE2" opacity="0.7" />
        <rect x="118" y="142" width="64" height="4" rx="2" fill="url(#corpcodeHeroGrad)" opacity="0.7" />
        <rect x="188" y="142" width="42" height="4" rx="2" fill="#B5BAD9" opacity="0.45" />

        {/* Line 2 - indented */}
        <rect x="118" y="160" width="50" height="4" rx="2" fill="url(#corpcodeHeroGrad)" opacity="0.65" />
        <rect x="174" y="160" width="34" height="4" rx="2" fill="#424DE2" opacity="0.6" />
        <rect x="214" y="160" width="80" height="4" rx="2" fill="#B5BAD9" opacity="0.35" />

        {/* Line 3 */}
        <rect x="118" y="178" width="38" height="4" rx="2" fill="#B5BAD9" opacity="0.4" />
        <rect x="162" y="178" width="56" height="4" rx="2" fill="url(#corpcodeHeroGrad)" opacity="0.6" />
        <rect x="224" y="178" width="44" height="4" rx="2" fill="#424DE2" opacity="0.55" />

        {/* Line 4 */}
        <rect x="98" y="196" width="22" height="4" rx="2" fill="#424DE2" opacity="0.7" />
        <rect x="126" y="196" width="74" height="4" rx="2" fill="#B5BAD9" opacity="0.35" />

        {/* Line 5 - indented */}
        <rect x="118" y="214" width="60" height="4" rx="2" fill="url(#corpcodeHeroGrad)" opacity="0.6" />
        <rect x="184" y="214" width="38" height="4" rx="2" fill="#B5BAD9" opacity="0.4" />
        <rect x="228" y="214" width="62" height="4" rx="2" fill="#424DE2" opacity="0.55" />

        {/* Line 6 */}
        <rect x="98" y="232" width="18" height="4" rx="2" fill="#424DE2" opacity="0.65" />
        <rect x="122" y="232" width="50" height="4" rx="2" fill="url(#corpcodeHeroGrad)" opacity="0.55" />

        {/* Line 7 - blank, just cursor */}
        <rect x="98" y="252" width="2" height="8" fill="url(#corpcodeHeroAccent)">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Bottom status bar */}
      <rect x="78" y="296" width="244" height="28" fill="#03093F" />
      <rect x="78" y="296" width="244" height="1" fill="url(#corpcodeHeroGrad)" opacity="0.25" />
      <circle cx="96" cy="310" r="3" fill="#22c55e" />
      <rect x="106" y="307" width="40" height="4" rx="2" fill="#B5BAD9" opacity="0.4" />
      <rect x="252" y="307" width="56" height="4" rx="2" fill="url(#corpcodeHeroGrad)" opacity="0.5" />
    </g>

    {/* Floating "shipped" badge top-right */}
    <g>
      <rect
        x="294"
        y="60"
        width="80"
        height="30"
        rx="8"
        fill="#03093F"
        stroke="#424DE2"
        strokeOpacity="0.55"
        strokeWidth="1.2"
      />
      <path
        d="M306 75L312 81L322 69"
        stroke="url(#corpcodeHeroAccent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="328" y="71" width="36" height="4" rx="2" fill="url(#corpcodeHeroGrad)" opacity="0.7" />
      <rect x="328" y="79" width="24" height="3" rx="1.5" fill="#B5BAD9" opacity="0.4" />
    </g>

    {/* Floating gear bottom-left (maintain) */}
    <g>
      <circle
        cx="48"
        cy="312"
        r="22"
        fill="#03093F"
        stroke="#424DE2"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      <circle cx="48" cy="312" r="6" stroke="url(#corpcodeHeroGrad)" strokeWidth="1.4" fill="none" />
      <path
        d="M48 296V304M48 320V328M32 312H40M56 312H64M37 301L42 306M54 318L59 323M37 323L42 318M54 306L59 301"
        stroke="url(#corpcodeHeroGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </g>

    {/* Sparkle */}
    <path
      d="M340 154L342.5 161L349 163.5L342.5 166L340 173L337.5 166L331 163.5L337.5 161Z"
      fill="url(#corpcodeHeroAccent)"
      opacity="0.85"
    />
  </svg>
);

export default CorpcodeHero;
