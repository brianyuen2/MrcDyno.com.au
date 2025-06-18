"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.jpg";
import bike1 from "./assets/bike1.jpg";

interface GalleryProps {
  autoPlayInterval?: number;
  className?: string;
}

export const Gallery = (props: GalleryProps) => {
  const { autoPlayInterval = 5000, className } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [car1, bike1, car2];
  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange((currentIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, images.length, currentIndex]);

  const handleImageChange = (newIndex: number) => {
    setIsTransitioning(true);

    // Wait for fade out, then update current index
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 700); // Match this with CSS transition duration
  };

  const goToSlide = (index: number) => {
    handleImageChange(index);
  };

  return (
    <div className={`relative  ${className}`}>
      {/* Main Image */}
      <div>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`min-h-[450px] object-cover  transition-opacity duration-700 ease-in ${
            isTransitioning ? "opacity-70" : "opacity-100"
          }`}
          priority
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
