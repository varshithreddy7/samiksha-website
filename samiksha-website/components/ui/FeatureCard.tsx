import React from "react";
 
interface FeatureCardProps {
  icon: string;
  altText: string;
  title: string;
}
 
export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  altText,
  title,
}) => {
  return (
<article className="flex flex-col items-center text-center">
<img src={icon} alt={altText} className="mb-7 h-[90px] w-[90px]" />
<h3 className="text-3xl font-bold text-white max-w-[371px] max-sm:text-2xl">
        {title}
</h3>
</article>
  );
};