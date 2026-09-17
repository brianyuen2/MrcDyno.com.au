"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/app/assets/mrc.png";

/* Single page, so every link is an in-page anchor. The smooth scroll comes from
   `scroll-behavior: smooth` in globals.css — no click handler needed. */
const links = [
  { label: "Performance", href: "#performance" },
  { label: "Engine Builds", href: "#engine-builds" },
  { label: "Restoration", href: "#restoration" },
  { label: "Contact Us", href: "#contact", cta: true },
];

// Shared button shape; the hover fill differs between the plain links and the
// blue call to action, so it is applied per variant rather than here.
const linkBase = `imageText block uppercase tracking-wide
                  px-4 py-2
                  rounded-lg cursor-pointer
                  transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg`;

const ctaFill = "bg-accent hover:bg-accent-dark";
const plainFill = "hover:bg-white/25";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lastScrollY = useRef(0);

  // Fade out on the way down, fade back in as soon as the user scrolls up.
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY.current;

      // Set before the jitter guard below, so it still settles correctly when
      // the user creeps past the threshold a pixel at a time.
      setShowBackToTop(scrollY > 400);

      // Ignore sub-pixel jitter and rubber-banding past the top.
      if (Math.abs(delta) < 6) return;

      lastScrollY.current = scrollY;
      setIsHidden(delta > 0 && scrollY > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the bar up while the mobile menu is open.
  const isVisible = !isHidden || isOpen;

  /* Scroll to the top without letting the browser append #home to the URL. The
     href stays put so the link still works with JS disabled. */
  const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#7a7a7a]/70 shadow-sm backdrop-blur
                  transition-all duration-300 ease-in-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-10 py-4 pl-3 pr-6 md:gap-16 md:py-5 md:pl-6 md:pr-12 min-[1100px]:gap-8 min-[1100px]:pr-8 2xl:gap-16 2xl:pr-16">
        <a
          href="#home"
          onClick={scrollToTop}
          aria-label="MRC Dyno Services & Performance — back to top"
          className="flex"
        >
          <Image
            src={logo}
            alt="MRC Dyno Services & Performance"
            className="block h-12 w-auto sm:h-14 xl:h-16 2xl:h-20"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden shrink-0 items-center gap-4 whitespace-nowrap min-[1100px]:flex 2xl:gap-6">
          {links.map(({ label, href, cta }) => (
            <li key={href}>
              <a
                href={href}
                className={`${linkBase} text-sm 2xl:text-base font-medium ${
                  cta ? ctaFill : plainFill
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="imageText cursor-pointer p-2 transition-colors duration-200 hover:text-accent-light min-[1100px]:hidden"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/15 bg-[#7a7a7a]/90 backdrop-blur transition-[max-height] duration-300 ease-in-out min-[1100px]:hidden ${
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {links.map(({ label, href, cta }) => (
            <li key={href}>
              <a
                href={href}
                /* Hash links do not change the route, so the menu has to be
                   closed explicitly or it would stay open over the target. */
                onClick={() => setIsOpen(false)}
                className={`${linkBase} text-base text-center my-1 ${
                  cta ? ctaFill : plainFill
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>

      {/* Floating back-to-top. Lives here with the other scroll state, but
          anchors to the bottom-right of the viewport rather than the bar. */}
      <a
        href="#home"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-3 right-3 z-40 flex h-10 w-10 items-center
                    justify-center rounded-[0.25em] bg-[#d65050]/35 text-white
                    shadow-lg transition-all duration-300 ease-in-out
                    hover:bg-[#d65050] md:bottom-4 md:right-4 md:h-12 md:w-12 ${
                      showBackToTop
                        ? "opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    }`}
      >
        <ArrowUpIcon />
      </a>
    </>
  );
};

const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 md:h-7 md:w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-hidden="true"
  >
    <path d="M12 20V4" />
    <path d="m5 11 7-7 7 7" />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
