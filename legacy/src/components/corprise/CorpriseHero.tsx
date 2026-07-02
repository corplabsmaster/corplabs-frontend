import React from "react";

const CorpriseHero: React.FC = () => {
  return (
    <section
      className="text-gray-200 body-font bg-black-950 pt-[14vh] pb-20 px-5"
      aria-labelledby="corprise-hero-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-1 mb-6 text-xs font-intersemibold tracking-widest text-gray-200 uppercase rounded-full border border-white-100/20 bg-white-100/5">
              A Corplabs Product · Built on Odoo · MyInvois-ready
            </span>
            <h1
              id="corprise-hero-heading"
              className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
            >
              ERP for Malaysian SMEs.
              <br />
              <span className="text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
                One monthly subscription. No upfront shock.
              </span>
            </h1>
            <p className="text-base lg:text-lg font-worksanslight text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Corprise replaces RM 80,000+ Odoo implementations with a predictable monthly subscription — from RM 1,000. Go live in weeks, stay flexible month-to-month, get MyInvois and AI automation included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#scorecard"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
              >
                Find My Tier in 10 Minutes
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
              >
                See Pricing
              </a>
            </div>
            <p className="text-xs font-worksanslight text-gray-200/70 mt-6 max-w-lg">
              Trusted by Malaysian founders. 3-month minimum, then month-to-month. Your data stays yours.
            </p>
          </div>

          <div className="flex-shrink-0 w-full max-w-[320px] md:max-w-md mx-auto md:mx-0">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroIllustration: React.FC = () => (
  <svg
    viewBox="0 0 420 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="corpriseHeroGrad" x1="40" y1="40" x2="380" y2="380" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#AEE0FC" />
        <stop offset="50%" stopColor="#BFD8FA" />
        <stop offset="100%" stopColor="#E4D9FB" />
      </linearGradient>
      <linearGradient id="corpriseHeroAccent" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0%" stopColor="#AEE0FC" />
        <stop offset="100%" stopColor="#E4D9FB" />
      </linearGradient>
    </defs>

    <ellipse
      cx="210"
      cy="210"
      rx="180"
      ry="170"
      stroke="#424DE2"
      strokeOpacity="0.45"
      strokeWidth="1.5"
      strokeDasharray="4 4"
      fill="none"
    />
    <ellipse
      cx="210"
      cy="210"
      rx="130"
      ry="155"
      stroke="#424DE2"
      strokeOpacity="0.18"
      strokeWidth="1.2"
      strokeDasharray="3 3"
      fill="none"
    />

    <circle cx="60" cy="90" r="3" fill="#424DE2" />
    <circle cx="360" cy="280" r="4" fill="#424DE2" />
    <circle cx="80" cy="340" r="2.5" fill="#424DE2" />

    <g style={{ transformOrigin: "210px 210px" }}>
      <rect x="80" y="90" width="260" height="180" rx="12" fill="#00003C" stroke="url(#corpriseHeroGrad)" strokeWidth="1.8" />
      <rect x="80" y="90" width="260" height="26" rx="12" fill="#03093F" />
      <circle cx="95" cy="103" r="3" fill="#AEE0FC" opacity="0.7" />
      <circle cx="106" cy="103" r="3" fill="#BFD8FA" opacity="0.5" />
      <circle cx="117" cy="103" r="3" fill="#E4D9FB" opacity="0.4" />

      <rect x="94" y="128" width="78" height="58" rx="6" fill="#424DE2" opacity="0.22" />
      <rect x="100" y="136" width="40" height="4" rx="2" fill="#AEE0FC" opacity="0.7" />
      <rect x="100" y="146" width="60" height="8" rx="2" fill="#AEE0FC" opacity="0.9" />
      <rect x="100" y="160" width="30" height="4" rx="2" fill="#BFD8FA" opacity="0.5" />
      <rect x="100" y="172" width="50" height="4" rx="2" fill="#BFD8FA" opacity="0.45" />

      <rect x="182" y="128" width="78" height="58" rx="6" fill="#424DE2" opacity="0.22" />
      <rect x="188" y="136" width="40" height="4" rx="2" fill="#AEE0FC" opacity="0.7" />
      <rect x="188" y="146" width="60" height="8" rx="2" fill="#AEE0FC" opacity="0.9" />
      <rect x="188" y="160" width="30" height="4" rx="2" fill="#BFD8FA" opacity="0.5" />
      <rect x="188" y="172" width="50" height="4" rx="2" fill="#BFD8FA" opacity="0.45" />

      <rect x="94" y="196" width="166" height="60" rx="6" fill="#03093F" />
      <path d="M100 240 L120 228 L140 234 L160 218 L180 222 L200 210 L220 218 L240 202 L254 208" stroke="url(#corpriseHeroAccent)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="254" cy="208" r="3" fill="#AEE0FC" />
    </g>

    <g>
      <rect x="282" y="280" width="98" height="70" rx="10" fill="#03093F" stroke="#424DE2" strokeOpacity="0.55" strokeWidth="1.2" />
      <rect x="292" y="292" width="52" height="6" rx="3" fill="url(#corpriseHeroAccent)" opacity="0.7" />
      <rect x="292" y="304" width="38" height="4" rx="2" fill="#B5BAD9" opacity="0.4" />
      <rect x="292" y="316" width="78" height="8" rx="2" fill="#424DE2" opacity="0.8" />
      <rect x="292" y="330" width="54" height="4" rx="2" fill="#B5BAD9" opacity="0.35" />
    </g>

    <g>
      <rect x="40" y="300" width="110" height="50" rx="10" fill="#03093F" stroke="#424DE2" strokeOpacity="0.4" strokeWidth="1.2" />
      <circle cx="58" cy="325" r="6" fill="none" stroke="url(#corpriseHeroAccent)" strokeWidth="1.3" />
      <path d="M54 325 L57 328 L62 322" stroke="#AEE0FC" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="72" y="318" width="60" height="4" rx="2" fill="url(#corpriseHeroAccent)" opacity="0.7" />
      <rect x="72" y="328" width="44" height="4" rx="2" fill="#B5BAD9" opacity="0.4" />
    </g>

    <path d="M370 80 L372 86 L378 88 L372 90 L370 96 L368 90 L362 88 L368 86 Z" fill="url(#corpriseHeroAccent)" opacity="0.85" />
  </svg>
);

export default CorpriseHero;
