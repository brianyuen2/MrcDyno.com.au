import React from "react";
import car from "@/app/components/projects/assets/car.jpg";
import bike from "@/app/components/projects/assets/bike.jpg";
import silvy from "@/app/components/projects/assets/silvy.jpg";
import website from "@/app/components/projects/assets/website.png";
import Image, { StaticImageData } from "next/image";

export const Projects = () => {
  return (
    <div
      id={"projects"}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10
    pt-8 lg:pt-10 xl:pt-12
    px-8 lg:px-10 xl:px-12"
    >
      <Card projectName={"S15"} filename={car} />
      <Card projectName={"WEBDEV"} filename={website} />
      <Card projectName={"ZX6R"} filename={bike} />
      <Card projectName={"SILVY"} filename={silvy} />
    </div>
  );
};

const Card = (props: { projectName: string; filename: StaticImageData }) => {
  const { filename, projectName } = props;
  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl cursor-pointer group`}
    >
      <Image src={filename} alt={"Project image"} />
      <div className="absolute inset-0  group-hover:bg-white/15 transition-all duration-200"></div>
      <div
        className={`flex absolute inset-0 bg-black/25 justify-center items-center font-bold 
        text-2xl :text-4xl xl:text-6xl`}
      >
        {"PROJECT: " + projectName}
      </div>
    </div>
  );
};
