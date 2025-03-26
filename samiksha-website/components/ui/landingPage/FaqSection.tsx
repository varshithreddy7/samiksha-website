"use client";
import * as React from "react";
import { FaqItem } from "./FaqItem";
import { ContactSection } from "./ContactSection";

const FaqSection: React.FC = () => {
  const faqItems = [
    {
      question: "What courses does Samiksha Academy offer?",
      answer: "omorn",
    },
    {
      question: "Do you offer online classes?",
      answer: "",
    },
    {
      question: "What are the fees for the IAS coaching program",
      answer: "",
    },
    {
      question: "What is the success rate of your academy?",
      answer: "",
    },
    {
      question: "Do you provide personal mentorship?",
      answer: "",
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-28 pb-48 bg-slate-500 bg-opacity-20 max-md:px-5 max-md:py-24">
      <div className="flex flex-col w-full max-w-[1111px] max-md:max-w-full">
        <h1 className="self-center ml-8 text-4xl text-center text-zinc-800 max-md:max-w-full">
          Frequently Ask Questions
        </h1>
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[55%] max-md:ml-0 max-md:w-full">
              <div className="mt-20 w-full text-lg font-semibold leading-tight max-md:mt-10 max-md:max-w-full">
                {faqItems.map((item, index) => (
                  <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    className={index > 0 ? "mt-4" : ""}
                  />
                ))}
              </div>
            </div>
            <ContactSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
