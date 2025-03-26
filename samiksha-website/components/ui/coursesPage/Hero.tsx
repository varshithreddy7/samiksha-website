import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-0 py-5 w-full bg-sky-700 bg-opacity-10 h-[335px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/38e4ee29ed44048d47ee6e57f395ba480d50ced9"
        className="mb-4 h-[133px] rounded-[70px] w-[134px]"
        alt="Hero Logo"
      />

      <h1 className="mb-8 text-3xl text-center text-black max-sm:text-2xl">
        <span>Crack your exam with </span>
        <span className="text-4xl font-bold text-sky-700 max-sm:text-3xl">
          India's best Teachers &amp; Institutes
        </span>
      </h1>

      <div className="flex gap-16 justify-center max-sm:flex-col max-sm:items-center">
        <div className="flex gap-1.5 items-center text-sm text-black">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ede2ee78f7860b44d82bcc134c9f6b95a6094797"
            className="w-6 h-6"
            alt="Feature"
          />
          <span>Courses by Super Teachers</span>
        </div>

        <div className="flex gap-1.5 items-center text-sm text-black">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="213:11" layer-name="Component" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px"> <g clip-path="url(#clip0_213_11)"> <g filter="url(#filter0_d_213_11)"> <path d="M3.9375 7.33173L7.33173 3.9375L7.3414 3.92813C7.68106 3.58847 7.85204 3.41748 8.05204 3.29492C8.23099 3.18526 8.42581 3.10425 8.62988 3.05526C8.86006 3 9.10457 3 9.59375 3H14.4053C14.8945 3 15.14 3 15.3702 3.05526C15.5743 3.10425 15.7693 3.18526 15.9482 3.29492C16.15 3.41857 16.3233 3.59181 16.6689 3.9375L20.0632 7.33173C20.4091 7.67761 20.5817 7.85022 20.7053 8.05205C20.815 8.23099 20.8953 8.4263 20.9443 8.63037C20.9996 8.86055 21 9.10506 21 9.59424V14.4058C21 14.895 20.9996 15.1395 20.9443 15.3697C20.8953 15.5738 20.815 15.7688 20.7053 15.9478C20.5817 16.1496 20.4091 16.3226 20.0632 16.6685L16.6689 20.0627C16.323 20.4086 16.1501 20.5812 15.9482 20.7049C15.7693 20.8145 15.5743 20.8958 15.3702 20.9448C15.1404 21 14.8952 21 14.4075 21H9.59151C9.10382 21 8.85971 21 8.62988 20.9448C8.42581 20.8958 8.23099 20.8145 8.05204 20.7048C7.85021 20.5812 7.67763 20.4086 7.33173 20.0627L3.9375 16.6685C3.59182 16.3228 3.41857 16.1495 3.29492 15.9478C3.18526 15.7688 3.10425 15.5738 3.05526 15.3697C3 15.1395 3 14.8949 3 14.4058V9.59424C3 9.10506 3 8.86055 3.05526 8.63037C3.10425 8.4263 3.18526 8.23098 3.29492 8.05204C3.41824 7.85081 3.59057 7.67847 3.93442 7.33462L3.9375 7.33173Z" fill="#2D972D"></path> <path d="M15 10L11 14L9 12M7.33173 3.9375L3.9375 7.33173L3.93442 7.33462C3.59057 7.67847 3.41824 7.85081 3.29492 8.05204C3.18526 8.23098 3.10425 8.4263 3.05526 8.63037C3 8.86055 3 9.10506 3 9.59424V14.4058C3 14.8949 3 15.1395 3.05526 15.3697C3.10425 15.5738 3.18526 15.7688 3.29492 15.9478C3.41857 16.1495 3.59182 16.3228 3.9375 16.6685L7.33173 20.0627C7.67763 20.4086 7.85021 20.5812 8.05204 20.7048C8.23099 20.8145 8.42581 20.8958 8.62988 20.9448C8.85971 21 9.10382 21 9.59151 21H14.4075C14.8952 21 15.1404 21 15.3702 20.9448C15.5743 20.8958 15.7693 20.8145 15.9482 20.7049C16.1501 20.5812 16.323 20.4086 16.6689 20.0627L20.0632 16.6685C20.4091 16.3226 20.5817 16.1496 20.7053 15.9478C20.815 15.7688 20.8953 15.5738 20.9443 15.3697C20.9996 15.1395 21 14.895 21 14.4058V9.59424C21 9.10506 20.9996 8.86055 20.9443 8.63037C20.8953 8.4263 20.815 8.23099 20.7053 8.05205C20.5817 7.85022 20.4091 7.67761 20.0632 7.33173L16.6689 3.9375C16.3233 3.59181 16.15 3.41857 15.9482 3.29492C15.7693 3.18526 15.5743 3.10425 15.3702 3.05526C15.14 3 14.8945 3 14.4053 3H9.59375C9.10457 3 8.86006 3 8.62988 3.05526C8.42581 3.10425 8.23099 3.18526 8.05204 3.29492C7.85204 3.41748 7.68106 3.58847 7.3414 3.92813L7.33173 3.9375Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> <defs> <filter id="filter0_d_213_11" x="-1.5" y="2.5" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="4"></feOffset> <feGaussianBlur stdDeviation="2"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_213_11"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_213_11" result="shape"></feBlend> </filter> <clipPath id="clip0_213_11"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </svg>',
            }}
          />
          <span>500000+ Mock Tests</span>
        </div>

        <div className="flex gap-1.5 items-center text-sm text-black">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="213:15" layer-name="Component" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px"> <g clip-path="url(#clip0_213_15)"> <g filter="url(#filter0_d_213_15)"> <path d="M3.9375 7.33173L7.33173 3.9375L7.3414 3.92813C7.68106 3.58847 7.85204 3.41748 8.05204 3.29492C8.23099 3.18526 8.42581 3.10425 8.62988 3.05526C8.86006 3 9.10457 3 9.59375 3H14.4053C14.8945 3 15.14 3 15.3702 3.05526C15.5743 3.10425 15.7693 3.18526 15.9482 3.29492C16.15 3.41857 16.3233 3.59181 16.6689 3.9375L20.0632 7.33173C20.4091 7.67761 20.5817 7.85022 20.7053 8.05205C20.815 8.23099 20.8953 8.4263 20.9443 8.63037C20.9996 8.86055 21 9.10506 21 9.59424V14.4058C21 14.895 20.9996 15.1395 20.9443 15.3697C20.8953 15.5738 20.815 15.7688 20.7053 15.9478C20.5817 16.1496 20.4091 16.3226 20.0632 16.6685L16.6689 20.0627C16.323 20.4086 16.1501 20.5812 15.9482 20.7049C15.7693 20.8145 15.5743 20.8958 15.3702 20.9448C15.1404 21 14.8952 21 14.4075 21H9.59151C9.10382 21 8.85971 21 8.62988 20.9448C8.42581 20.8958 8.23099 20.8145 8.05204 20.7048C7.85021 20.5812 7.67763 20.4086 7.33173 20.0627L3.9375 16.6685C3.59182 16.3228 3.41857 16.1495 3.29492 15.9478C3.18526 15.7688 3.10425 15.5738 3.05526 15.3697C3 15.1395 3 14.8949 3 14.4058V9.59424C3 9.10506 3 8.86055 3.05526 8.63037C3.10425 8.4263 3.18526 8.23098 3.29492 8.05204C3.41824 7.85081 3.59057 7.67847 3.93442 7.33462L3.9375 7.33173Z" fill="#2D972D"></path> <path d="M15 10L11 14L9 12M7.33173 3.9375L3.9375 7.33173L3.93442 7.33462C3.59057 7.67847 3.41824 7.85081 3.29492 8.05204C3.18526 8.23098 3.10425 8.4263 3.05526 8.63037C3 8.86055 3 9.10506 3 9.59424V14.4058C3 14.8949 3 15.1395 3.05526 15.3697C3.10425 15.5738 3.18526 15.7688 3.29492 15.9478C3.41857 16.1495 3.59182 16.3228 3.9375 16.6685L7.33173 20.0627C7.67763 20.4086 7.85021 20.5812 8.05204 20.7048C8.23099 20.8145 8.42581 20.8958 8.62988 20.9448C8.85971 21 9.10382 21 9.59151 21H14.4075C14.8952 21 15.1404 21 15.3702 20.9448C15.5743 20.8958 15.7693 20.8145 15.9482 20.7049C16.1501 20.5812 16.323 20.4086 16.6689 20.0627L20.0632 16.6685C20.4091 16.3226 20.5817 16.1496 20.7053 15.9478C20.815 15.7688 20.8953 15.5738 20.9443 15.3697C20.9996 15.1395 21 14.895 21 14.4058V9.59424C21 9.10506 20.9996 8.86055 20.9443 8.63037C20.8953 8.4263 20.815 8.23099 20.7053 8.05205C20.5817 7.85022 20.4091 7.67761 20.0632 7.33173L16.6689 3.9375C16.3233 3.59181 16.15 3.41857 15.9482 3.29492C15.7693 3.18526 15.5743 3.10425 15.3702 3.05526C15.14 3 14.8945 3 14.4053 3H9.59375C9.10457 3 8.86006 3 8.62988 3.05526C8.42581 3.10425 8.23099 3.18526 8.05204 3.29492C7.85204 3.41748 7.68106 3.58847 7.3414 3.92813L7.33173 3.9375Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> <defs> <filter id="filter0_d_213_15" x="-1.5" y="2.5" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="4"></feOffset> <feGaussianBlur stdDeviation="2"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_213_15"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_213_15" result="shape"></feBlend> </filter> <clipPath id="clip0_213_15"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </svg>',
            }}
          />
          <span>Live Class And Mentorship</span>
        </div>
      </div>
    </section>
  );
};
