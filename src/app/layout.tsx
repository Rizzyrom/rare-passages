import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rare Passages | Global Portfolio Brand for Luxury Travel Curators",
  description: "Rare Passages is the parent portfolio authority for world-class specialist travel brands, including Safari Awaits and Expedition Maritime. Uncompromising vetting, private concessions, and regenerative conservation.",
  keywords: [
    "Rare Passages",
    "Luxury Travel Portfolio",
    "Safari Awaits",
    "Expedition Cruises",
    "African Safaris",
    "Polar Expeditions",
    "Private Island Sanctuaries",
    "Bespoke Travel Curator"
  ],
  authors: [{ name: "Rare Passages Portfolio Authority" }],
  openGraph: {
    title: "Rare Passages | Parent Portfolio Brand for Luxury Travel",
    description: "The trust anchor and quality curator behind Safari Awaits and Expedition Maritime.",
    url: "https://rarepassages.com",
    siteName: "Rare Passages",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-[#0A1628] text-[#F7F2E8] min-h-screen flex flex-col antialiased selection:bg-[#C8A44D] selection:text-[#0A1628]">
        <SiteHeader />
        <main className="flex-grow pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
