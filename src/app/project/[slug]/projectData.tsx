import car from "@/app/components/projects/assets/car.jpg";
import car2 from "@/app/components/projects/assets/car2.jpg";
import car3 from "@/app/components/projects/assets/car3.jpg";
import bike from "@/app/components/projects/assets/bike.jpg";
import bike2 from "@/app/components/projects/assets/bike2.jpg";
import silvy from "@/app/components/projects/assets/silvy.jpg";
import silvy2 from "@/app/components/projects/assets/silvy2.jpg";
import website from "@/app/components/projects/assets/website.jpg";
import website2 from "@/app/components/projects/assets/website2.jpg";

export type ProjectData = {
  id: string;
  imgs: string[];
  desc: string[];
};

export const projectsData: Record<string, ProjectData> = {
  S15: {
    id: "S15",
    desc: [
      "This is my beloved Nissan S15. From the first time I sat in my mates S15 I instantly fell in love with the rawness and driving experience of these cars and bought one.",
      "I learnt how to work on cars on this project and I've spent countless blood, sweat, tears, and most importantly money to build this.",
      "She currently makes 330kw at the wheels and drives amazing.",
    ],
    imgs: [car.src, car2.src, car3.src],
  },
  Webdev: {
    id: "WEBDEV",
    desc: [
      "I built this website myself to explore the possibilities of beautiful web design and showcase my passions.",
      "I used Next.js, tailwindcss, and Typescript to build this.",
      "It contains features including analytics and mobile responsive design, I plan to continually build this in my spare time",
      "If you want to build something cool together feel free to reach out!",
    ],
    imgs: [website.src, website2.src],
  },
  Zx6r: {
    id: "ZX6R",
    desc: [
      "I started on a Ninja 400 and had been wanting to upgrade for a while.",
      "I test rode a few bikes and from the moment I first sat on this, I was blown away by the crazy riding position and power of the bike.",
      "This bike rides and looks great however it's really uncomfortable and makes me sore everytime.",
    ],
    imgs: [bike.src, bike2.src],
  },
  Silvy: {
    id: "SILVY",
    desc: [
      "I just moved out of my parents place and was living alone for the first time, I really wanted a cat but I wasn't sure if I'd be able to take care of it.",
      "I decided to do it and got Silvy, It`s my first time raising a cat and I think she's grown up to be a fine lady.",
      "Best decision ever!",
    ],
    imgs: [silvy.src, silvy2.src],
  },
};

export const getProjectData = (slug: string): ProjectData => {
  return projectsData[slug];
};
