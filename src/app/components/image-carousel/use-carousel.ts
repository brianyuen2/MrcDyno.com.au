"use client";

import { useCallback, useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

/* Slide state shared by both carousels.
   swapDelayMs > 0 gives the hero's behaviour: fade the single image down, wait,
   then swap the source. 0 changes the index immediately, which is what the
   gallery wants so a click on an arrow responds at once and CSS crossfades the
   stacked images. */
export const useCarousel = (options: {
  length: number;
  autoPlayInterval?: number;
  swapDelayMs?: number;
}) => {
  const { length, autoPlayInterval = 0, swapDelayMs = 0 } = options;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (newIndex: number) => {
      if (!swapDelayMs) {
        setCurrentIndex(newIndex);
        return;
      }

      if (isTransitioning) return;

      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsTransitioning(false);
      }, swapDelayMs);
    },
    [isTransitioning, swapDelayMs],
  );

  const next = useCallback(
    () => goTo((currentIndex + 1) % length),
    [currentIndex, goTo, length],
  );

  const previous = useCallback(
    () => goTo((currentIndex - 1 + length) % length),
    [currentIndex, goTo, length],
  );

  useEffect(() => {
    if (!autoPlayInterval) return;

    const interval = setInterval(next, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, next]);

  return { currentIndex, isTransitioning, goTo, next, previous };
};
