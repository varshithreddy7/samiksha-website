"use client";
import * as React from "react";
import { ContentSection } from "./ContentSection";
import { ImageSection } from "./ImageSection";
 
export default function FounderSection() {
  return (
<>
<link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
        rel="stylesheet"
      />
<section className="flex gap-10 justify-between px-20 py-10 mx-auto my-0 max-w-[1440px] max-md:flex-col max-md:items-center max-md:p-8 max-sm:p-5">
<ContentSection />
<ImageSection />
</section>
</>
  );
}