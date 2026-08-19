import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealInit } from "@/components/RevealInit";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display-loaded", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const sans = Manrope({ variable: "--font-sans-loaded", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rarepassages.com"),
  title: {
    default: "Rare Passages, Portfolio of Specialist High-Ticket Travel Brands",
    template: "%s | Rare Passages",
  },
  description:
    "A group of specialist travel brands — safaris, expedition voyages, private islands, alpine retreats and grand rail — each vetted, each matched, each built for the experience-driven traveler.",
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

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <RevealInit />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
