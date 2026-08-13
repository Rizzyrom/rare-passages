import Link from "next/link";
import { PORTFOLIO_VERTICALS } from "@/data/verticals";
import { photos } from "@/data/images";

export const metadata = {
  title: "Full Portfolio Directory",
  description: "Every specialist travel vertical in the Rare Passages portfolio: safaris, expedition cruises, private islands, alpine retreats, and grand rail journeys.",
};

export default function PortfolioPage() {
  const active = PORTFOLIO_VERTICALS.filter((v) => v.status === "active");
  const horizon = PORTFOLIO_VERTICALS.filter((v) => v.status === "horizon");

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <span className="eyebrow">Full Portfolio Directory</span>
        <h1>Every passage, curated.</h1>
        <p className="page-hero__text">
          Rare Passages houses a portfolio of specialist travel verticals, each an autonomous brand with its own domain expertise, vetted supplier network, and conservation mandate.
        </p>
      </section>

      {/* ACTIVE VERTICALS */}
      <section className="section">
        <div className="section-header">
          <span className="eyebrow">Active Verticals</span>
          <h2 className="section-title">Live and booking now</h2>
        </div>
        <div className="destination-list" style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          {active.map((v, i) => {
            const photo = photos.verticals[v.slug as keyof typeof photos.verticals];
            return (
              <div key={v.id} className="dest-strip" style={{ marginBottom: "var(--space-lg)" }}>
                <div className="dest-strip__image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo?.card || photos.hero.mobile} alt={v.name} />
                </div>
                <div className="dest-strip__content">
                  <span className="dest-strip__number">0{i + 1}</span>
                  <h3 className="dest-strip__name">{v.name}</h3>
                  <span className="dest-strip__tagline">{v.tagline}</span>
                  <p className="dest-strip__desc">{v.shortDescription}</p>
                  <div className="dest-strip__meta">
                    <div className="dest-strip__meta-item">
                      <span className="dest-strip__meta-label">Price Range</span>
                      <span className="dest-strip__meta-value">{v.priceGuide.split("from ")[1] || v.priceGuide}</span>
                    </div>
                    <div className="dest-strip__meta-item">
                      <span className="dest-strip__meta-label">Group Size</span>
                      <span className="dest-strip__meta-value">{v.guestCapacity}</span>
                    </div>
                  </div>
                  <div className="actions">
                    <Link href={`/portfolio/${v.slug}`} className="text-link">
                      Learn more →
                    </Link>
                    {v.externalUrl && (
                      <a href={v.externalUrl} className="text-link" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "24px" }}>
                        Visit {v.name} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HORIZON VERTICALS */}
      <section className="section section--paper">
        <div className="section-header">
          <span className="eyebrow">Horizon Verticals — 2027 Pipeline</span>
          <h2 className="section-title">In development</h2>
        </div>
        <div className="highlights-grid">
          {horizon.map((v) => (
            <Link key={v.id} href={`/portfolio/${v.slug}`} className="highlight-card" style={{ textDecoration: "none", display: "block" }}>
              <span className="highlight-card__number" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>{v.statusLabel}</span>
              <h3 className="pillar-card__title" style={{ marginBottom: "8px" }}>{v.name}</h3>
              <p className="highlight-card__text" style={{ marginBottom: "16px" }}>{v.shortDescription}</p>
              <span className="detail-meta-value" style={{ color: "var(--clay)" }}>{v.priceGuide}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="vertical-cta">
          <h2 className="vertical-cta__title">Ready to explore a passage?</h2>
          <p className="vertical-cta__desc">
            Each vertical operates independently with its own concierge team. Tell us what you're looking for and we'll point you to the right specialist.
          </p>
          <Link href="/contact" className="vertical-cta__btn">Start the conversation →</Link>
        </div>
      </section>
    </>
  );
}
