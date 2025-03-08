"use client";
import * as React from "react";
 
interface FeatureImageProps {
  imageUrl: string;
  altText: string;
}
 
export const FeatureImage: React.FC<FeatureImageProps> = ({
  imageUrl,
  altText,
}) => {
  return (
<img
      src={imageUrl}
      className="object-cover h-[550px] rounded-[40px] w-[550px] max-md:w-full max-md:h-auto max-md:max-w-[550px] max-sm:rounded-3xl"
      alt={altText}
    />
  );
};