"use client";
import * as React from "react";
import { CourseGrid } from "./CourseGrid";
 
function Container() {
  return (
<main className="px-5 py-10 mx-auto my-0 max-w-[1440px]">
<h1 className="mb-10 text-4xl font-bold text-center text-zinc-800 max-md:text-3xl max-sm:text-3xl">
        Courses
</h1>
<hr className="p-5"/>
<CourseGrid />
</main>
  );
}
 
export default Container;