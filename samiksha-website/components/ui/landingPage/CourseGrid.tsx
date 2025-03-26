'use client';

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CourseCarousel = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const courses = [
    {
      id: 1,
      title: "Foundation Course (Prelims + Mains)",
      description: "Comprehensive training covering both Preliminary and Mains examinations with in-depth subject knowledge and answer-writing practice.",
      image: "/images/CourseImage.png",
    },
    {
      id: 2,
      title: "Foundation Course (Prelims + Mains)",
      description: "Comprehensive training covering both Preliminary and Mains examinations with in-depth subject knowledge and answer-writing practice.",
      image: "/images/CourseImage.png",
    }
  ];

  return (
    <div className="w-full bg-white overflow-hidden flex flex-col items-center py-16">
      {/* Header Section */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-[60px] h-[3px] bg-[#0f6cb4]" />
          <div className="w-2 h-2 rounded-full bg-[#0f6cb4]" />
          <div className="w-[60px] h-[3px] bg-[#0f6cb4]" />
        </div>
        <h2 className="text-[#0f6cb4] text-[42px] font-bold tracking-wide mt-2">COURSES OFFERED</h2>
        <p className="text-sm text-[#020102] tracking-wide">Transform Your Skills with Professional Guidance</p>
      </div>

      {/* Courses Carousel Section */}
      <div className="w-full px-10 mt-10 ml-15 relative flex justify-center">
        <Slider ref={sliderRef} {...settings} className="max-w-6xl">
          {courses.map((course) => (
            <div key={course.id} className="p-4 flex justify-center">
              <div className="w-[500px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-8">
                <h3 className="text-2xl font-semibold text-gray-900">{course.title}</h3>
                <img
                  className="w-full h-[350px] object-cover rounded-lg my-4 p-6"
                  alt={course.title}
                  src={course.image}
                />
                <p className="text-gray-600 text-lg">{course.description}</p>
                <div className="align-center mt-4 text-center">

                <button className="mt-6 bg-[#0f6cb4] text-white px-8 py-3 rounded-lg w-[200px] text-lg hover:bg-[#0d5b9e] transition">Know More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <button
          className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-[#0f6cb4] p-4 rounded-full shadow-md"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <ChevronLeft size={36} className="text-white" />
        </button>

        <button
          className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-[#0f6cb4] p-4 rounded-full shadow-md"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ChevronRight size={36} className="text-white" />
        </button>
      </div>
    </div>
  );
};