import * as React from "react";
import {  IconPencil } from "@tabler/icons-react";
 
export function IconOverlay() {
  return (
<div className="flex absolute top-5 right-5 gap-4 max-sm:top-2.5 max-sm:right-2.5">
{/* <IconGraduation className="text-2xl text-black max-sm:text-xl" /> */}
<IconPencil className="text-2xl text-black max-sm:text-xl" />
</div>
  );
}