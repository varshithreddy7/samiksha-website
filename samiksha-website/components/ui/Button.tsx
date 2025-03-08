import * as React from "react";
 
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
 
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
<button
      onClick={onClick}
      className={`px-8 py-4 text-base font-semibold text-center bg-sky-700 rounded-xl cursor-pointer text-white w-fit ${className}`}
>
      {children}
</button>
  );
};