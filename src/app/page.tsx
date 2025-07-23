import { Metadata } from "next";
import { Projects } from "@/app/components/projects";
import { HeaderGallery } from "@/app/components/header-gallery";
import { About } from "@/app/components/about";

export const metadata: Metadata = {
  title: "Brian | Engineer & Maker",
  icons: {
    icon: "/assets/icon.jpg",
  },
};

export default function Home() {
  return (
    <div>
      <HeaderGallery />
      <Projects />
      <About />
    </div>
  );
}
