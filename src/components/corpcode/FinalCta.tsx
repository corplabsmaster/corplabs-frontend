import React from "react";

import { finalCta } from "../../data/corpcode-content";

const FinalCta: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5 relative overflow-hidden"
      aria-labelledby="corpcode-final-cta-heading"
    >
      {/* Background dashed ellipse */}
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
      {/* Background accent dots */}
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
        <div
          className="absolute w-2.5 h-2.5 rounded-full bg-[#424DE2] opacity-20"
          style={{ right: "18%", bottom: "20%" }}
        />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2
          id="corpcode-final-cta-heading"
          className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
        >
          {finalCta.headline}
        </h2>
        <p className="text-base font-worksanslight text-gray-200 mb-8 leading-relaxed fade-in">
          {finalCta.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 fade-in">
          <a
            href={finalCta.primaryCta.href}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
          >
            {finalCta.primaryCta.label}
          </a>
        </div>
        <p className="text-sm font-worksanslight text-gray-200">
          corplabs.co · contact@corplabs.co
        </p>
      </div>
    </section>
  );
};

export default FinalCta;
