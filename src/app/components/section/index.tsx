import React from "react";

/* Shared page section: the anchor target the navbar scrolls to, the page
   gutters, and the standard heading. Keeping the spacing here means changing it
   once rather than in every section. */
export const Section = (props: {
  id: string;
  title?: string;
  children: React.ReactNode;
}) => (
  <section
    id={props.id}
    className="mx-auto max-w-7xl px-4 pt-8 pb-6 font-sans sm:px-7 lg:pt-12 lg:pb-12"
  >
    {props.title && (
      <h2 className="text-center text-2xl font-bold lg:text-5xl xl:text-6xl">
        {props.title}
      </h2>
    )}
    {props.children}
  </section>
);
