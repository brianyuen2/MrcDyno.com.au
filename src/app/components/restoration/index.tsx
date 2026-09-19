import React from "react";
import { GalleryCarousel } from "@/app/components/image-carousel";
import classic from "./assets/classic.jpg";
import classic2 from "./assets/classic2.jpg";
import classic3 from "./assets/classic3.jpg";
import classic4 from "./assets/classic4.jpg";
import classic5 from "./assets/classic5.jpg";
import classic6 from "./assets/classic6.jpg";

const PARAGRAPHS = [
  "Have a vehicle you love that has seen better days?",
  "We offer complete restoration packages to bring your car back to its former glory.",
];

/* Grouped by car, the front shot leading each pair. */
const IMAGES = [
  {
    src: classic3,
    alt: "Two DeLorean DMC-12s up on the hoists at MRC Dyno",
  },
  {
    src: classic5,
    alt: "The front of a deep maroon Ford Falcon with a supercharger through the bonnet, in the MRC Dyno workshop",
  },
  {
    src: classic2,
    alt: "The same maroon Ford Falcon from the rear, carbon wing and drag wheels, up on the hoist",
  },
  {
    src: classic6,
    alt: "The front of a silver Shelby GT500 Mustang fastback with black stripes at MRC Dyno",
  },
  {
    src: classic4,
    alt: "The same silver Shelby GT500 Mustang from the rear three quarter",
  },
  {
    src: classic,
    alt: "A restored 1969 Chevrolet Camaro SS in deep blue, up on the hoist at MRC Dyno",
  },
];

export const Restoration = () => (
  <div
    id={"restoration"}
    className="mx-auto max-w-7xl px-4 pt-8 pb-6 font-sans sm:px-7 lg:pt-12 lg:pb-12"
  >
    <h2 className="text-center text-2xl font-bold lg:text-5xl xl:text-6xl">
      {"Restoration"}
    </h2>

    <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 text-center text-base md:mt-8 md:gap-6 md:text-xl">
      {PARAGRAPHS.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>

    <GalleryCarousel
      images={IMAGES}
      className="mt-8 lg:mt-12"
      frameClassName="aspect-[16/9]"
      sizes="(min-width: 1280px) 1280px, 100vw"
    />
  </div>
);
