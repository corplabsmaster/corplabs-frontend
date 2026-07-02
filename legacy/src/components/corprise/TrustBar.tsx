import React from "react";

interface TrustItem {
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const items: TrustItem[] = [
  {
    label: "Built on Odoo",
    sublabel: "Community edition, self-hosted",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true">
        <path d="M6 12a6 6 0 1112 0 6 6 0 01-12 0z" stroke="url(#trustGrad)" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.5" stroke="url(#trustGrad)" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    label: "MyInvois-ready",
    sublabel: "LHDN e-Invoice integration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="url(#trustGrad)" strokeWidth="1.5" />
        <path d="M9 9h6M9 13h6M9 17h4" stroke="url(#trustGrad)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "LHDN-compliant",
    sublabel: "e-Invoicing mandate covered",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" stroke="url(#trustGrad)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8.5 12l2.5 2.5L16 9.5" stroke="url(#trustGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Malaysian-owned",
    sublabel: "Corplabs Sdn Bhd · D-U-N-S certified",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true">
        <path d="M4 10l8-6 8 6v10a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1V10z" stroke="url(#trustGrad)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Corpi AI included",
    sublabel: "Powered by Claude · every tier",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden="true">
        <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" stroke="url(#trustGrad)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TrustBar: React.FC = () => {
  return (
    <section
      className="bg-black-950 border-y border-white-100/10 py-10 px-5"
      aria-label="Trusted by"
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="trustGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#AEE0FC" />
            <stop offset="50%" stopColor="#BFD8FA" />
            <stop offset="100%" stopColor="#E4D9FB" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="h-8 flex items-center justify-center">{item.icon}</div>
              <span className="text-sm font-intersemibold text-white-100 tracking-wide">
                {item.label}
              </span>
              <span className="text-xs font-worksanslight text-gray-200/70 leading-snug">
                {item.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
