"use client";
import * as React from "react";
import { FeatureImage } from "./FeatureImage";
import { TextContent } from "./TextContent";
 
function MissionVisionContainer() {
  return (
<section className="px-5 py-20 mx-auto my-0 w-full bg-white max-w-[1440px] max-sm:px-5 max-sm:py-10">
<div className="flex gap-12 justify-center items-center max-md:flex-col max-md:gap-10">
<FeatureImage
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5943bf1f97275520779b73809458355111f5faeb"
          altText="IAS Preparation Setup"
        />
<TextContent
          heading="Mission And Vision"
          description={
            '"Samiksha Academy is committed to empowering IAS and Group A exam aspirants through high-quality content, expert mentorship, and a structured learning experience, both online and offline. Our mission is to provide a seamless and engaging platform that enhances knowledge, critical thinking, and strategic preparation With a vision to become India\'s most trusted IAS coaching platform, we aim to leverage innovative teaching methods, strong online presence, and a results-driven approach to help aspirants achieve excellence and success in their journey."'
          }
        />
</div>
</section>
  );
}
 
export default MissionVisionContainer;