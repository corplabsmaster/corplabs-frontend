import React from "react";

import { footerCta } from "../../data/corpsite";

const FooterCta: React.FC = () => {
  return (
    <section
      id="footer-cta"
      className="bg-black-950 py-20 px-5 relative overflow-hidden"
      aria-labelledby="corpsite-footer-cta-heading"
    >
      {/* Decorative dashed ellipse */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <svg width="620" height="380" viewBox="0 0 620 380" fill="none">
          <ellipse
            cx="310"
            cy="190"
            rx="295"
            ry="178"
            stroke="#424DE2"
            strokeOpacity="0.10"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
        </svg>
      </div>
      {/* Accent dots */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-2 h-2 rounded-full bg-[#424DE2] opacity-40"
          style={{ left: "8%", top: "22%" }}
        />
        <div
          className="absolute w-3 h-3 rounded-full bg-[#424DE2] opacity-25"
          style={{ right: "10%", top: "30%" }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full bg-[#424DE2] opacity-45"
          style={{ left: "16%", bottom: "24%" }}
        />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
          {footerCta.eyebrow}
        </span>
        <h2
          id="corpsite-footer-cta-heading"
          className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
        >
          {footerCta.headline}
        </h2>
        <p className="text-base font-worksanslight text-gray-200 mb-8 leading-relaxed fade-in">
          {footerCta.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
          <a
            href={footerCta.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
            // TODO: track event — corpsite footer CTA primary click
          >
            {footerCta.primaryCta.label}
          </a>
          <a
            href={footerCta.secondaryCta.href}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
          >
            {footerCta.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterCta;
