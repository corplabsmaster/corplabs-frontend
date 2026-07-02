import React from "react";

import type { ProcessStepItem } from "../../data/corprise-content";

interface Props {
  step: ProcessStepItem;
  isLast?: boolean;
  orientation?: "horizontal" | "vertical";
}

const ProcessStep: React.FC<Props> = ({ step, isLast = false, orientation = "horizontal" }) => {
  if (orientation === "vertical") {
    return (
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-[#424DE2] flex items-center justify-center font-interbold text-white text-sm flex-shrink-0">
            {step.step}
          </div>
          {!isLast && (
            <div
              className="w-[2px] flex-1 mt-2"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, rgba(66,77,226,0.4) 0px, rgba(66,77,226,0.4) 5px, transparent 5px, transparent 9px)",
              }}
            />
          )}
        </div>
        <div className="pb-8">
          <span className="text-xs font-intersemibold text-[#AEE0FC] tracking-wider block mb-1">
            {step.label} · {step.duration}
          </span>
          <h3 className="text-base font-intersemibold text-white-100 mb-1">
            {step.title}
          </h3>
          <p className="text-sm font-worksanslight text-gray-200 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center text-center z-10 px-2">
      <div className="w-12 h-12 rounded-full bg-[#424DE2] flex items-center justify-center font-interbold text-white text-base mb-4">
        {step.step}
      </div>
      <span className="text-xs font-intersemibold text-[#AEE0FC] tracking-wider mb-1">
        {step.label} · {step.duration}
      </span>
      <h3 className="text-base font-intersemibold text-white-100 mb-2">
        {step.title}
      </h3>
      <p className="text-sm font-worksanslight text-gray-200 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};

export default ProcessStep;
