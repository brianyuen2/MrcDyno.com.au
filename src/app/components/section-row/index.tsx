import React from "react";
import Image, { StaticImageData } from "next/image";

export const SectionRow = (props: {
  title?: string;
  titleAs?: "h2" | "h3";
  image: StaticImageData;
  alt: string;
  paragraphs: string[];
  imageFirst?: boolean;
  aspect?: string;
  noTint?: boolean;
  fit?: "cover" | "contain";
  imageClassName?: string;
}) => {
  const {
    title,
    titleAs = "h3",
    image,
    alt,
    paragraphs,
    imageFirst,
    aspect = "aspect-[4/3]",
    noTint,
    fit = "cover",
    imageClassName = "",
  } = props;
  const Heading = titleAs;

  return (
    <div className="mt-8 grid items-center gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-12">
      <div className={`order-1 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
        {title && (
          <Heading className="pb-3 text-xl font-bold md:pb-5 md:text-3xl">
            {title}
          </Heading>
        )}
        <div className="flex flex-col gap-4 text-base md:gap-6 md:text-xl">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div
        className={`relative w-full overflow-hidden rounded-2xl ${aspect} ${imageClassName}
                    order-2 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          placeholder="blur"
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
        {!noTint && <div className="absolute inset-0 bg-black/15" />}
      </div>
    </div>
  );
};
