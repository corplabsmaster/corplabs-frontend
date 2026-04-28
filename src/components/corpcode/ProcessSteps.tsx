import React from "react";

import { processSteps } from "../../data/corpcode-content";

const ProcessSteps: React.FC = () => {
  return (
    <section
      id="process"
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corpcode-process-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            How we work
          </span>
          <h2
            id="corpcode-process-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4 fade-in"
          >
            Three phases. No surprises.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed fade-in">
            Every engagement starts with paid discovery so the build quote stands on real architecture, not assumptions.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Dashed connector for desktop */}
          <div
            className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-0.5 pointer-events-none"
            aria-hidden="true"
          >
            <svg width="100%" height="2" viewBox="0 0 600 2" preserveAspectRatio="none">
              <line
                x1="0"
                y1="1"
                x2="600"
                y2="1"
                stroke="#424DE2"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {processSteps.map((step) => (
            <li
              key={step.step}
              className="relative flex flex-col p-8 bg-black-900 border border-white-100/10 rounded-lg fade-in"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-[#424DE2]/15 border border-[#424DE2]/40 mx-auto md:mx-0">
                <span className="text-xl font-interbold text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
                  {String(step.step).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-intersemibold text-white-100 mb-1 text-center md:text-left">
                {step.title}
              </h3>
              <p className="text-xs font-worksanslight text-[#AEE0FC] uppercase tracking-widest mb-4 text-center md:text-left">
                {step.duration}
              </p>
              <p className="text-base font-worksanslight text-gray-200 leading-relaxed text-center md:text-left">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSteps;
