"use client";
 
import React from "react";
import Carousel from "./Carousel";
 
function FacultyPanel() {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc536ac069d266f47a6e6e9e1c9a904a68758ac6cc724257883381fe1854e5da?placeholderIfAbsent=true&apiKey=90f103ea843e424fadb36311fc6e709b",
      alt: "Faculty Panel Image 1",
    },
    {
      src: "URL_2",
      alt: "Faculty Panel Image 2",
    },
    {
      src: "URL_3",
      alt: "Faculty Panel Image 3",
    },
  ];
 
  return (
<section
      className="flex overflow-hidden flex-col text-4xl font-bold text-center text-black"
      aria-label="Faculty Panel Section"
>
<h2 className="self-center mb-8">Our Faculty Panel</h2>
<Carousel images={images} />
</section>
  );
}
 
export default FacultyPanel;