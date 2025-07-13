import { ImageProps } from "next/image";
import car from "@/app/components/projects/assets/car.jpg";
import bike from "@/app/components/projects/assets/bike.jpg";
import silvy from "@/app/components/projects/assets/silvy.jpg";
import website from "@/app/components/projects/assets/website.png";

export type ProjectData = {
  id: string;
  imgs: ImageProps[];
  desc: string;
};

export const projectsData: Record<string, ProjectData> = {
  S15: {
    id: "S15",
    desc: "My S15 Silvia build featuring custom modifications, performance upgrades, and aesthetic enhancements. This project showcases automotive engineering and design skills.",
    imgs: [
      {
        src: car,
        alt: "S15 Silvia main view",
        width: 1400,
      },
      // Add more car images here as needed
    ],
  },
  Webdev: {
    id: "WEBDEV",
    desc: "Full-stack web development projects showcasing modern technologies, responsive design, and user experience optimization. Built with React, Next.js, and TypeScript.",
    imgs: [
      {
        src: website,
        alt: "Website project screenshot",
        width: 1400,
      },
      // Add more website images here as needed
    ],
  },
  Zx6r: {
    id: "ZX6R",
    desc: "Kawasaki ZX6R motorcycle project featuring performance modifications, custom parts, and track-focused upgrades. A showcase of mechanical engineering and motorsport passion.",
    imgs: [
      {
        src: bike,
        alt: "ZX6R motorcycle main view",
        width: 1400,
      },
      // Add more bike images here as needed
    ],
  },
  Silvy: {
    id: "SILVY",
    desc: "Another Silvia project with unique modifications and styling. This build focuses on different aspects of automotive customization and performance tuning.",
    imgs: [
      {
        src: silvy,
        alt: "Silvy project main view",
        width: 1400,
      },
      // Add more silvy images here as needed
    ],
  },
};

export const getProjectData = (slug: string): ProjectData | null => {
  return projectsData[slug] || null;
};
