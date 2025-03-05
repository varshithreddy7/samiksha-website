"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "Working with this team has been an absolute game-changer for our business. Their attention to detail and innovative solutions have helped us grow exponentially.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "The level of professionalism and expertise demonstrated by this company is unmatched. They've consistently delivered beyond our expectations.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    id: 3,
    name: "Emma Davis",
    text: "I cannot recommend them enough! Their dedicated approach and creative solutions have transformed our online presence completely.",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#0F6CB4] px-6 sm:px-10 lg:px-16">
        <h1 className="text-white text-4xl text-center font-semibold py-20">What Students Say?</h1>
      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center justify-center gap-8 relative">
          <div className="w-1/3 text-white text-center hidden md:block">
            <h3 className="text-xl font-bold mb-2">{testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].name}</h3>
            <p className="italic">{testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].text}</p>
          </div>

          <div className="flex items-center justify-center gap-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.5 }}
                className="backdrop-blur-lg rounded-xl p-10 w-full md:w-[500px] text-center "
              >
                <motion.img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white mb-4"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.h3 className="text-2xl font-bold text-white mb-2" whileHover={{ scale: 1.05 }}>
                  {testimonials[currentIndex].name}
                </motion.h3>
                <p className="text-white text-lg italic">
                  {testimonials[currentIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-1/3 text-white text-center hidden md:block">
            <h3 className="text-xl font-bold mb-2">{testimonials[(currentIndex + 1) % testimonials.length].name}</h3>
            <p className="italic">{testimonials[(currentIndex + 1) % testimonials.length].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
