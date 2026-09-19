import React from "react";
import Image from "next/image";
import { Section } from "@/app/components/section";
import { SectionRow } from "@/app/components/section-row";
import gtr from "./assets/gtr.jpg";
import dyno from "./assets/dyno2.jpg";
import parts from "./assets/parts.jpg";
import adaptronic from "./assets/brands/adaptronic.jpg";
import arp from "./assets/brands/arp.jpg";
import borgWarner from "./assets/brands/borg-warner.jpg";
import bosch from "./assets/brands/bosh.jpg";
import camtech from "./assets/brands/camtech.jpg";
import dba from "./assets/brands/dba.jpg";
import exedy from "./assets/brands/exedy.jpg";
import garrett from "./assets/brands/garrett.jpg";
import greddy from "./assets/brands/greddy.jpg";
import haltech from "./assets/brands/haltech.jpg";
import hks from "./assets/brands/hks.jpg";
import link from "./assets/brands/link.jpg";
import liquiMoly from "./assets/brands/liqui-molly.jpg";
import msd from "./assets/brands/msd.jpg";
import nismo from "./assets/brands/nismo.jpg";
import nistune from "./assets/brands/nistune.jpg";
import projectU from "./assets/brands/project-u.jpg";
import speedFlow from "./assets/brands/speed-flow.jpg";
import superpro from "./assets/brands/superpro.jpg";
import tomei from "./assets/brands/tomei.jpg";
import turbosmart from "./assets/brands/turbo-smart.jpg";
import vipec from "./assets/brands/vipec.jpg";
import walbro from "./assets/brands/walbro.jpg";
import whiteline from "./assets/brands/whiteline.jpg";

const PARAGRAPHS = [
  "MRC Dyno offers performance upgrades for a wide range of motor vehicles. We deal with all types of vehicles, from street cars to full on race cars.",
  "We have the facilities, the experience and the equipment to help achieve your goals.",
];

const DYNO_TUNING = [
  "Chasing more power, or just want to know what your car really makes? That is what the dyno is for.",
  "We tune factory ECUs and many aftermarket ECUs including Nistune, Link, Haltech, Chip It, DP Chip and Steinbauer, across petrol and diesel.",
];

const PERFORMANCE_UPGRADES = [
  "Let MRC Dyno take your ride to the next level with a performance upgrade.",
  "We work on brake upgrades, exhaust systems, intercoolers, transmissions, handling and suspension, engine conversions, engine builds and repairs.",
  "We can also source genuine parts from many manufacturers."
];

const BRANDS = [
  { name: "Adaptronic", logo: adaptronic },
  { name: "ARP", logo: arp },
  { name: "Borg Warner", logo: borgWarner },
  { name: "Bosch", logo: bosch },
  { name: "Camtech", logo: camtech },
  { name: "DBA", logo: dba },
  { name: "Exedy", logo: exedy },
  { name: "Garrett", logo: garrett },
  { name: "Greddy", logo: greddy },
  { name: "Haltech", logo: haltech },
  { name: "HKS", logo: hks },
  { name: "Link", logo: link },
  { name: "Liqui Moly", logo: liquiMoly },
  { name: "MSD", logo: msd },
  { name: "Nismo", logo: nismo },
  { name: "Nistune", logo: nistune },
  { name: "Project U", logo: projectU },
  { name: "Speed Flow", logo: speedFlow },
  { name: "Superpro", logo: superpro },
  { name: "Tomei", logo: tomei },
  { name: "Turbosmart", logo: turbosmart },
  { name: "Vipec", logo: vipec },
  { name: "Walbro", logo: walbro },
  { name: "Whiteline", logo: whiteline },
];

export const Performance = () => (
  <Section id="performance" title="Performance">

    <SectionRow
      title="At MRC Dyno we know performance."
      titleAs="h2"
      image={gtr}
      alt="Nissan Skyline R32 GT-Rs in the MRC Dyno workshop, one raised on the hoist"
      paragraphs={PARAGRAPHS}
    />

    <SectionRow
      title="Dyno Tuning"
      image={dyno}
      alt="A white Nissan Silvia S15 strapped to the dyno at MRC Dyno, cooling fan in front"
      paragraphs={DYNO_TUNING}
      imageFirst
    />

    <SectionRow
      title="Performance Upgrades"
      image={parts}
      alt="A Mantic performance clutch kit and flywheel ready to be fitted at MRC Dyno"
      paragraphs={PERFORMANCE_UPGRADES}
      noTint
    />

    <ul className="mt-6 grid grid-cols-6 gap-1 md:mt-8 md:grid-cols-8 md:gap-3 lg:mt-12">
      {BRANDS.map(({ name, logo }) => (
        <li
          key={name}
          className="relative aspect-[3/2] rounded-lg bg-white"
        >
          <Image
            src={logo}
            alt={name}
            fill
            sizes="13vw"
            className="object-contain p-0.5 md:p-1"
          />
        </li>
      ))}
    </ul>
  </Section>
);

