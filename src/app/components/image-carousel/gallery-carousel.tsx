"use client";

import React from "react";
import Image from "next/image";
import type { CarouselImage } from "./types";
import { useCarousel, useIsMobile } from "./use-carousel";
import { ThumbnailStrip } from "./thumbnail-strip";

export const GalleryCarousel = (props: {
  images: CarouselImage[];
  autoPlayInterval?: number;
  className?: string;
  frameClassName?: string;
  sizes?: string;
  thumbnails?: boolean;
}) => {
  const {
    images,
    autoPlayInterval = 0,
    className,
    frameClassName = "aspect-[16/9]",
    sizes = "100vw",
    thumbnails = true,
  } = props;
  const isMobile = useIsMobile();
  const { currentIndex, goTo, next, previous } = useCarousel({
    length: images.length,
    autoPlayInterval,
  });

  return (
    <div className={`relative ${className ?? ""}`}>
      <div className={`relative w-full overflow-hidden ${frameClassName}`}>
        {images.map(({ src, alt }, index) => (
          <Image
            key={index}
            src={src}
            alt={currentIndex === index ? alt : ""}
            aria-hidden={currentIndex !== index}
            fill
            sizes={sizes}
            className={`object-cover transition-opacity duration-500 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            placeholder="blur"
            quality={isMobile ? 50 : 85}
          />
        ))}

        <ArrowButton side="left" onClick={previous} />
        <ArrowButton side="right" onClick={next} />
      </div>

      {thumbnails && (
        <ThumbnailStrip
          images={images}
          currentIndex={currentIndex}
          onSelect={goTo}
        />
      )}
    </div>
  );
};

const ArrowButton = (props: {
  side: "left" | "right";
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={props.onClick}
    aria-label={props.side === "left" ? "Previous image" : "Next image"}
    className={`absolute top-1/2 -translate-y-1/2 ${
      props.side === "left" ? "left-2 md:left-4" : "right-2 md:right-4"
    }
                flex h-14 w-14 cursor-pointer items-center justify-center rounded-full
                bg-black/40 text-white
                transition-colors duration-200 hover:bg-black/70
                md:h-20 md:w-20`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 md:h-6 md:w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={props.side === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  </button>
);
