import * as React from "react";
import { QuestionInput } from "./QuestionInput";

export const ContactSection: React.FC = () => {
  return (
    <aside className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full font-semibold max-md:mt-10 max-md:max-w-full ">
        <div className="flex flex-col pl-10 text-black max-md:pl-5 max-md:max-w-full ">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7160c8a14f52c330d42750b1f77ed060b4624888?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
            alt="Contact illustration"
            className="object-contain self-end max-w-full aspect-square rounded-[100px] w-[385px] mt-20"
          />
          <h2 className="self-center mt-12 text-3xl max-md:mt-10">
            Any Question?
          </h2>
          <p className="self-start text-base">
            You can ask anything you want to know Feedback
          </p>
        </div>
        <QuestionInput />
      </div>
    </aside>
  );
};
