import React from "react";

import type { ProblemItem } from "../../data/corprise-content";

interface Props {
  problem: ProblemItem;
}

const ProblemCard: React.FC<Props> = ({ problem }) => {
  return (
    <article className="flex flex-col p-8 bg-black-900 border border-white-100/10 rounded-lg h-full">
      {problem.stat && (
        <span className="text-2xl lg:text-4xl font-interbold text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text mb-4">
          {problem.stat}
        </span>
      )}
      <h3 className="text-lg font-intersemibold text-white-100 mb-3 leading-snug">
        {problem.title}
      </h3>
      <p className="text-base font-worksanslight text-gray-200 leading-relaxed">
        {problem.description}
      </p>
    </article>
  );
};

export default ProblemCard;
