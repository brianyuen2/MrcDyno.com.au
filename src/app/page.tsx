import {HeaderGallery} from "./components/header-gallery";
import { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
    title: 'Brian | Engineer & Maker',
    icons: {
        icon: '/assets/icon.png'
    }
}


export default function Home() {
  return (
    <div>
        <GoogleTagManager gtmId="GTM-MPLTMJ2G" />
        <main>
        <HeaderGallery/>
      </main>
    </div>
  );
}
