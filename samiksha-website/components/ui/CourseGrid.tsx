import * as React from "react";
import { CourseCard } from "./CourseCard";
 
const courseData = [
  {
    title: "Foundation Course (Prelims + Mains)",
    description:
      "Comprehensive training covering both Preliminary and Mains examinations with in-depth subject knowledge and answer-writing practice.",
    imageUrl: "https://placehold.co/600x400/f4f4f4/f4f4f4",
    imageAlt: "Foundation Course Materials",
  },
  {
    title: "NCERT Basics Course",
    description:
      "Comprehensive training covering both Preliminary and Mains examinations with in-depth subject knowledge and answer-writing practice.",
    imageUrl: "https://placehold.co/600x400/e8f0f8/e8f0f8",
    imageAlt: "NCERT Books Stack",
  },
  {
    title: "Current Affairs & Newspaper Analysis",
    description:
      "Comprehensive training covering both Preliminary and Mains examinations with in-depth subject knowledge and answer-writing practice.",
    imageUrl: "https://placehold.co/600x400/e0e8f0/e0e8f0",
    imageAlt: "Current Affairs Materials",
  },
];
 
export const CourseGrid: React.FC = () => {
  return (
<section className="grid gap-10 px-5 py-0 grid-cols-[repeat(3,1fr)] max-md:gap-6 max-md:grid-cols-[repeat(2,1fr)] max-sm:gap-6 max-sm:grid-cols-[1fr]">
      {courseData.map((course, index) => (
<CourseCard
          key={index}
          title={course.title}
          description={course.description}
          imageUrl={course.imageUrl}
          imageAlt={course.imageAlt}
        />
      ))}
</section>
  );
};