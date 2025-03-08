"use client";
 
import * as React from "react";
 
interface CarouselItemProps {
  image: string;
  name: string;
  rank: number;
  score: number;
}
 
function CarouselItem({ image, name, rank, score }: CarouselItemProps) {
  return (
<article
      className="flex flex-col items-center p-6 mx-2 bg-white rounded-xl shadow-lg
      transition-all duration-300 ease-in-out transform
      hover:scale-105 hover:shadow-2xl
      hover:bg-gradient-to-b hover:from-white hover:to-blue-50
      cursor-pointer"
>
<div className="relative mb-4 group">
<div
          className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full
          flex items-center justify-center text-sm font-bold
          transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
>
          #{rank}
</div>
<div className="overflow-hidden rounded-full">
<img
            src={image}
            alt={`${name}'s profile`}
            className="w-32 h-32 object-cover
              transition-transform duration-500 ease-out
              border-4 border-blue-500 hover:border-blue-600
              transform group-hover:scale-110"
          />
</div>
</div>
<h2
        className="text-xl font-bold text-gray-800 mb-2
        transition-colors duration-300 group-hover:text-blue-700"
>
        {name}
</h2>
<div
        className="flex items-center gap-2 transition-all duration-300
        transform hover:translate-y-[-2px]"
>
<span className="text-sm font-semibold text-gray-600">Score:</span>
<span
          className="text-lg font-bold text-blue-600
          transition-colors duration-300 hover:text-blue-800"
>
          {score}
</span>
</div>
</article>
  );
}
 
export default CarouselItem;