"use client";
 
import * as React from "react";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const rankers = [
  {
    id: 1,
    name: "John Doe",
    rank: 1,
    score: 980,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fc536ac069d266f47a6e6e9e1c9a904a68758ac6cc724257883381fe1854e5da?placeholderIfAbsent=true&apiKey=90f103ea843e424fadb36311fc6e709b",
  },
  {
    id: 2,
    name: "Jane Smith",
    rank: 2,
    score: 945,
    image: "URL_2",
  },
  {
    id: 3,
    name: "Mike Johnson",
    rank: 3,
    score: 920,
    image: "URL_3",
  },
  {
    id: 4,
    name: "Sarah Williams",
    rank: 4,
    score: 895,
    image: "URL_4",
  },
  {
    id: 5,
    name: "Alex Brown",
    rank: 5,
    score: 880,
    image: "URL_5",
  },
];
 
function CustomArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick?: () => void;
}) {
  return (
<button
      onClick={onClick}
      className={`absolute z-10 top-1/2 transform -translate-y-1/2
        ${direction === "prev" ? "left-0" : "right-0"}
        bg-white p-2 rounded-full shadow-lg
        transition-all duration-300 ease-in-out
        hover:bg-blue-50 hover:scale-110 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-blue-500
        active:scale-95`}
      aria-label={`${direction === "prev" ? "Previous" : "Next"} slide`}
>
<svg
        className={`w-6 h-6 text-blue-500 transition-transform duration-300
          ${direction === "prev" ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
>
<path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
</svg>
</button>
  );
}
 
function TopRankers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
<div className="bottom-[-40px] transition-all duration-300">
<ul className="flex justify-center gap-2"> {dots} </ul>
</div>
    ),
    customPaging: () => (
<button
        className="w-3 h-3 rounded-full bg-gray-300
        transition-all duration-300 ease-in-out
        hover:bg-blue-500 hover:scale-125
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    ),
    beforeChange: (current: number, next: number) => {
      // Add any additional animation logic here if needed
    },
  };
 
  return (
<section
      className="flex overflow-hidden flex-col py-12 px-4
      bg-gradient-to-b from-white to-blue-50
      transition-all duration-500 ease-in-out"
>
<h1
        className="text-4xl font-bold text-center text-black mb-12
        transform transition-all duration-500 ease-out
        hover:scale-105 hover:text-blue-800"
>
        Top Rankers
</h1>
<div className="relative px-8">
<Slider {...settings}>
          {rankers.map((ranker) => (
<div
              key={ranker.id}
              className="p-2 transition-transform duration-300"
>
<CarouselItem
                image={ranker.image}
                name={ranker.name}
                rank={ranker.rank}
                score={ranker.score}
              />
</div>
          ))}
</Slider>
</div>
</section>
  );
}
 
export default TopRankers;