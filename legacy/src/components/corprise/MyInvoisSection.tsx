import React from "react";

const checklist = [
  "LHDN taxpayer registration & TIN validation",
  "Supplier and customer onboarding flows",
  "Invoice submission, validation & unique identifier storage",
  "Consolidated e-invoice support for B2C businesses",
  "Credit notes, debit notes, and refunds",
  "Seven-year archival and audit-ready exports",
];

const MyInvoisSection: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5 relative overflow-hidden"
      aria-labelledby="corprise-myinvois-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
              MyInvois · LHDN-ready
            </span>
            <h2
              id="corprise-myinvois-heading"
              className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
            >
              e-Invoicing compliance, included in every tier.
            </h2>
            <p className="text-base font-worksanslight text-gray-200 mb-6 leading-relaxed">
              Malaysia&apos;s e-Invoice mandate is expanding through 2026. Corprise hooks directly into MyInvois so your invoices are submitted, validated, and archived — automatically — the moment you hit send in Odoo.
            </p>

            <ul className="flex flex-col gap-3 mb-6">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
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
                  <span className="text-sm font-worksanslight text-gray-200 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-xs font-worksanslight text-gray-200/70">
              MyInvois and LHDN are trademarks of Lembaga Hasil Dalam Negeri Malaysia.
            </p>
          </div>

          <div className="relative">
            <InvoiceIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

const InvoiceIllustration: React.FC = () => (
  <svg
    viewBox="0 0 420 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-[460px] mx-auto"
    role="img"
    aria-label="Invoice with MyInvois validation seal"
  >
    <defs>
      <linearGradient id="invoiceGrad" x1="60" y1="40" x2="340" y2="360" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#AEE0FC" />
        <stop offset="50%" stopColor="#BFD8FA" />
        <stop offset="100%" stopColor="#E4D9FB" />
      </linearGradient>
    </defs>

    <ellipse
      cx="210"
      cy="200"
      rx="180"
      ry="160"
      stroke="#424DE2"
      strokeOpacity="0.22"
      strokeWidth="1.5"
      strokeDasharray="4 4"
      fill="none"
    />

    <rect x="80" y="40" width="220" height="300" rx="10" fill="#03093F" stroke="url(#invoiceGrad)" strokeWidth="1.8" />

    <rect x="100" y="60" width="80" height="8" rx="3" fill="url(#invoiceGrad)" opacity="0.85" />
    <rect x="100" y="74" width="120" height="5" rx="2" fill="#B5BAD9" opacity="0.4" />

    <rect x="100" y="100" width="60" height="4" rx="2" fill="#AEE0FC" opacity="0.6" />
    <rect x="100" y="110" width="100" height="5" rx="2" fill="#B5BAD9" opacity="0.35" />
    <rect x="220" y="100" width="60" height="4" rx="2" fill="#AEE0FC" opacity="0.6" />
    <rect x="220" y="110" width="60" height="5" rx="2" fill="#B5BAD9" opacity="0.35" />

    <line x1="100" y1="140" x2="280" y2="140" stroke="#424DE2" strokeOpacity="0.3" strokeWidth="1" />

    <rect x="100" y="155" width="180" height="4" rx="2" fill="#B5BAD9" opacity="0.25" />
    <rect x="100" y="167" width="120" height="4" rx="2" fill="#B5BAD9" opacity="0.25" />
    <rect x="240" y="167" width="40" height="4" rx="2" fill="url(#invoiceGrad)" opacity="0.6" />
    <rect x="100" y="179" width="160" height="4" rx="2" fill="#B5BAD9" opacity="0.25" />
    <rect x="100" y="191" width="100" height="4" rx="2" fill="#B5BAD9" opacity="0.25" />
    <rect x="240" y="191" width="40" height="4" rx="2" fill="url(#invoiceGrad)" opacity="0.6" />

    <line x1="100" y1="215" x2="280" y2="215" stroke="#424DE2" strokeOpacity="0.3" strokeWidth="1" />

    <rect x="100" y="230" width="60" height="6" rx="2" fill="#AEE0FC" opacity="0.7" />
    <rect x="220" y="228" width="60" height="8" rx="2" fill="url(#invoiceGrad)" opacity="0.95" />

    <rect x="100" y="270" width="40" height="30" rx="4" fill="#424DE2" opacity="0.35" />
    <rect x="108" y="278" width="24" height="3" rx="1" fill="#AEE0FC" opacity="0.9" />
    <rect x="108" y="285" width="18" height="3" rx="1" fill="#AEE0FC" opacity="0.6" />
    <rect x="108" y="292" width="20" height="3" rx="1" fill="#AEE0FC" opacity="0.6" />

    <g transform="translate(240 255)">
      <circle cx="30" cy="30" r="28" fill="#424DE2" opacity="0.22" />
      <circle cx="30" cy="30" r="22" stroke="url(#invoiceGrad)" strokeWidth="1.8" strokeDasharray="3 2" fill="none" />
      <path d="M20 30l7 7 13-14" stroke="#AEE0FC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="30" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#AEE0FC" letterSpacing="2">
        VALIDATED
      </text>
    </g>

    <circle cx="60" cy="80" r="2.5" fill="#424DE2" />
    <circle cx="370" cy="140" r="3" fill="#424DE2" />
    <circle cx="50" cy="300" r="2" fill="#424DE2" />
  </svg>
);

export default MyInvoisSection;
