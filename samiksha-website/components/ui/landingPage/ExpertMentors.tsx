"use client";
import React from "react";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

const mentors = [
    {
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/8650a2a1b7d892b4733610e04e68c4174e2aa116",
        name: "HON RAJEEV MISHRA",
        title: "Deputy Commissioner",
    },
    {
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/8796f758aea1a6a67ee4d9bf85a8ff80fd2c0dd7",
        name: "HON RAJEEV MISHRA",
        title: "Deputy Commissioner",
    },
    {
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/63eb53670bdc84e7b2a0798fd4938621ca014919",
        name: "HON RAJEEV MISHRA",
        title: "Deputy Commissioner",
    },
    {
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/8650a2a1b7d892b4733610e04e68c4174e2aa116",
        name: "HON RAJEEV MISHRA",
        title: "Deputy Commissioner",
    },
    {
        imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8650a2a1b7d892b4733610e04e68c4174e2aa116",
    name: "HON RAJEEV MISHRA",
    title: "Deputy Commissioner",
    },
];

const ExpertMentors: React.FC = () => {
    return (
        <motion.section
            className="overflow-hidden relative w-full bg-white py-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="absolute w-[800px] h-[860px] top-[0] left-[750px] opacity-100">
                <svg
                    width="795"
                    height="779"
                    viewBox="0 0 795 779"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.2"
                        d="M26.9041 440.802C-8.28356 424.039 -8.95182 374.195 25.7738 356.496L714.387 5.50838C746.015 -10.6123 783.412 12.8039 782.722 48.2962L776.958 344.786L794.053 729.738C795.627 765.163 758.9 789.505 726.887 774.255L26.9041 440.802Z"
                        fill="#0F6CB4"
                    />
                </svg>
            </div>
            <div className="px-4 mx-auto max-w-screen-lg text-center relative">
                <div className="w-[168px] h-2 mx-auto mt-6 mb-6 flex items-center justify-between">
                    <div className="w-[60px] h-[3px] bg-[#0f6cb4]" />
                    <div className="w-2 h-2 rounded-full bg-[#0f6cb4]" />
                    <div className="w-[60px] h-[3px] bg-[#0f6cb4]" />
                </div>
                <motion.h2
                    className="text-4xl font-bold text-sky-700 mb-6 mt-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    LEARN FROM EXPERT MENTORS
                </motion.h2>
                <motion.p
                    className="text-lg text-black mb-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Transform Your Skills with Professional Guidance
                </motion.p>
                <Carousel mentors={mentors} />
            </div>
        </motion.section>
    );
};

export default ExpertMentors;
