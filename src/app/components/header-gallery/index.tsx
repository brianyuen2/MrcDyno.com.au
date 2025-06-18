import React from "react";
import Image from "next/image";
import carBg from "../../assets/car-bg.jpg";

export const HeaderGallery = () => {
  return (
    <div className="relative">
      <Image
        src={carBg}
        alt={"carBg"}
        className={"overflow-clip min-h-[450px] object-cover"}
      />
      <div
        className={
          "flex flex-col absolute inset-0 items-center justify-center font-sans bg-black/25"
        }
      >
        <div className={`text-5xl md:text-8xl xl:text-9xl font-bold`}>
          {"Hey!"}
        </div>
        <div
          className={`text-2xl :text-4xl xl:text-6xl 
                                text-center font-bold 
                                pt-2 md:pt-6 xl:pt-10 
                                px-6`}
        >
          {"I'm Brian. Software Engineer & Maker."}
        </div>
        <button
          className={`text-l md:text-xl xl:text-2xl 
                    px-2 pt-1 pb-2
                    mt-2 md:mt-5 xl:mt-7
                    mb-40 md:mb-30 lg:mb-35 2xl:mb-70 3xl:mb-130
                    border border-[#F8F0E3] rounded-lg
                     transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-lg hover:bg-white/15
                    `}
        >
          <a href={"#projects"}>{"Find out more"}</a>
        </button>
        <button
          className={`text-l md:text-xl xl:text-2xl 
                    px-2 pt-1 pb-2
                    mt-2 md:mt-4 
                    border border-[#F8F0E3] rounded-lg
                    transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-lg hover:bg-white/15
                    `}
        >
          <a href={"#projects"}>{"View projects"}</a>
        </button>
      </div>
    </div>
  );
};
