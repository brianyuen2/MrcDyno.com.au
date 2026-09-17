"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
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

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

interface GalleryProps {
  autoPlayInterval?: number;
  className?: string;
  overlay?: (state: {
    index: number;
    isTransitioning: boolean;
  }) => React.ReactNode;
}

export const Gallery = (props: GalleryProps) => {
  const { autoPlayInterval = 4000, className, overlay } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = useIsMobile();

  const handleImageChange = useCallback(
    (newIndex: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsTransitioning(false);
      }, 700);
    },
    [isTransitioning],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange((currentIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, currentIndex, handleImageChange]);

  const goToSlide = (index: number) => {
    handleImageChange(index);
  };

  return (
    <div className={`relative ${className}`}>
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

      <div
        className="relative w-full aspect-[2048/922] overflow-hidden
                   min-h-[76svh] sm:min-h-[65svh] md:min-h-[497px]
                   max-h-[90svh]"
      >
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
          loading="eager"
        />

        {overlay?.({ index: currentIndex, isTransitioning })}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (        
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-700 
                       ${
                         currentIndex === index
                           ? "bg-white scale-125"
                           : "bg-white/50 hover:bg-white/80"
                       }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
