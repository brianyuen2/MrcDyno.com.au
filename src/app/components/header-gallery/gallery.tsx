"use client";

import React from "react";
import { HeroCarousel } from "@/app/components/image-carousel";
import img1 from "./assets/gallery1.jpg";
import img3 from "./assets/gallery2.jpg";
import img2 from "./assets/gallery4.jpg";

const images = [
  {
    src: img2,
    alt: "Two red Nissan 300ZX Twin Turbos parked outside the MRC Dyno Services & Performance workshop in Seven Hills",
  },
  {
    src: img1,
    alt: "Nissan Skyline R32 GT-Rs being worked on inside the MRC Dyno workshop, one raised on the hoist",
  },
  {
    src: img3,
    alt: "Toyota Supras, a Nissan R35 GT-R and a Commodore on hoists in the MRC Dyno workshop",
  },
];

interface GalleryProps {
  autoPlayInterval?: number;
  className?: string;
  overlay?: (state: {
    index: number;
    isTransitioning: boolean;
  }) => React.ReactNode;
}

export const Gallery = (props: GalleryProps) => (
  <HeroCarousel
    {...props}
    images={images}
    frameClassName="aspect-[2048/922] min-h-[76svh] sm:min-h-[65svh] md:min-h-[497px] max-h-[90svh]"
  />
);
