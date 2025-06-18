import { HeaderGallery } from "./components/header-gallery";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Projects } from "@/app/components/projects";

export const metadata: Metadata = {
  title: "Brian | Engineer & Maker",
  icons: {
    icon: "/assets/icon.png",
  },
};

export default function Home() {
  return (
    <div>
      <Analytics />
      <main>
        <HeaderGallery />
        <Projects />
      </main>
    </div>
  );
}
