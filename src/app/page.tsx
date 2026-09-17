import { HeaderGallery } from "@/app/components/header-gallery";
import { Performance } from "@/app/components/performance";
import { Contact } from "@/app/components/contact";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "MRC Dyno Services & Performance",
  url: "https://mrcdyno.com.au",
  telephone: "+61296345399",
  email: "mrcdyno@iinet.net.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 1, 20 Tucks Rd",
    addressLocality: "Seven Hills",
    addressRegion: "NSW",
    postalCode: "2147",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.778781,
    longitude: 150.953611,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:30",
    },
  ],
  areaServed: "Sydney, NSW",
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <HeaderGallery />
      <Performance />
      <Contact />
    </div>
  );
}
