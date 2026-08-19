import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_VERTICALS } from "@/data/verticals";
import { photos } from "@/data/images";

export const metadata = {
  title: "Full Portfolio Directory",
  description: "The brands of the Rare Passages group: Safari Awaits, active; Expedition Maritime, Private Islands, Alpine Retreats and Grand Rail Journeys, in development.",
};

export default function PortfolioPage() {
  const active = PORTFOLIO_VERTICALS.filter((v) => v.status === "active");
  // Two non-active tiers, shown together but labelled by their own statusLabel:
  // "development" (being built now) and "horizon" (planned).
  const horizon = PORTFOLIO_VERTICALS.filter((v) => v.status === "development" || v.status === "horizon");

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <span className="eyebrow">Full Portfolio Directory</span>
        <h1>Every passage, examined.</h1>
        <p className="page-hero__text">
          Rare Passages houses a portfolio of specialist travel verticals, each an autonomous brand with its own domain expertise, examined against one operating standard.
        </p>
      </section>

      {/* SECTION LABEL */}
      <div className="section-header" style={{ paddingTop: "var(--space-xl)" }}>
        <span className="eyebrow">Active</span>
        <h2 className="section-title">Operating today</h2>
      </div>

      {/* ACTIVE VERTICALS, full-bleed strips like home page */}
      {active.map((v, i) => {
        const photo = photos.verticals[v.slug as keyof typeof photos.verticals];
        return (
          <section key={v.id} className={`dest-strip ${i % 2 === 1 ? "dest-strip--reverse" : ""}`}>
            <div className="dest-strip__image">
              { }
              <Image src={photo?.card || photos.hero.mobile} alt={v.name} fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="dest-strip__content">
              <span className="dest-strip__number">0{i + 1}</span>
              <h3 className="dest-strip__name">{v.name}</h3>
              <span className="dest-strip__tagline">{v.tagline}</span>
              <p className="dest-strip__desc">{v.shortDescription}</p>
              <div className="dest-strip__meta">
                <div className="dest-strip__meta-item">
                  <span className="dest-strip__meta-label">Status</span>
                  <span className="dest-strip__meta-value">{v.statusLabel}</span>
                </div>
                <div className="dest-strip__meta-item">
                  <span className="dest-strip__meta-label">Group Size</span>
                  <span className="dest-strip__meta-value">{v.guestCapacity}</span>
                </div>
              </div>
              <div className="actions">
                <Link href={`/portfolio/${v.slug}`} className="text-link">
                  Read the {v.name} brief →
                </Link>
                {v.externalUrl && (
                  <a href={v.externalUrl} className="text-link" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "24px" }}>
                    Visit {v.name} →
                  </a>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* HORIZON VERTICALS */}
      <section className="section section--paper">
        <div className="section-header">
          <span className="eyebrow">In development and horizon</span>
          <h2 className="section-title">The next brands.</h2>
        </div>
        <div className="highlights-grid">
          {horizon.map((v) => (
            <Link key={v.id} href={`/portfolio/${v.slug}`} className="highlight-card" style={{ textDecoration: "none", display: "block" }}>
              <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px", color: "var(--clay)", fontWeight: 600 }}>{v.statusLabel}</span>
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
          <h2 className="vertical-cta__title">Operators, founders, institutions.</h2>
          <p className="vertical-cta__desc">
            Each vertical operates independently under one shared standard. If you run something properly and want it represented properly, see how a partnership works.
          </p>
          <Link href="/develop" className="vertical-cta__btn">Develop with us →</Link>
        </div>
      </section>
    </>
  );
}
