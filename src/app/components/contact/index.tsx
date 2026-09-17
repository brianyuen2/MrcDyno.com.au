import React from "react";

const PHONE = "(02) 9634 5399";
const PHONE_HREF = "tel:+61296345399";
const EMAIL = "mrcdyno@iinet.net.au";
const ADDRESS_LINES = ["Unit 1, 20 Tucks Rd", "Seven Hills NSW 2147"];

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.298815130807" +
  "!2d150.95361068088116!3d-33.77878090998942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768" +
  "!4f13.1!3m3!1m2!1s0x6b12a27f49f623b3%3A0xb060faad517c7cfa" +
  "!2s1%2F20+Tucks+Rd%2C+Seven+Hills+NSW+2147!5e0!3m2!1sen!2sau!4v1550808359339";

const DIRECTIONS_HREF =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Unit 1, 20 Tucks Rd, Seven Hills NSW 2147");

const OPENING_HOURS = [
  { days: "Monday - Friday", hours: "7:00am – 5:30pm" },
  { days: "Saturday", hours: "By appointment" },
];

export const Contact = () => (
  <div
    id={"contact"}
    className="mx-auto max-w-7xl px-4 pt-8 pb-6 font-sans sm:px-7 lg:pt-12 lg:pb-12"
  >
    <div className="rounded-2xl border border-white/10 bg-muted px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <h2 className="text-center text-2xl font-bold lg:text-5xl xl:text-6xl">
        {"Contact Us"}
      </h2>

      <div className="mx-auto mt-8 grid max-w-6xl gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col gap-4 text-base md:gap-8 md:text-xl">
        <Detail label="Workshop">
          <address className="not-italic">
            {ADDRESS_LINES.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
          <a
            href={DIRECTIONS_HREF}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block underline underline-offset-4
                       transition-colors duration-200 hover:text-accent-light"
          >
            {"Get directions"}
          </a>
        </Detail>

        <Detail label="Phone">
          <a
            href={PHONE_HREF}
            className="transition-colors duration-200 hover:text-accent-light"
          >
            {PHONE}
          </a>
        </Detail>

        <Detail label="Email">
          <a
            href={`mailto:${EMAIL}`}
            className="break-all transition-colors duration-200 hover:text-accent-light"
          >
            {EMAIL}
          </a>
        </Detail>

        <Detail label="Opening hours">
          <dl>
            {OPENING_HOURS.map(({ days, hours }) => (
              <div key={days} className="flex flex-wrap gap-x-3">
                <dt className="min-w-[10rem]">{days}</dt>
                <dd>{hours}</dd>
              </div>
            ))}
          </dl>
        </Detail>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-[16/9] lg:aspect-auto">
        <iframe
          src={MAP_EMBED}
          title="MRC Dyno, Unit 1, 20 Tucks Rd, Seven Hills NSW 2147"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
        </div>
      </div>
    </div>
  </div>
);

const Detail = (props: { label: string; children: React.ReactNode }) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 md:px-6 md:py-5">
    <div className="text-xs uppercase tracking-wide opacity-60 md:text-base">
      {props.label}
    </div>
    <div className="pt-1 md:pt-2">{props.children}</div>
  </div>
);
