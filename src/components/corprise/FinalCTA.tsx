import React from "react";

const FinalCTA: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5 relative overflow-hidden"
      aria-labelledby="corprise-final-cta-heading"
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <svg width="720" height="420" viewBox="0 0 720 420" fill="none">
          <ellipse
            cx="360"
            cy="210"
            rx="340"
            ry="198"
            stroke="#424DE2"
            strokeOpacity="0.12"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
          <ellipse
            cx="360"
            cy="210"
            rx="220"
            ry="160"
            stroke="#424DE2"
            strokeOpacity="0.08"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
        </svg>
      </div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-2 h-2 rounded-full bg-[#424DE2] opacity-40" style={{ left: "8%", top: "22%" }} />
        <div className="absolute w-3 h-3 rounded-full bg-[#424DE2] opacity-25" style={{ right: "10%", top: "30%" }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#424DE2] opacity-45" style={{ left: "16%", bottom: "24%" }} />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#424DE2] opacity-20" style={{ right: "18%", bottom: "20%" }} />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
          Start now
        </span>
        <h2
          id="corprise-final-cta-heading"
          className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
        >
          Skip the RM 80,000 invoice.{" "}
          <span className="text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
            Start with your first month.
          </span>
        </h2>
        <p className="text-base font-worksanslight text-gray-200 mb-8 leading-relaxed">
          Take the scorecard, book a discovery call, or email us directly. Your first Corprise month starts whenever you&apos;re ready — and the Founding Five perks close when we hit five.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="#scorecard"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
          >
            Take the Scorecard
          </a>
          <a
            href="/contact?product=corprise"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white-100/30 text-white-100 font-intersemibold text-base hover:border-[#424DE2] hover:text-[#AEE0FC] transition-colors"
          >
            Book a Discovery Call
          </a>
        </div>
        <p className="text-sm font-worksanslight text-gray-200">
          corplabs.co · contact@corplabs.co · 016-672 7208
        </p>
        <p className="text-xl mt-6" aria-hidden="true">
          🦂
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
