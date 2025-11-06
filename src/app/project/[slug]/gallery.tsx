"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Hook to detect mobile screen size
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
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
  images: string[];
}

export const Gallery = (props: GalleryProps) => {
  const { autoPlayInterval = 4000, className } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualTransition, setIsManualTransition] = useState(false);
  const images = props.images;
  const isMobile = useIsMobile();

  const handleImageChange = useCallback(
    (newIndex: number, isManual = false) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setIsManualTransition(isManual);

      // Faster transition for manual navigation, slower for auto-play
      const transitionDuration = isManual ? 300 : 700;

      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsTransitioning(false);
        setIsManualTransition(false);
      }, transitionDuration);
    },
    [isTransitioning],
  );

  useEffect(() => {
    if (isHovered) return; // Don't auto-play when hovered

    const interval = setInterval(() => {
      handleImageChange((currentIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [
    autoPlayInterval,
    images.length,
    currentIndex,
    isHovered,
    handleImageChange,
  ]);

  const goToSlide = (index: number) => {
    handleImageChange(index, true); // Manual navigation = faster
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    handleImageChange(prevIndex, true); // Manual navigation = faster
  };

  const goToNext = () => {
    handleImageChange((currentIndex + 1) % images.length, true); // Manual navigation = faster
  };

  return (
    <div
      className={`relative  ${className} object-fit`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden preloaded images for better mobile performance */}
      <div className="hidden">
        {images.map((src, index) => (
          <Image
            key={`preload-${index}`}
            src={src}
            alt={`Preload ${index + 1}`}
            quality={isMobile ? 50 : 85}
            width={1400}
            height={450}
            loading="eager"
          />
        ))}
      </div>

      {/* Main Image */}
      <div>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={1400}
          height={450}
          className={`object-contain transition-opacity ${
            isManualTransition ? "duration-300" : "duration-700"
          } ease-in ${isTransitioning ? "opacity-70" : "opacity-100"}`}
          priority={currentIndex === 0}
          quality={isMobile ? 50 : 85}
          loading="eager"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
        aria-label="Previous image"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
        aria-label="Next image"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Navigation Dots */}
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
