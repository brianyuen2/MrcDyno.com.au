import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Projects } from "@/app/components/projects";
import { HeaderGallery } from "@/app/components/header-gallery";

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
