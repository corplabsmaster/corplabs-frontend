import React from "react";

import { processSteps } from "../../data/corprise-content";
import ProcessStep from "./ProcessStep";

const ProcessTimeline: React.FC = () => {
  return (
    <section
      className="bg-black-950 py-20 px-5"
      aria-labelledby="corprise-process-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-intersemibold tracking-widest text-[#AEE0FC] uppercase rounded-full border border-[#424DE2]/40 bg-[#424DE2]/10">
            How it works
          </span>
          <h2
            id="corprise-process-heading"
            className="text-2xl lg:text-4xl font-interbold text-white-100 tracking-wider mb-4"
          >
            From scorecard to go-live in 4–8 weeks.
          </h2>
          <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
            A playbook, not a proposal. Every Corprise engagement follows the same four steps — because Malaysian SMEs deserve predictable, not custom-quoted.
          </p>
        </div>

        <div className="hidden lg:flex items-start gap-0 relative">
          <div
            className="absolute left-[10%] right-[10%] h-0 border-t-2 border-dashed border-[#424DE2]/50 z-0"
            style={{ top: "22px" }}
          />
          {processSteps.map((step, i) => (
            <ProcessStep
              key={step.step}
              step={step}
              isLast={i === processSteps.length - 1}
              orientation="horizontal"
            />
          ))}
        </div>

        <div className="flex lg:hidden flex-col">
          {processSteps.map((step, i) => (
            <ProcessStep
              key={step.step}
              step={step}
              isLast={i === processSteps.length - 1}
              orientation="vertical"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
