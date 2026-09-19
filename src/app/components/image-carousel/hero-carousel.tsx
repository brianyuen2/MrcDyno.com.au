"use client";

import React from "react";
import Image from "next/image";
import type { CarouselImage } from "./types";
import { useCarousel, useIsMobile } from "./use-carousel";

const SWAP_DELAY_MS = 700;

export const HeroCarousel = (props: {
  images: CarouselImage[];
  autoPlayInterval?: number;
  className?: string;
  frameClassName?: string;
  overlay?: (state: {
    index: number;
    isTransitioning: boolean;
  }) => React.ReactNode;
}) => {
  const {
    images,
    autoPlayInterval = 4000,
    className,
    frameClassName = "aspect-[16/9]",
    overlay,
  } = props;
  const isMobile = useIsMobile();
  const { currentIndex, isTransitioning, goTo } = useCarousel({
    length: images.length,
    autoPlayInterval,
    swapDelayMs: SWAP_DELAY_MS,
  });

  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="hidden">
        {images.map(({ src }, index) => (
          <Image
            key={`preload-${index}`}
            src={src}
            alt=""
            aria-hidden="true"
            quality={isMobile ? 50 : 85}
            loading="eager"
          />
        ))}
      </div>

      <div className={`relative w-full overflow-hidden ${frameClassName}`}>
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ease-in ${
            isTransitioning ? "opacity-70" : "opacity-100"
          }`}
          priority={currentIndex === 0}
          placeholder="blur"
          quality={isMobile ? 50 : 85}
        />

        {overlay?.({ index: currentIndex, isTransitioning })}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-700 ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
