"use client";



import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images: string[] = [
    "/images/upsc-herosection.png",
  
  ];

  useEffect(() => {
    const nextSlide = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentScreen((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsAnimating(false), 800);
    };

    intervalRef.current = setInterval(nextSlide, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentScreen, isAnimating]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image Transition */}
      <div className="absolute inset-0 flex">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentScreen}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[currentScreen]}
              alt="Restaurant Scene"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Static Text Content with Animations */}
      <div className="relative h-full flex items-center justify-start text-left px-4 pl-12 md:pl-24">
        <AnimatePresence mode="wait">
          <motion.div
            key="static-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-white mb-8"
            >
              <span className="text-blue-500">// </span> WELCOME TO SAMIKSHA ACADEMY
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Achieve Your IAS &
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 w-300"
            >
              UPSC Dream with Expert Coaching
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-x-4"
            >
              <button className="bg-[#0F6CB4] text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                Enroll Now 🡥
              </button>
              <button className="bg-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Courses 🡥
              </button>
            </motion.div>
          </motion.div>
          
        </AnimatePresence>
        
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentScreen(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentScreen ? "bg-yellow-500" : "bg-white/50"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
}