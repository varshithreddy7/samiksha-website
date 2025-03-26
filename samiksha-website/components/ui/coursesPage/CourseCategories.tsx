import React from "react";

const categories = [
  "General Studies PCM Course",
  "UPSC Coaching in Chennai",
  "Optional Subject Programme",
  "CSAT Course",
  "UPSC Mentorship Program",
  "Interview Guidance Programme",
  "Optional Test Series",
  "Prelims Test Series",
  "Module Courses",
  "Mains Test Series",
  "Optional Subject Crash Course",
  "Optional Subject Enrichment Programme",
  "IFoS Coaching",
  "Postal Course",
  "Key Links",
];

export const CourseCategories: React.FC = () => {
  return (
    <aside className="p-6 bg-white rounded-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.25)] w-[404px] max-sm:w-full">
      <h2 className="mb-8 text-3xl font-bold text-black">Course Categories</h2>

      <div className="p-5 my-0 mr-0 ml-0 text-xl font-bold text-white bg-sky-700 rounded-none">
        General Studies PCM Course
      </div>

      <nav className="mt-8 text-2xl leading-loose text-zinc-800">
        {categories.map((category, index) => (
          <div key={index} className="cursor-pointer hover:text-sky-700">
            {category}
          </div>
        ))}
      </nav>
    </aside>
  );
};
