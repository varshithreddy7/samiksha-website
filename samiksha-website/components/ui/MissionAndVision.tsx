'use client';

import Image from "next/image";
import React from "react";

const MissionVision: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 bg-gray-100 rounded-2xl shadow-lg">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/MisionAndVision.png"
          alt="Mission and Vision"
          width={400}
          height={300}
          className="w-full md:w-auto h-auto rounded-xl shadow-md"
        />
      </div>
      
      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 space-y-6 text-gray-800">
        <h2 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h2>
        <div>
          
          <p className="text-gray-600 mt-2 text-2md">
          "Samiksha Academy is committed to empowering IAS and Group A exam aspirants through high-quality content, expert mentorship, and a structured learning experience, both online and offline. Our mission is to provide a seamless and engaging platform that enhances knowledge, critical thinking, and strategic preparation With a vision to become India's most trusted IAS coaching platform, we aim to leverage innovative teaching methods, strong online presence, and a results-driven approach to help aspirants achieve excellence and success in their journey."          </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
