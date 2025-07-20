import car from "@/app/components/projects/assets/car.jpg";
import car2 from "@/app/components/projects/assets/car2.jpg";
import bike from "@/app/components/projects/assets/bike.jpg";
import bike2 from "@/app/components/projects/assets/bike2.jpg";
import silvy from "@/app/components/projects/assets/silvy.jpg";
import website from "@/app/components/projects/assets/website.png";
import website2 from "@/app/components/projects/assets/website2.png";

export type ProjectData = {
  id: string;
  imgs: string[];
  desc: string;
};

export const projectsData: Record<string, ProjectData> = {
  S15: {
    id: "S15",
    desc: "My S15 Silvia build featuring custom modifications, performance upgrades, and aesthetic enhancements. This project showcases automotive engineering and design skills.",
    imgs: [car.src, car2.src],
  },
  Webdev: {
    id: "WEBDEV",
    desc: "Full-stack web development projects showcasing modern technologies, responsive design, and user experience optimization. Built with React, Next.js, and TypeScript.",
    imgs: [website.src, website2.src],
  },
  Zx6r: {
    id: "ZX6R",
    desc: "Kawasaki ZX6R motorcycle project featuring performance modifications, custom parts, and track-focused upgrades. A showcase of mechanical engineering and motorsport passion.",
    imgs: [bike.src, bike2.src],
  },
  Silvy: {
    id: "SILVY",
    desc: "Another Silvia project with unique modifications and styling. This build focuses on different aspects of automotive customization and performance tuning.",
    imgs: [
      silvy.src,
      // Add more silvy images here as needed
    ],
  },
};

export const getProjectData = (slug: string): ProjectData => {
  return projectsData[slug];
};
