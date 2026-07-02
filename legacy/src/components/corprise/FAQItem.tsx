import React from "react";

interface Props {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<Props> = ({ id, question, answer, isOpen, onToggle }) => {
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;
  return (
    <div className="border border-white-100/10 rounded-lg overflow-hidden bg-black-900">
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          className="w-full flex items-center justify-between px-6 py-4 text-left"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="text-base font-intersemibold text-white-100 pr-4">
            {question}
          </span>
          <span
            className="text-[#AEE0FC] flex-shrink-0 text-lg font-interbold"
            aria-hidden="true"
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="px-6 pb-5 border-t border-white-100/10"
      >
        <p className="pt-4 text-base font-worksanslight text-gray-200 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
