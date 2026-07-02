import React from "react";

import { pillars } from "../../data/corpsite";

const PillarStrip: React.FC = () => {
  return (
    <nav
      aria-label="Corplabs pillars"
      className="border-y border-white-100/10 bg-black-900/40"
    >
      <div className="container mx-auto max-w-6xl px-5">
        <ol className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 text-xs font-intersemibold tracking-widest uppercase">
          {pillars.map((pillar) => {
            const isCurrent = pillar.isCurrent === true;
            return (
              <li key={pillar.id} className="inline-flex items-center">
                {isCurrent ? (
                  <span
                    aria-current="page"
                    className="inline-flex items-center gap-1.5 text-[#AEE0FC]"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#AEE0FC]"
                    />
                    {pillar.name}
                  </span>
                ) : (
                  <a
                    href={pillar.href}
                    className="text-gray-200/70 hover:text-white-100 transition-colors"
                  >
                    {pillar.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default PillarStrip;
