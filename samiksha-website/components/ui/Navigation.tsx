import React from "react";
 
interface NavItemProps {
  text: string;
  hasDropdown?: boolean;
}
 
const NavItem: React.FC<NavItemProps> = ({ text, hasDropdown = false }) => (
<div className="flex gap-1.5 items-center">
<span className="text-base font-semibold text-black">{text}</span>
    {hasDropdown && (
<img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/762f1458d73c1851b6d71df900b6ac0d342cb85e"
        alt="Dropdown"
        className="h-[22px] w-[22px]"
      />
    )}
</div>
);
 
export const Navigation: React.FC = () => {
  return (
<nav className="flex justify-between items-center px-8 py-3.5">
<div className="h-[92px] w-[210px]">
<img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f161443c096076c129499475f5f5e3dc6238ff64"
          alt="Samiksha Academy Logo"
          className="size-full"
        />
</div>
 
      <div className="flex gap-6 items-center max-md:hidden">
<NavItem text="ALL COURSES" hasDropdown />
<NavItem text="TOPPERS" hasDropdown />
<NavItem text="STUDY MATERIAL" hasDropdown />
<NavItem text="CURRENT AFFAIRS" hasDropdown />
<NavItem text="CONTACT" />
<NavItem text="FAQ" />
</div>
 
      <button className="px-10 py-4 text-2xl font-semibold text-white bg-sky-700 cursor-pointer rounded-[30px] max-sm:px-8 max-sm:py-3 max-sm:text-xl">
        Let's Talk
</button>
</nav>
  );
};