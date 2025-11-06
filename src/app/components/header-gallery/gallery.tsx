"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.jpg";
import bike1 from "./assets/bike1.jpg";

interface GalleryProps {
  autoPlayInterval?: number;
  className?: string;
}

export const Gallery = (props: GalleryProps) => {
  const images = [car1, bike1, car2];

  const { autoPlayInterval = 4000, className } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleImageChange = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Wait for fade out, then update current index
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 700); // Match this with CSS transition duration
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange((currentIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, images.length, currentIndex, handleImageChange]);

  const goToSlide = (index: number) => {
    handleImageChange(index);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Hidden preloaded images for better mobile performance */}
      <div className="hidden">
        {images.map((src, index) => (
          <Image
            key={`preload-${index}`}
            src={src}
            alt={`Preload ${index + 1}`}
            loading="eager"
            quality={85}
          />
        ))}
      </div>

      {/* Main Image with smooth transitions */}
      <div>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`min-h-[450px] object-cover transition-opacity duration-700 ease-in ${
            isTransitioning ? "opacity-70" : "opacity-100"
          }`}
          priority={currentIndex === 0}
          placeholder="blur"
          quality={85}
        />
      </div>

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
