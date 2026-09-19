"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/app/assets/mrc-white.png";

const links = [
  { label: "Performance", href: "#performance" },
  { label: "Engine Builds", href: "#engine-builds" },
  { label: "Restoration", href: "#restoration" },
  { label: "Contact Us", href: "#contact", cta: true },
];

const linkBase = `imageText block uppercase tracking-wide
                  px-4 py-2
                  rounded-lg cursor-pointer
                  transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg`;

const ctaFill = "bg-[#d65050] hover:bg-[#b73d3d]";
const plainFill = "hover:bg-white/25";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lastScrollY = useRef(0);
  const holdVisibleUntil = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY.current;

      setShowBackToTop(scrollY > 400);

      if (Math.abs(delta) < 6) return;

      lastScrollY.current = scrollY;

      /* A nav click scrolls the page down, which would otherwise read as
         "user is scrolling away" and hide the bar mid jump. */
      if (Date.now() < holdVisibleUntil.current) return;

      setIsHidden(delta > 0 && scrollY > 80);
    };

    /* Any in-page anchor scrolls the document — the hero's "Learn more" as much
       as the nav links — so the bar has to hold visible for those too. */
    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest?.('a[href^="#"]')) return;

      holdVisibleUntil.current = Date.now() + 1200;
      setIsHidden(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onAnchorClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  const isVisible = !isHidden || isOpen;

  const holdVisible = () => {
    holdVisibleUntil.current = Date.now() + 1200;
    setIsHidden(false);
  };

  const onLinkClick = () => {
    holdVisible();
    setIsOpen(false);
  };

  const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    holdVisible();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    /* Drop any section hash left in the address bar so home reads as "/". */
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-accent/90 shadow-sm backdrop-blur
                  transition-all duration-300 ease-in-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-10 py-2 pl-3 pr-6 md:gap-16 md:py-3 md:pl-6 md:pr-12 min-[1100px]:gap-8 min-[1100px]:pr-8 2xl:gap-16 2xl:pr-16">
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

        <ul className="hidden shrink-0 items-center gap-4 whitespace-nowrap min-[1100px]:flex 2xl:gap-6">
          {links.map(({ label, href, cta }) => (
            <li key={href}>
              <a
                href={href}
                onClick={onLinkClick}
                className={`${linkBase} text-sm 2xl:text-base font-medium ${
                  cta ? ctaFill : plainFill
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

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

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/15 bg-accent/90 backdrop-blur transition-[max-height] duration-300 ease-in-out min-[1100px]:hidden ${
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {links.map(({ label, href, cta }) => (
            <li key={href}>
              <a
                href={href}
                onClick={onLinkClick}
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
