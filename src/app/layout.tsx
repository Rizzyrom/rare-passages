import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rarepassages.com"),
  title: {
    default: "Rare Passages, Portfolio of Specialist High-Ticket Travel Brands",
    template: "%s | Rare Passages",
  },
  description:
    "Five specialist travel brands under one standard. Safaris, expedition cruises, private islands, alpine retreats, and grand rail journeys, each vetted, each matched, each built for the experience-driven traveler.",
  keywords: [
    "luxury travel",
    "safari",
    "expedition cruise",
    "private island",
    "alpine retreat",
    "luxury train",
    "travel portfolio",
    "bespoke travel",
  ],
  openGraph: {
    title: "Rare Passages, Portfolio of Specialist Travel Brands",
    description: "Five specialist travel brands under one standard. Safaris, expedition cruises, private islands, alpine retreats, and grand rail journeys.",
    type: "website",
    url: "https://rarepassages.com",
    siteName: "Rare Passages",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rare Passages, Specialist Travel Portfolio",
    description: "Five brands. One standard. Safaris, expedition cruises, private islands, alpine retreats, grand rail journeys.",
  },
  robots: { index: false, follow: false },
  alternates: { canonical: "https://rarepassages.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
