import * as React from "react";
import { Button } from "./Button";
 
interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}
 
export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
}) => {
  return (
<article className="flex flex-col p-6 h-full rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-sm:p-4">
<h3 className="mb-6 text-xl font-bold text-center text-zinc-800 max-sm:text-lg">
        {title}
</h3>
<figure className="overflow-hidden mb-6 w-full rounded-3xl h-[270px] max-sm:h-[200px]">
<img src={imageUrl} alt={imageAlt} className="object-cover size-full" />
</figure>
<p className="grow mb-6 text-sm font-medium leading-normal text-center text-black">
        {description}
</p>
<div className="flex justify-center">
<Button>Know More</Button>
</div>
</article>
  );
};