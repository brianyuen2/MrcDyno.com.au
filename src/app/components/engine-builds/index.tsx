import React from "react";
import Image from "next/image";
import { SectionRow } from "@/app/components/section-row";
import engine from "./assets/engine.jpg";
import engine2 from "./assets/engine2.jpg";
import engine3 from "./assets/engine3.jpg";

const PARAGRAPHS = [
  "We have experience building all types of engines, from mild street rebuilds to full race spec.",
  "Whatever you have in mind, we can build it to your exact spec.",
  "Get in touch and we will talk it through.",
];

/* Second row of the grid. Add a third engine photo here and it fills the
   remaining column. */
const ROW_TWO = [
  {
    src: engine,
    alt: "A built Nissan RB26 GT-R engine with HKS V-Cam, Nismo plenum and twin turbos, ready to go in",
  },
  {
    src: engine3,
    alt: "Four V engines on stands at MRC Dyno, including one with carbon fibre covers, waiting on assembly",
  },
];

export const EngineBuilds = () => (
  <div
    id={"engine-builds"}
    className="mx-auto max-w-7xl px-4 pt-8 pb-6 font-sans sm:px-7 lg:pt-12 lg:pb-12"
  >
    <h2 className="text-center text-2xl font-bold lg:text-5xl xl:text-6xl">
      {"Engine Builds"}
    </h2>

    <SectionRow
      image={engine2}
      alt="An RB26 short block on the bench with fresh pistons in the bores and head studs fitted"
      paragraphs={PARAGRAPHS}
      aspect="aspect-[1101/2048]"
      imageClassName="mx-auto max-w-[15rem] sm:max-w-xs"
      noTint
    />

    <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6 lg:mt-12">
      {ROW_TWO.map(({ src, alt }) => (
        <div
          key={alt}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  </div>
);
