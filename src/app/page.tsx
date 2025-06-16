import {HeaderGallery} from "./components/header-gallery";
import { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
    title: 'Brian | Engineer & Maker',
    icons: {
        icon: '/assets/icon.png'
    }
}


export default function Home() {
  return (
    <div>
        <Analytics />
        <main>
        <HeaderGallery/>
      </main>
    </div>
  );
}
