import React from "react";
import { CourseCardProps } from "./types";

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  imageUrl,
  imageAlt,
}) => {
  return (
    <article className="flex gap-24 px-14 py-14 bg-white h-[300px] rounded-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] w-[700px] max-md:flex-col max-md:items-center max-md:p-8 max-md:w-full max-md:h-auto max-md:text-center">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="h-[187px] rounded-[30px] w-[195px] max-sm:h-[150px] max-sm:w-[150px]"
      />

      <div className="flex flex-col justify-between">
        <h3 className="text-4xl font-bold text-black">{title}</h3>

        <div className="flex gap-3 max-md:justify-center max-sm:flex-col max-sm:items-center">
          <button className="text-xl text-sky-700 bg-white border-sky-700 border-solid cursor-pointer border-[3px] h-[69px] rounded-[30px] w-[168px] max-sm:w-full">
            Know More
          </button>
          <button className="text-xl text-white bg-sky-700 border-sky-700 border-solid cursor-pointer border-[3px] h-[69px] rounded-[30px] w-[168px] max-sm:w-full">
            Join Know
          </button>
        </div>
      </div>
    </article>
  );
};
