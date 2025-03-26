"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Mentor {
  imageUrl: string;
  name: string;
  title: string;
}

interface MentorCarouselProps {
  mentors: Mentor[];
}

const Carousel: React.FC<MentorCarouselProps> = ({ mentors }) => {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
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

  return (
    <div className="relative">
      <button
        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-sky-700 text-white p-2 rounded-full shadow-lg"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <ChevronLeft size={24} />
      </button>
      <Slider ref={sliderRef} {...settings}>
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            className="px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center p-6 rounded-lg">
              <img
                src={mentor.imageUrl}
                alt={`${mentor.name} - ${mentor.title}`}
                className="w-[200px] h-[200px] rounded-full mb-4"
              />
              <h3 className="text-2xl font-bold text-sky-700">{mentor.name}</h3>
              <p className="text-lg text-black">{mentor.title}</p>
            </div>
          </motion.div>
        ))}
      </Slider>
      <button
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-sky-700 text-white p-2 rounded-full shadow-lg"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
