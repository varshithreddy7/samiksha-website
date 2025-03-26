"use client";
import * as React from "react";
import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className={`flex flex-wrap gap-6 items-start py-9 pr-6 pl-20 bg-white rounded-md shadow-2xl max-md:px-5 ${className}`}
    >
      <h2 className="flex-auto mt-3 text-slate-900">{question}</h2>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-10 px-1.5 w-6 h-6 text-white whitespace-nowrap bg-black rounded-full"
        aria-expanded={isOpen}
        aria-controls={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && answer && (
        <div
          id={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
          className="w-full mt-4 text-slate-700"
        >
          {answer}
        </div>
      )}
    </article>
  );
};
