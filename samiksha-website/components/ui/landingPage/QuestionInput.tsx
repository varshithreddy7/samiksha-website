"use client";
import * as React from "react";
import { useState } from "react";

export const QuestionInput: React.FC = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle question submission
    setQuestion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="question"
        className="block mt-10 text-sm text-black max-md:mt-10 ml-10"
      >
        Let me know
      </label>
      <div className="flex gap-5 justify-between self-center mt-2 max-w-full w-[405px] ml-10">
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter Here"
          className="my-auto text-xs text-black flex-grow border-b-2 border-black max-md:w-full"
        />
        <button
          type="button"
          onClick={() => setQuestion("")}
          className="text-xl text-neutral-900"
          aria-label="Clear input"
        >
          x
        </button>
      </div>
    </form>
  );
};
