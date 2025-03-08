import * as React from "react";

import { IconOverlay } from "./IconOverlay";
 
export function ImageSection() {

  return (
<div className="relative flex-1 max-w-[620px] max-md:max-w-full">
<img

        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a232a0e10dd4c7b9326eaa6fa7663783796a3024"

        className="object-cover w-full h-[575px] rounded-[30px] max-md:h-auto"

        alt="Founder"

      />
<IconOverlay />
</div>

  );

}

 