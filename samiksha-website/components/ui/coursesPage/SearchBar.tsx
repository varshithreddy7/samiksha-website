import React from "react";

export const SearchBar: React.FC = () => {
  return (
    <div className="relative mx-auto my-5 w-[472px] max-sm:w-[90%]">
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<svg id="213:22" width="498" height="76" viewBox="0 0 498 76" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%"> <g filter="url(#filter0_d_213_22)"> <path d="M13 33.5756C13 20.0029 24.0029 9 37.5756 9H460.424C473.997 9 485 20.0029 485 33.5756C485 47.1483 473.997 58.1511 460.424 58.1511H37.5756C24.0028 58.1511 13 47.1483 13 33.5756Z" fill="white"></path> <path d="M37.5756 8.5C23.7267 8.5 12.5 19.7267 12.5 33.5756C12.5 47.4244 23.7267 58.6511 37.5756 58.6511H460.424C474.273 58.6511 485.5 47.4244 485.5 33.5756C485.5 19.7267 474.273 8.5 460.424 8.5H37.5756Z" stroke="#7A8194"></path> </g> <text fill="#23282F" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="63" y="39.3182">Search For Your Goal</tspan></text> <defs> <filter id="filter0_d_213_22" x="0" y="0" width="498" height="75.1511" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="4"></feOffset> <feGaussianBlur stdDeviation="6"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_213_22"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_213_22" result="shape"></feBlend> </filter> </defs> </svg>',
        }}
      />
    </div>
  );
};
