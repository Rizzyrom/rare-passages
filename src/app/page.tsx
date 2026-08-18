import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_VERTICALS } from "@/data/verticals";
import { photos } from "@/data/images";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rare Passages",
    url: "https://rarepassages.com",
    description: "Parent portfolio of specialist high-ticket travel brands, safaris, expedition cruises, private islands, alpine retreats, and grand rail journeys.",
    brand: PORTFOLIO_VERTICALS.map((v) => ({
      "@type": "Brand",
      name: v.name,
      url: v.externalUrl || `https://rarepassages.com/portfolio/${v.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image className="hero__image" src={photos.hero.desktop} alt="Dramatic remote landscape" fill priority sizes="100vw" />
        <div className="hero__gradient" />
        <div className="hero__content">
          <span className="hero__eyebrow">A portfolio of travel worth doing</span>
          <h1 className="hero__title">Rare Passages.</h1>
          <p className="hero__subtitle">
            Five specialist travel brands under one standard. Safaris, expedition cruises, private islands, alpine retreats, and grand rail journeys, each vetted, each matched, each built for travelers who want the real thing.
          </p>
        </div>
        <div className="hero__scroll">Scroll</div>
      </section>

      {/* OPENING STATEMENT */}
      <section className="opening">
        <p className="opening__text">
          We don't aggregate mass tours. We don't sell what we own. <em>Each vertical in our portfolio operates as a specialist brand with its own research, its own operators, and its own expertise, governed by one shared standard:</em> the traveler's trip comes before the operator's inventory, the platform's margin, or the affiliate's payout.
        </p>
      </section>

      {/* VERTICAL STRIPS, Full-bleed alternating, one per vertical */}
      {PORTFOLIO_VERTICALS.map((v, i) => {
        const photo = photos.verticals[v.slug as keyof typeof photos.verticals];
        const isActive = v.status === "active";
        return (
          <section key={v.id} className={`dest-strip ${i % 2 === 1 ? "dest-strip--reverse" : ""}`}>
            <div className="dest-strip__image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image src={photo?.card || photos.hero.mobile} alt={v.name} fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="dest-strip__content">
              <span className="dest-strip__number">0{i + 1}</span>
              <h2 className="dest-strip__name">{v.name}</h2>
              <span className="dest-strip__tagline">{v.tagline}</span>
              <p className="dest-strip__desc">{v.shortDescription}</p>
              <div className="dest-strip__meta">
                <div className="dest-strip__meta-item">
                  <span className="dest-strip__meta-label">Status</span>
                  <span className="dest-strip__meta-value">
                    {isActive ? "Active" : "In Development"}
                  </span>
                </div>
                <div className="dest-strip__meta-item">
                  <span className="dest-strip__meta-label">Price Range</span>
                  <span className="dest-strip__meta-value">{v.priceGuide.split("from ")[1] || v.priceGuide}</span>
                </div>
              </div>
              <div className="actions">
                {v.externalUrl ? (
                  <a href={v.externalUrl} className="text-link" target="_blank" rel="noopener noreferrer">
                    Visit {v.name} →
                  </a>
                ) : (
                  <Link href={`/portfolio/${v.slug}`} className="text-link">
                    Learn more →
                  </Link>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* THE APPROACH */}
      <section className="approach">
        <div className="approach__left">
          <span className="eyebrow">The Standard</span>
          <h2>One portfolio.<br />One standard.</h2>
        </div>
        <div className="approach__right">
          <p>
            Most travel groups are holding companies, they acquire brands, cut costs, and push cross-selling. We're not that.
          </p>
          <p className="approach__pullquote">
            "Every vertical shares the same DNA: independent research, transparent pricing, zero commission bias, and a 42-point operator vetting process."
          </p>
          <p>
            Whether you're tracking gorillas in Rwanda or ice-cruising through the Northwest Passage, the standard doesn't change. We vet every operator for safety, conservation ethics, guest density, and guiding excellence. We disclose every commercial relationship. We show you the full cost before you book.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="/how-we-work" className="text-link">How we vet operators →</Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="stat-item">
          <span className="stat-item__value">5</span>
          <span className="stat-item__label">Specialist Verticals</span>
        </div>
        <div className="stat-item">
          <span className="stat-item__value">42</span>
          <span className="stat-item__label">Point Operator Audit</span>
        </div>
        <div className="stat-item">
          <span className="stat-item__value">2.5%</span>
          <span className="stat-item__label">Conservation Commitment</span>
        </div>
        <div className="stat-item">
          <span className="stat-item__value">0</span>
          <span className="stat-item__label">Direct Markup</span>
        </div>
      </section>

      {/* CONSERVATION COMMITMENT */}
      <section className="featured-guide">
        <div className="featured-guide__image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src={photos.editorial.conservation?.url || photos.hero.mobile} alt="Wildlife conservation" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="featured-guide__content">
          <span className="featured-guide__category">Conservation Commitment</span>
          <h3 className="featured-guide__title">2.5% of every booking goes to conservation.</h3>
          <p className="featured-guide__desc">
            Not a marketing program. A non-negotiable commitment. Every booking across every vertical contributes 2.5% of platform revenue to our Conservation Trust, funding habitat corridors, marine protected areas, and indigenous guide academies. Travel that leaves more than footprints.
          </p>
          <Link href="/about" className="text-link">Read the commitment →</Link>
        </div>
      </section>

      {/* GROWTH & VISION */}
      <section className="growth-section">
        <div className="growth-section__inner">
          <div className="growth-section__header">
            <span className="growth-section__eyebrow">Growth & Vision</span>
            <h2 className="growth-section__title">Built to scale. Built to last. Built to be acquired.</h2>
            <p className="growth-section__subtitle">
              Rare Passages is structured as a portfolio company from day one. Each vertical launches with its own domain, brand identity, and revenue stream, then scales under the parent standard. The endgame is a valuable, acquirable travel portfolio.
            </p>
          </div>

          <div className="growth-timeline">
            <div className="growth-phase">
              <span className="growth-phase__year">2026</span>
              <h3 className="growth-phase__title">Foundation</h3>
              <p className="growth-phase__desc">Safari Awaits launches as the flagship vertical. Host agency credentials secured. Expedition Maritime enters development. Portfolio infrastructure and 42-point vetting framework established.</p>
            </div>
            <div className="growth-phase">
              <span className="growth-phase__year">2027</span>
              <h3 className="growth-phase__title">Vertical Expansion</h3>
              <p className="growth-phase__desc">Coastal & Island Sanctuaries and Expedition Maritime go live. Grand Rail partnerships signed. First multi-vertical family office engagements. Revenue target: $500K annualized.</p>
            </div>
            <div className="growth-phase">
              <span className="growth-phase__year">2028-29</span>
              <h3 className="growth-phase__title">Scale & Optimize</h3>
              <p className="growth-phase__desc">All five verticals operational. International localization (German, Dutch). Recurring family office retainers. Conservation Trust funded at scale. Revenue target: $1.5M-2M annualized.</p>
            </div>
            <div className="growth-phase">
              <span className="growth-phase__year">2030-31</span>
              <h3 className="growth-phase__title">Position for Exit</h3>
              <p className="growth-phase__desc">Portfolio maturity. Demonstrated revenue, repeat clientele, and conservation impact. Position for acquisition by a major travel group, private equity, or family office. Target valuation: $5M-10M+.</p>
            </div>
          </div>

          <div className="revenue-model">
            <div className="revenue-stream">
              <span className="revenue-stream__label">Primary Revenue</span>
              <p className="revenue-stream__value">10-20% Commission</p>
              <p className="revenue-stream__desc">Direct operator commissions on high-ticket bookings through host agency credentials. The core revenue engine across all verticals.</p>
            </div>
            <div className="revenue-stream">
              <span className="revenue-stream__label">Recurring Revenue</span>
              <p className="revenue-stream__value">Family Office Retainers</p>
              <p className="revenue-stream__desc">Annual portfolio management contracts with high-net-worth families for multi-vertical travel planning and coordination.</p>
            </div>
            <div className="revenue-stream">
              <span className="revenue-stream__label">Ancillary Revenue</span>
              <p className="revenue-stream__value">Affiliate & Lead Gen</p>
              <p className="revenue-stream__desc">TourRadar RISE, Travelstride, and Viator affiliate commissions for self-serve bookings and add-on experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image className="final-cta__image" src={photos.sections.ctaBackground} alt="" aria-hidden fill sizes="100vw" />
        <div className="final-cta__overlay" />
        <div className="final-cta__content">
          <h2 className="final-cta__title">Which passage is yours?</h2>
          <p className="final-cta__subtitle">
            Five verticals. One standard. Tell us what you're looking for and we'll point you to the right specialist.
          </p>
          <Link href="/contact" className="final-cta__btn">Start the conversation</Link>
        </div>
      </section>
    </>
  );
}
