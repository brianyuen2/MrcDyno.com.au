"use client";
import React from "react";

import { Gallery } from "@/app/components/header-gallery/gallery";

const slides = [
  {
    heading: "MRC Dyno",
    body: "Performance specialists, engine builds, and restoration in Sydney.",
  },
  {
    heading: "Vehicle Restoration",
    body: "Restore your car to showroom condition with our expert restoration services.",
  },
  {
    heading: "Engine Builds",
    body: "Let us build you the ultimate engine from the ground up.",
  },
];

export const HeaderGallery = () => {
  return (
    <div className="relative" id={"home"}>
      <Gallery
        overlay={({ index, isTransitioning }) => (
          <div
            className="imageText absolute inset-0 flex flex-col items-center justify-center
                       bg-black/45 px-6 pt-16 pb-28 text-center font-sans
                       md:pt-20 md:pb-32"
          >
            <div
              className={`flex flex-col items-center transition-opacity duration-700 ease-in-out ${
                isTransitioning ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <h1
                className="text-3xl font-bold uppercase tracking-wide
                           md:text-6xl xl:text-7xl 2xl:text-8xl"
              >
                {slides[index].heading}
              </h1>
              <p
                className="pt-3 text-lg md:pt-5 md:text-2xl
                           xl:pt-8 xl:text-3xl 2xl:pt-10 2xl:text-4xl"
              >
                {slides[index].body}
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-12 flex justify-center md:bottom-16 xl:bottom-24">
              <a
                href="#performance"
                className="rounded-lg border border-current cursor-pointer
                           uppercase tracking-wide
                           px-4 py-2 text-sm
                           md:px-6 md:py-3 md:text-lg
                           xl:px-8 xl:py-4 xl:text-xl
                           transition-all duration-200 ease-in-out
                           hover:scale-105 hover:bg-white/15 hover:shadow-lg"
              >
                {"Learn more"}
              </a>
            </div>
          </div>
        )}
      />
    </div>
  );
};
