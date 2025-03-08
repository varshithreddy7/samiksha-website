import React from "react";
 
interface CTAButtonProps {
  variant: "primary" | "secondary";
  children: string;
}
 
export const CTAButton: React.FC<CTAButtonProps> = ({ variant, children }) => {
  const baseStyles =
    "flex justify-center items-center text-2xl font-semibold cursor-pointer h-[60px] rounded-[30px] w-[229px]";
  const variantStyles =
    variant === "primary" ? "text-white bg-sky-700" : "text-black bg-gray-50";
 
  const arrowColor = variant === "primary" ? "white" : "#020102";
 
  return (
<button className={`${baseStyles} ${variantStyles}`}>
{/* <span>{children}</span> */}
<svg
        width="229"
        height="60"
        viewBox="0 0 229 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-icon"
>
        {variant === "secondary" && (
<path
            d="M0 30C0 13.4315 13.4315 0 30 0H199C215.569 0 229 13.4315 229 30C229 46.5685 215.569 60 199 60H30C13.4315 60 0 46.5685 0 30Z"
            fill="#FBFCFD"
          />
        )}
<text
          fill={arrowColor}
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize="24"
          fontWeight="600"
          letterSpacing="0em"
>
<tspan x={variant === "primary" ? "36.8455" : "48.9588"} y="38.2273">
            {children}
</tspan>
</text>
<path
          d={`M${variant === "primary" ? "202" : "186"}.402 24.5568C${variant === "primary" ? "202" : "186"}.439 24.0057 ${variant === "primary" ? "202" : "186"}.022 23.5291 ${variant === "primary" ? "201" : "185"}.471 23.4923L${variant === "primary" ? "192" : "176"}.491 22.8914C${variant === "primary" ? "191" : "175"}.94 22.8545 ${variant === "primary" ? "191" : "175"}.464 23.2714 ${variant === "primary" ? "191" : "175"}.427 23.8224C${variant === "primary" ? "191" : "175"}.39 24.3735 ${variant === "primary" ? "191" : "175"}.807 24.8501 ${variant === "primary" ? "192" : "176"}.358 24.8869L${variant === "primary" ? "200" : "184"}.34 25.421L${variant === "primary" ? "199" : "183"}.806 33.4032C${variant === "primary" ? "199" : "183"}.769 33.9542 ${variant === "primary" ? "200" : "184"}.186 34.4308 ${variant === "primary" ? "200" : "184"}.737 34.4677C${variant === "primary" ? "201" : "185"}.288 34.5046 ${variant === "primary" ? "201" : "185"}.765 34.0878 ${variant === "primary" ? "201" : "185"}.801 33.5367L${variant === "primary" ? "202" : "186"}.402 24.5568ZM${variant === "primary" ? "186" : "170"}.658 38.7151L${variant === "primary" ? "202" : "186"}.063 25.2428L${variant === "primary" ? "200" : "184"}.746 23.7373L${variant === "primary" ? "185" : "169"}.342 37.2097L${variant === "primary" ? "186" : "170"}.658 38.7151Z`}
          fill={arrowColor}
        />
</svg>
</button>
  );
};