"use client";
import React, { useState } from "react";
import { FormInput } from "./FormInput";
 
export const FormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
 
  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
 
  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
  };
 
  const FlagIcon = () => (
<div
      dangerouslySetInnerHTML={{
        __html: `<svg id="83:17" width="61" height="25" viewBox="0 0 61 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="flag-icon" style="width: 36px; height: 18px"> <rect x="0.854126" y="3.80273" width="36" height="18" fill="url(#pattern0_83_17)"></rect> <mask id="mask0_83_17" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="36" y="0" width="25" height="25"> <rect x="36.8541" y="0.802734" width="24" height="24" fill="#D9D9D9"></rect> </mask> <g mask="url(#mask0_83_17)"> <path d="M48.8541 15.8027L43.8541 10.8027H53.8541L48.8541 15.8027Z" fill="#1C1B1F"></path> </g> <defs> <pattern id="pattern0_83_17" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_83_17" transform="matrix(0.00121065 0 0 0.00242131 0 -0.027845)"></use> </pattern>  </defs> </svg>`,
      }}
    />
  );
 
  return (
<section className="px-16 py-3 flex-[0_0_460px] max-md:flex-none max-md:px-5 max-md:py-3 max-md:w-full max-sm:px-2.5 max-sm:py-3">
<FormInput
        label="First Name"
        required
        value={formData.firstName}
        onChange={handleChange("firstName")}
      />
<FormInput
        label="Last Name"
        value={formData.lastName}
        onChange={handleChange("lastName")}
      />
<FormInput
        label="E-Mail"
        required
        value={formData.email}
        onChange={handleChange("email")}
        suffix="@gmail.com"
        className="right-[18px]"
      />
<FormInput
        label="Phone Number"
        required
        value={formData.phone}
        onChange={handleChange("phone")}
        prefix={
<>
<FlagIcon />
<span className="text-base text-slate-500">+44</span>
</>
        }
      />
<div className="flex flex-col gap-2 mb-5">
<label className="text-base text-black">Message</label>
<textarea
          value={formData.message}
          onChange={handleChange("message")}
          className="w-full rounded-md bg-zinc-100 h-[150px] max-sm:h-[45px] p-5"
        />
</div>
<button
        onClick={handleSubmit}
        className="mt-10 ml-24 text-base font-bold text-white bg-sky-700 rounded-3xl border border-black border-solid cursor-pointer h-[54px] w-[235px] max-md:mx-auto max-sm:w-full"
>
        Submit
</button>
</section>
  );
};