import Link from "next/link";
import { SiteLogo } from "./site-logo";
import { PORTFOLIO_VERTICALS } from "@/data/verticals";

// Corporate footer. No consumer newsletter (that belongs to the brands), no
// fake subscribe. Partner, press and standards routes are first-class here.
export function SiteFooter() {
  const brands = PORTFOLIO_VERTICALS;
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top-grid">
        <div className="footer-col brand-col">
          <Link href="/" className="footer-brand-link" aria-label="Rare Passages home">
            <SiteLogo height={22} />
          </Link>
          <p className="footer-tagline">
            A specialist travel group. We build and operate the brands; the people who run the ground are examined, then represented with the reasoning attached.
          </p>
          <p className="parent-ref">
            Rare Passages is a trading name of <strong className="parent-name">RM Ventures LLC</strong>
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Brands</p>
          <nav className="footer-nav" aria-label="Brands">
            <Link href="/portfolio">All brands</Link>
            {brands.map((v) =>
              v.externalUrl ? (
                <a key={v.id} href={v.externalUrl} target="_blank" rel="noopener noreferrer">{v.name}</a>
              ) : (
                <Link key={v.id} href={`/portfolio/${v.slug}`}>{v.name}</Link>
              )
            )}
          </nav>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Group</p>
          <nav className="footer-nav" aria-label="Group">
            <Link href="/about">About</Link>
            <Link href="/standards">The group standard</Link>
            <Link href="/how-we-work">How we work</Link>
            <Link href="/careers">Careers</Link>
          </nav>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Partners &amp; press</p>
          <nav className="footer-nav" aria-label="Partners and press">
            <Link href="/develop">Develop with us</Link>
            <Link href="/press">Press</Link>
            <Link href="/brand">Brand guidelines</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="copyright">© {new Date().getFullYear()} Rare Passages. All rights reserved.</p>
      </div>
    </footer>
  );
}
