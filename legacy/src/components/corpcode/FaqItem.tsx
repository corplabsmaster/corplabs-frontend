import React from "react";

interface Props {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<Props> = ({ id, question, answer, isOpen, onToggle }) => {
  const panelId = `corpcode-faq-panel-${id}`;
  const buttonId = `corpcode-faq-button-${id}`;

  return (
    <div className="border border-white-100/10 rounded-lg overflow-hidden bg-black-900 fade-in">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-base font-intersemibold text-white-100 pr-4">
          {question}
        </span>
        <span
          aria-hidden="true"
          className="text-[#AEE0FC] flex-shrink-0 text-lg font-interbold"
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="px-6 pb-5 border-t border-white-100/10"
        >
          <p className="pt-4 text-base font-worksanslight text-gray-200 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
