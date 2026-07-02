import React from "react";

const perks = [
  "25% off your first 12 months",
  "Founder-line WhatsApp access to the Corplabs team",
  "Roadmap input — quarterly priority call",
  "Free tier upgrade for 3 months as your business grows",
  "Case study co-authorship (opt-in)",
];

const FoundingFiveCard: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5 relative overflow-hidden"
      aria-labelledby="corprise-founding-heading"
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <svg width="700" height="400" viewBox="0 0 700 400" fill="none">
          <ellipse
            cx="350"
            cy="200"
            rx="330"
            ry="180"
            stroke="#424DE2"
            strokeOpacity="0.12"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="rounded-2xl border border-[#424DE2]/50 bg-gradient-to-br from-[#424DE2]/15 via-black-900 to-black-950 p-8 sm:p-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/60 bg-[#424DE2]/20">
            Founding Five · Early access
          </span>
          <h2
            id="corprise-founding-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
          >
            Be one of our first five Corprise clients.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            We&apos;re onboarding our first cohort of Malaysian SMEs. In exchange for partnering with us on the early roadmap, you lock in founding-member perks that never come back.
          </p>

          <ul className="flex flex-col gap-3 max-w-xl mx-auto text-left mb-8">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex items-start gap-3 text-sm font-worksanslight text-gray-200 leading-relaxed"
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#424DE2]/20 border border-[#424DE2]/60 flex items-center justify-center"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3 6l2 2 4-5"
                      stroke="#AEE0FC"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          <a
            href="/contact?program=founding-five"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#424DE2] text-white font-intersemibold text-base hover:bg-[#3340c4] transition-colors"
          >
            Apply to the Founding Five
          </a>
          <p className="text-xs font-worksanslight text-gray-200/70 mt-4">
            Limited to five companies. Applications reviewed weekly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundingFiveCard;
