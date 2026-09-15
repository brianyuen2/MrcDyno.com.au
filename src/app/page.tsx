import { Metadata } from "next";
import { HeaderGallery } from "@/app/components/header-gallery";
import { About } from "@/app/components/about";

export const metadata: Metadata = {
  title: "MRC Dyno - Services & Performance",
  icons: {
    icon: "/assets/icon.jpg",
  },
};

export default function Home() {
  return (
    <div>
      <HeaderGallery />
      <About />
    </div>
  );
}
