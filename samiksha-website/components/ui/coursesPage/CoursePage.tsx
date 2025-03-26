"use client";
import React from "react";

import { Hero } from "./Hero";
import { SearchBar } from "./SearchBar";
import { CourseCategories } from "./CourseCategories";
import { CourseCard } from "./CourseCard";


export const CoursePage: React.FC = () => {
  const courses = [
    {
      title: "UGC NET/SET",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d71d2ad2b7c73b3f972fe06e9aad1d8a205eba3c",
      imageAlt: "UGC NET/SET",
    },
    {
      title: "UGC NET/SET",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d71d2ad2b7c73b3f972fe06e9aad1d8a205eba3c",
      imageAlt: "UGC NET/SET",
    },
    {
      title: "UGC NET/SET",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d71d2ad2b7c73b3f972fe06e9aad1d8a205eba3c",
      imageAlt: "UGC NET/SET",
    },
    {
      title: "UGC NET/SET",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/df422a6c351d7d4c4300226527f00e102dc2dc0f",
      imageAlt: "UGC NET/SET",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      <Hero />
      <SearchBar />

      <section className="flex gap-8 p-5 mt-8 max-md:flex-col">
        <CourseCategories />

        <div className="flex flex-col flex-1 gap-12">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              imageUrl={course.imageUrl}
              imageAlt={course.imageAlt}
            />
          ))}
        </div>
      </section>

    
    </main>
  );
};

export default CoursePage;
