"use client";

import Link from "next/link";
import { SiteLogo } from "./site-logo";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  // Only routes with a full-bleed photo hero get the transparent header state.
  const hasHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`} data-has-hero={hasHero} role="banner">
        <Link href="/" className="brand" aria-label="Rare Passages home">
          <SiteLogo height={24} />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/portfolio" className="nav-link">Portfolio</Link>
          <Link href="/develop" className="nav-link">Develop</Link>
          <Link href="/standards" className="nav-link">Standards</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
        <a href="/contact" className="header-cta">
          Partner with us
        </a>
        <button className="mobile-menu-toggle" onClick={() => setMobileOpen(true)} aria-label="Open navigation menu">
          Menu
        </button>
      </header>

      {mobileOpen && (
        <>
          <div className="mobile-menu-backdrop" onClick={() => setMobileOpen(false)} />
          <div className="mobile-menu-panel open">
            <div className="mobile-menu-header">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <span className="brand"><SiteLogo height={22} /></span>
              </Link>
              <button className="mobile-close-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">×</button>
            </div>
            <nav className="mobile-nav-links">
              <Link href="/portfolio" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Portfolio</Link>
              <Link href="/develop" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Develop with us</Link>
              <Link href="/standards" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Standards</Link>
              <Link href="/press" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Press</Link>
              <Link href="/about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>
              <a href="https://safariawaits.com" className="mobile-nav-link" target="_blank" rel="noopener noreferrer">Safari Awaits →</a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
