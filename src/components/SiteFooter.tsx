"use client";

import Link from "next/link";
import { SiteLogo } from "./site-logo";
import { useState, FormEvent } from "react";
import { PORTFOLIO_VERTICALS } from "@/data/verticals";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top-grid">
        <div className="footer-col brand-col">
          <Link href="/" className="footer-brand-link" aria-label="Rare Passages home">
            <SiteLogo height={22} />
          </Link>
          <p className="footer-tagline">
            A portfolio of specialist travel brands, safaris, expedition cruises, private islands, alpine retreats, and grand rail journeys. Each vetted. Each matched. Each built for the experience-driven traveler.
          </p>
          <p className="parent-ref">
            Operating under <strong className="parent-name">RM Ventures LLC</strong>
          </p>

          <div className="newsletter-block">
            <p className="newsletter-title">Curated Dispatch</p>
            <p className="newsletter-desc">
              Seasonal travel intelligence, new vertical launches, and conservation updates.
            </p>
            {subscribed ? (
              <div className="newsletter-success">You're subscribed.</div>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form" aria-label="Newsletter signup">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Newsletter email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Portfolio</p>
          <nav className="footer-nav">
            <Link href="/portfolio">All Verticals</Link>
            {PORTFOLIO_VERTICALS.map((v) => (
              v.externalUrl ? (
                <a key={v.id} href={v.externalUrl} target="_blank" rel="noopener noreferrer">{v.name}</a>
              ) : (
                <Link key={v.id} href={`/portfolio/${v.slug}`}>{v.name}</Link>
              )
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Company</p>
          <nav className="footer-nav">
            <Link href="/about">About</Link>
            <Link href="/how-we-work">How We Work</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Connect</p>
          <nav className="footer-nav">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="copyright">© {new Date().getFullYear()} Rare Passages. All rights reserved.</p>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
