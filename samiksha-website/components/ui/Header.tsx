import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="absolute w-full h-[92px] left-0 top-0 flex items-center px-10  z-[100]">
      <img
        src="/images/samiksha-logo.jpg"
        alt="Logo"
        className="w-[210px] h-[92px] object-contain"
      />
      <nav className="absolute w-[796px] h-[22px] left-[359px] top-[25px] flex space-x-8 text-black font-medium">
        <a href="#" className="hover:text-gray-600">ALL COURSES</a>
        <a href="#" className="hover:text-gray-600">TOPPERS</a>
        <a href="#" className="hover:text-gray-600">STUDY MATERIAL</a>
        <a href="#" className="hover:text-gray-600">CURRENT AFFAIRS</a>
        <a href="#" className="hover:text-gray-600">CONTACT</a>
        <a href="#" className="hover:text-gray-600">FAQ</a>
      </nav>
      <button className="absolute w-[188px] h-[60px] top-[14px] left-[1221px] bg-[#0F6CB4] text-white rounded-[30px] font-medium text-lg hover:bg-[#0F6CB4]">
        Let's Talk
      </button>
    </div>
  );
};

export default Header;
