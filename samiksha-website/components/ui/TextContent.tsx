"use client";
import * as React from "react";
 
interface TextContentProps {
  heading: string;
  description: string;
}
 
export const TextContent: React.FC<TextContentProps> = ({
  heading,
  description,
}) => {
  return (
<article className="max-w-[761px] max-md:max-w-full">
<h2 className="mb-8 text-4xl font-bold text-black max-md:text-3xl max-sm:mb-5 max-sm:text-3xl">
        {heading}
</h2>
<p className="text-2xl leading-normal text-zinc-800 max-md:text-xl max-sm:text-lg">
        {description}
</p>
</article>
  );
};