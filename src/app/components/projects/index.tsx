import React from "react";
import car from "./images/car.jpg";
import bike from "./images/bike.jpg";
import Image, { StaticImageData } from "next/image";

export const Projects = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10
    pt-8 lg:pt-10 xl:pt-12
    px-8 lg:px-10 xl:px-12"
    >
      <Card filename={car} projectName={"S15"} />
      <Card filename={bike} projectName={"ZX6R"} />
    </div>
  );
};

const Card = (props: { projectName: string; filename: StaticImageData }) => {
  const { filename, projectName } = props;
  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl cursor-pointer group`}
    >
      <Image src={filename} alt={"Project image"} />
      <div className="absolute inset-0  group-hover:bg-white/15 transition-all duration-300"></div>
      <div
        className={`flex absolute inset-0 bg-black/25 justify-center items-center font-bold 
        text-2xl :text-4xl xl:text-6xl`}
      >
        {"PROJECT: " + projectName}
      </div>
    </div>
  );
};
