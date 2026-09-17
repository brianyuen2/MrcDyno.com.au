import React from "react";
import me from "./assets/me.jpg";
import Image from "next/image";
const intro = "Welcome to my page!";
const desc1 =
  "I built this website myself to showcase my software skills and some of my passions.";
const desc2 =
  "I've been working as a software engineer for over 5 years but I'm really just an engineer. I love to " +
  "build all sorts of things ranging from this website to my cars.";
const desc3 = "If you want your own custom website feel free to message me!";

export const About = () => (
  <div
    id={"about"}
    className={`py-8 lg:py-12 px-7 flex flex-col  items-center text-center  font-sans `}
  >
    <h2 className={`text-2xl lg:text-5xl xl:text-6xl  text-center font-bold`}>
      {intro}
    </h2>
    <div
      className={`my-7 lg:my-12
      max-w-[150px] lg:max-w-[300px] 2xl:max-w-[400px]`}
    >
      <Image src={me} alt={"me"} className={`rounded-3xl`} />
    </div>

    <div
      className={`text-lg md:text-2xl xl:text-2xl 
      text-justify font-sans 
      px-2 md:px-10
      pb-10
      max-w-[500px]`}
    >
      <TextBlock message={desc1} />
      <TextBlock message={desc2} />
      <TextBlock message={desc3} />
    </div>
  </div>
);

const TextBlock = (props: { message: string }) => {
  return <p className={`pt-6 lg:pt-8 xl:pt-16`}>{props.message}</p>;
};
