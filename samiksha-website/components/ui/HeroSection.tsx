"use client";
import React from "react";
import { Navigation } from "./Navigation";
import { CTAButton } from "./CTAButton";
import { FeatureCard } from "./FeatureCard";
import { SlashDecoration } from "./SlashDecoration";
 
const HeroSection: React.FC = () => {
  return (
<section className="relative w-full min-h-[948px] bg-[url('/images/upsc-herosection.png')] bg-cover bg-center ">
<Navigation />
 
      <div className="px-28 pt-64 pb-0 max-md:px-16 max-md:pt-52 max-md:pb-0 max-sm:px-5 max-sm:pt-36 max-sm:pb-0">
<div className="flex gap-1.5 items-center mb-6 text-2xl font-bold text-white max-sm:text-xl ">
  
<SlashDecoration />
<span>WELCOME TO SAMIKSHA ACADEMY</span>
</div>
 
        <h1 className="text-6xl font-bold tracking-tighter text-white max-md:text-5xl max-sm:text-4xl">
          Achieve Your IAS &
</h1>
<h2 className="mt-6 text-6xl font-extrabold tracking-tighter text-white max-md:text-5xl max-sm:text-4xl">
          UPSC Dream with Expert Coaching
</h2>
 
        <div className="flex gap-7 mt-14 max-md:flex-col max-md:items-center">
<CTAButton variant="primary">Enroll Now</CTAButton>
<CTAButton variant="secondary">Courses</CTAButton>
</div>
 
        <hr className="mx-auto my-16 h-px bg-white w-[1266px] max-sm:w-[90%]" />
 
        <div className="flex gap-10 justify-center mt-9 max-md:flex-col max-md:items-center">
<FeatureCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ac76ab32031733cfa5d2c8989f524dde2731c531"
            altText="Binoculars"
            title="Personalized Mentorship"
          />
<FeatureCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b516065acc08f70bf75aa3778cb49e43bb655231"
            altText="Growth"
            title="Proven Success Strategies"
          />
<FeatureCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d0d776280a70e3915bf5638551359308c99a612f"
            altText="Library"
            title="Comprehensive Study Materials"
          />
</div>
</div>
</section>
  );
};
 
export default HeroSection;