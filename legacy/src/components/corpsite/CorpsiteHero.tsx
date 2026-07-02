import React from "react";

import { hero } from "../../data/corpsite";

const CorpsiteHero: React.FC = () => {
  return (
    <section
      className="text-gray-200 body-font bg-black-950 pt-[14vh] pb-20 px-5"
      aria-labelledby="corpsite-hero-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-1 mb-6 text-xs font-intersemibold tracking-widest text-gray-200 uppercase rounded-full border border-white-100/20 bg-white-100/5">
              {hero.eyebrow}
            </span>
            <h1
              id="corpsite-hero-heading"
              className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
            >
              {hero.headline.line1}
              <br />
              <span className="text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
                {hero.headline.line2}
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
        id="corpsiteHeroGrad"
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
        id="corpsiteHeroAccent"
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

    {/* Outer dashed orbit */}
    <ellipse
      cx="200"
      cy="210"
      rx="172"
      ry="170"
      stroke="#424DE2"
      strokeOpacity="0.55"
      strokeWidth="1.5"
      strokeDasharray="3 3"
      fill="none"
    />
    {/* Inner dashed orbit */}
    <ellipse
      cx="200"
      cy="210"
      rx="120"
      ry="118"
      stroke="#AEE0FC"
      strokeOpacity="0.3"
      strokeWidth="1.2"
      strokeDasharray="2 4"
      fill="none"
    />

    {/* Accent dots */}
    <circle cx="44" cy="98" r="3" fill="#424DE2" />
    <circle cx="356" cy="296" r="4" fill="#424DE2" />
    <circle cx="78" cy="346" r="2" fill="#424DE2" />
    <circle cx="334" cy="86" r="2.5" fill="#424DE2" opacity="0.7" />

    {/* Browser window */}
    <g>
      {/* Window frame */}
      <rect
        x="84"
        y="98"
        width="232"
        height="218"
        rx="14"
        fill="#00003C"
        stroke="url(#corpsiteHeroGrad)"
        strokeWidth="2"
      />
      {/* Title bar */}
      <rect x="84" y="98" width="232" height="28" rx="14" fill="#03093F" />
      <rect x="84" y="112" width="232" height="14" fill="#03093F" />
      {/* Traffic lights */}
      <circle cx="100" cy="112" r="3.5" fill="#424DE2" opacity="0.85" />
      <circle cx="112" cy="112" r="3.5" fill="#424DE2" opacity="0.55" />
      <circle cx="124" cy="112" r="3.5" fill="#424DE2" opacity="0.35" />
      {/* URL pill */}
      <rect
        x="160"
        y="105"
        width="112"
        height="14"
        rx="4"
        fill="none"
        stroke="url(#corpsiteHeroGrad)"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      <rect
        x="168"
        y="110"
        width="56"
        height="4"
        rx="2"
        fill="#B5BAD9"
        opacity="0.4"
      />
    </g>

    {/* Hero card mock */}
    <g>
      <rect
        x="100"
        y="142"
        width="200"
        height="62"
        rx="6"
        fill="#03093F"
        stroke="url(#corpsiteHeroGrad)"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <rect x="112" y="156" width="100" height="6" rx="3" fill="url(#corpsiteHeroGrad)" opacity="0.7" />
      <rect x="112" y="170" width="160" height="4" rx="2" fill="#B5BAD9" opacity="0.4" />
      <rect x="112" y="180" width="120" height="4" rx="2" fill="#B5BAD9" opacity="0.3" />
      <rect x="112" y="192" width="56" height="8" rx="4" fill="#424DE2" />
    </g>

    {/* Card grid (3 columns) */}
    <g>
      <rect x="100" y="216" width="60" height="42" rx="4" fill="#03093F" stroke="url(#corpsiteHeroGrad)" strokeOpacity="0.3" strokeWidth="1" />
      <rect x="108" y="224" width="22" height="3" rx="1.5" fill="url(#corpsiteHeroGrad)" opacity="0.6" />
      <rect x="108" y="232" width="40" height="3" rx="1.5" fill="#B5BAD9" opacity="0.3" />
      <rect x="108" y="240" width="32" height="3" rx="1.5" fill="#B5BAD9" opacity="0.25" />

      <rect x="170" y="216" width="60" height="42" rx="4" fill="#03093F" stroke="url(#corpsiteHeroGrad)" strokeOpacity="0.3" strokeWidth="1" />
      <rect x="178" y="224" width="26" height="3" rx="1.5" fill="url(#corpsiteHeroGrad)" opacity="0.6" />
      <rect x="178" y="232" width="40" height="3" rx="1.5" fill="#B5BAD9" opacity="0.3" />
      <rect x="178" y="240" width="36" height="3" rx="1.5" fill="#B5BAD9" opacity="0.25" />

      <rect x="240" y="216" width="60" height="42" rx="4" fill="#03093F" stroke="url(#corpsiteHeroGrad)" strokeOpacity="0.3" strokeWidth="1" />
      <rect x="248" y="224" width="20" height="3" rx="1.5" fill="url(#corpsiteHeroGrad)" opacity="0.6" />
      <rect x="248" y="232" width="40" height="3" rx="1.5" fill="#B5BAD9" opacity="0.3" />
      <rect x="248" y="240" width="28" height="3" rx="1.5" fill="#B5BAD9" opacity="0.25" />
    </g>

    {/* Footer mock with CTA */}
    <g>
      <rect x="100" y="270" width="200" height="36" rx="6" fill="none" stroke="url(#corpsiteHeroGrad)" strokeOpacity="0.25" strokeWidth="1" />
      <rect x="112" y="282" width="64" height="4" rx="2" fill="#B5BAD9" opacity="0.4" />
      <rect x="112" y="292" width="40" height="4" rx="2" fill="#B5BAD9" opacity="0.3" />
      <rect x="220" y="282" width="68" height="14" rx="7" fill="#424DE2" />
    </g>

    {/* Floating mobile preview */}
    <g>
      <rect
        x="306"
        y="170"
        width="48"
        height="86"
        rx="8"
        fill="#00003C"
        stroke="url(#corpsiteHeroGrad)"
        strokeWidth="1.5"
      />
      <rect x="312" y="180" width="36" height="64" rx="2" fill="#03093F" />
      <rect x="316" y="186" width="20" height="4" rx="2" fill="url(#corpsiteHeroGrad)" opacity="0.7" />
      <rect x="316" y="194" width="28" height="3" rx="1.5" fill="#B5BAD9" opacity="0.4" />
      <rect x="316" y="202" width="24" height="3" rx="1.5" fill="#B5BAD9" opacity="0.3" />
      <rect x="316" y="220" width="28" height="10" rx="5" fill="#424DE2" opacity="0.85" />
    </g>

    {/* Sparkle */}
    <path
      d="M64 160L66.5 167L73 169.5L66.5 172L64 179L61.5 172L55 169.5L61.5 167Z"
      fill="url(#corpsiteHeroAccent)"
      opacity="0.85"
    />
  </svg>
);

export default CorpsiteHero;
