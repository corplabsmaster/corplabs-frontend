import React from "react";

import { valueProps } from "../../data/corpcode-content";

const ICONS: Record<string, React.ReactNode> = {
  bespoke: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vp1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="50%" stopColor="#BFD8FA" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      {/* Tailored ruler / measuring lines */}
      <path
        d="M6 12L34 12L34 28L6 28Z"
        stroke="url(#vp1)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V18M18 12V16M24 12V18M30 12V16"
        stroke="url(#vp1)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M10 32L30 32"
        stroke="url(#vp1)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
    </svg>
  ),
  predictable: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vp2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="50%" stopColor="#BFD8FA" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      {/* Document with checkmark */}
      <path
        d="M10 6H26L30 10V32C30 33.1 29.1 34 28 34H10C8.9 34 8 33.1 8 32V8C8 6.9 8.9 6 10 6Z"
        stroke="url(#vp2)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 18L18 22L26 14"
        stroke="url(#vp2)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 26H26" stroke="url(#vp2)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  endtoend: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vp3" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="50%" stopColor="#BFD8FA" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      {/* Connected nodes */}
      <circle cx="9" cy="20" r="4" stroke="url(#vp3)" strokeWidth="1.5" />
      <circle cx="20" cy="9" r="4" stroke="url(#vp3)" strokeWidth="1.5" />
      <circle cx="31" cy="20" r="4" stroke="url(#vp3)" strokeWidth="1.5" />
      <circle cx="20" cy="31" r="4" stroke="url(#vp3)" strokeWidth="1.5" />
      <path
        d="M12 17L17 12M23 12L28 17M28 23L23 28M17 28L12 23"
        stroke="url(#vp3)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  sea: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vp4" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AEE0FC" />
          <stop offset="50%" stopColor="#BFD8FA" />
          <stop offset="100%" stopColor="#E4D9FB" />
        </linearGradient>
      </defs>
      {/* Globe with longitude/latitude lines */}
      <circle cx="20" cy="20" r="14" stroke="url(#vp4)" strokeWidth="1.5" />
      <ellipse cx="20" cy="20" rx="6" ry="14" stroke="url(#vp4)" strokeWidth="1.3" />
      <path d="M6 20H34" stroke="url(#vp4)" strokeWidth="1.3" />
      <path d="M9 12H31M9 28H31" stroke="url(#vp4)" strokeWidth="1.2" strokeOpacity="0.7" />
    </svg>
  ),
};

const ValueProps: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corpcode-value-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          id="corpcode-value-heading"
          className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider text-center mb-12 fade-in"
        >
          Why teams pick Corpcode
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((vp) => (
            <div
              key={vp.id}
              className="flex flex-col p-8 bg-black-900 border border-white-100/10 rounded-lg fade-in"
            >
              <div className="mb-4">{ICONS[vp.id]}</div>
              <h3 className="text-lg font-intersemibold text-white-100 mb-2">
                {vp.title}
              </h3>
              <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
                {vp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
