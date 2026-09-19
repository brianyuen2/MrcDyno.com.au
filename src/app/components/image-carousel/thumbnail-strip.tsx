"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { CarouselImage } from "./types";

export const ThumbnailStrip = (props: {
  images: CarouselImage[];
  currentIndex: number;
  onSelect: (index: number) => void;
}) => {
  const { images, currentIndex, onSelect } = props;
  const stripRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const syncArrows = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;

    setCanScrollLeft(strip.scrollLeft > 1);
    setCanScrollRight(
      strip.scrollLeft + strip.clientWidth < strip.scrollWidth - 1,
    );
  }, []);

  useEffect(() => {
    syncArrows();
    window.addEventListener("resize", syncArrows);
    return () => window.removeEventListener("resize", syncArrows);
  }, [syncArrows, images.length]);

  /* Keep the active thumbnail in view when the main image changes, otherwise
     arrow navigation can leave the highlighted thumb off screen. */
  useEffect(() => {
    const strip = stripRef.current;
    const active = strip?.children[currentIndex] as HTMLElement | undefined;
    active?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [currentIndex]);

  const scrollByPage = (direction: -1 | 1) => {
    const strip = stripRef.current;
    if (!strip) return;

    strip.scrollBy({ left: direction * strip.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative mt-2 md:mt-3">
      <div
        ref={stripRef}
        onScroll={syncArrows}
        className="flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth md:gap-3
                   [-ms-overflow-style:none] [scrollbar-width:none]
                   [&::-webkit-scrollbar]:hidden"
      >
        {images.map(({ src, alt }, index) => (
          <button
            key={alt + index}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index}
            /* Grow to share the image's width when there are few thumbs, stop
               at the basis and let the strip scroll when there are many. */
            className={`relative aspect-[16/9] flex-[1_0_5.5rem] snap-start cursor-pointer
                        overflow-hidden transition-opacity duration-200
                        md:flex-[1_0_8rem] ${
                          currentIndex === index
                            ? "opacity-100 ring-2 ring-inset ring-white"
                            : "opacity-60 hover:opacity-100"
                        }`}
          >
            <Image
              src={src}
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 768px) 20vw, 30vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {canScrollLeft && <StripArrow side="left" onClick={() => scrollByPage(-1)} />}
      {canScrollRight && <StripArrow side="right" onClick={() => scrollByPage(1)} />}
    </div>
  );
};

const StripArrow = (props: { side: "left" | "right"; onClick: () => void }) => (
  <button
    type="button"
    onClick={props.onClick}
    aria-label={
      props.side === "left" ? "Scroll thumbnails left" : "Scroll thumbnails right"
    }
    className={`absolute top-1/2 -translate-y-1/2 ${
      props.side === "left" ? "left-1" : "right-1"
    }
                flex h-7 w-7 cursor-pointer items-center justify-center rounded-full
                bg-black/60 text-white backdrop-blur
                transition-colors duration-200 hover:bg-black/80`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
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
