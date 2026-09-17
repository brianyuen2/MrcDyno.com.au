import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrcdyno.com.au"),
  title: "MRC Dyno | Dyno Tuning, Performance & Engine Builds — Seven Hills",
  description:
    "MRC Dyno Services & Performance in Seven Hills, Sydney. Dyno tuning, " +
    "Nistune specialists, performance upgrades, engine builds and restoration. " +
    "Call (02) 9634 5399.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://mrcdyno.com.au",
    siteName: "MRC Dyno Services & Performance",
    title: "MRC Dyno | Dyno Tuning, Performance & Engine Builds",
    description:
      "Dyno tuning, performance upgrades, engine builds and restoration in " +
      "Seven Hills, Sydney.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
