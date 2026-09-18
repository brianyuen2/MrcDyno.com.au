import React from "react";
import { SectionRow } from "@/app/components/section-row";
import classic from "./assets/classic.jpg";

const PARAGRAPHS: string[] = [];

export const Restoration = () => (
  <div
    id={"restoration"}
    className="mx-auto max-w-7xl px-4 pt-8 pb-6 font-sans sm:px-7 lg:pt-12 lg:pb-12"
  >
    <h2 className="text-center text-2xl font-bold lg:text-5xl xl:text-6xl">
      {"Restoration"}
    </h2>

    <SectionRow
      image={classic}
      alt="A restored 1969 Chevrolet Camaro SS in deep blue, up on the hoist at MRC Dyno"
      paragraphs={PARAGRAPHS}
      imageFirst
      noTint
    />
  </div>
);
