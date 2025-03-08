"use client";
import React from "react";
 
interface FormInputProps {
  label: string;
  required?: boolean;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suffix?: string;
  prefix?: React.ReactNode;
}
 
export const FormInput: React.FC<FormInputProps> = ({
  label,
  required = false,
  type = "text",
  className = "",
  value,
  onChange,
  suffix,
  prefix,
}) => {
  return (
<div className="flex flex-col gap-2 mb-5">
<label className="text-base text-black">
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
</label>
<div
        className={`relative w-full rounded-md bg-zinc-100 h-[55px] max-sm:h-[45px] ${className}`}
>
        {prefix && (
<div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex items-center gap-1.5">
            {prefix}
</div>
        )}
<input
          type={type}
          value={value}
          onChange={onChange}
          className={`w-full h-full bg-transparent rounded-md px-5 ${prefix ? "pl-24" : ""} ${suffix ? "pr-24" : ""}`}
        />
        {suffix && (
<div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-500">
            {suffix}
</div>
        )}
</div>
</div>
  );
};