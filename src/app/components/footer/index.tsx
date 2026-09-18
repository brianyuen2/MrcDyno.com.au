"use client";

import React from "react";

const EMAIL = "mrcdyno@iinet.net.au";

const tile = `flex items-center justify-center shrink-0
              h-12 w-12 md:h-14 md:w-14 xl:h-16 xl:w-16
              rounded-[0.25em] text-white
              transition-colors duration-200 ease-in-out`;

const iconSize = "h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8";

const blueFill = "bg-accent hover:bg-accent-dark";

const FACEBOOK_HREF =
  "https://www.facebook.com/pages/MRC-Dyno-Services-and-Performance/191624140849516";

export const Footer = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center
                  py-6 md:py-8
                  bg-gray-800/70`}
    >
      <div className={`flex items-center justify-center gap-2 px-6 md:gap-3`}>
        <a
          href={FACEBOOK_HREF}
          target={"_blank"}
          rel={"noreferrer"}
          aria-label={"MRC Dyno on Facebook"}
          className={`${tile} ${blueFill}`}
        >
          <FacebookIcon />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          aria-label={`Email ${EMAIL}`}
          className={`${tile} ${blueFill}`}
        >
          <EmailIcon />
        </a>
      </div>

      <div className={`pt-6 text-center text-xs opacity-80 md:text-sm`}>
        <div>{"© 2026 MRC Dyno."}</div>
        <div className={`pt-1`}>
          {"Proudly powered by "}
          <a
            href={"https://brianyuen.io"}
            target={"_blank"}
            rel={"noreferrer"}
            className={`underline underline-offset-4 transition-colors duration-200 hover:text-accent-light`}
          >
            {"brianyuen.io"}
          </a>
        </div>
      </div>
    </div>
  );
};

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={iconSize}
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-hidden="true"
  >
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={iconSize}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
