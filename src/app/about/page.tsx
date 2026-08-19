import Link from "next/link";
import { BRAND_PRINCIPLES } from "@/data/verticals";

export const metadata = {
  title: "About Rare Passages",
  description: "Discover the Rare Passages parent brand philosophy, operator vetting standards, conservation trust, and the business model behind Safari Awaits and Expedition Maritime.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <span className="eyebrow">Parent Brand Architecture</span>
        <h1>The parent brand for uncompromised travel.</h1>
        <p className="page-hero__text">
          Rare Passages was founded on a singular premise: world-class travel requires dedicated domain specialists, unified by institutional quality standards and total discretion.
        </p>
      </section>

      {/* BRAND STORY */}
      <section className="section section--narrow">
        <div className="detail-overview">
          <span className="eyebrow">Our Genesis & Vision</span>
          <h2 className="section-title" style={{ marginBottom: "var(--space-md)" }}>Restoring mastery to modern travel curation</h2>
          <p className="detail-overview__text" style={{ fontSize: "1.05rem" }}>
            In an industry increasingly dominated by mass booking engines and generic travel agency consortia, discerning travelers faced a dilemma: entrust complex wild journeys to generalists, or coordinate across disparate specialist operators with no unified quality control.
          </p>
          <p className="detail-overview__text" style={{ fontSize: "1.05rem" }}>
            Rare Passages was built to eliminate this friction. As the parent portfolio brand, we conceive, launch, and govern dedicated specialist verticals, each focused intensely on its respective ecosystem: Safari Awaits for private African concession safaris, Expedition Maritime for polar and oceanic voyages, and a pipeline of horizon verticals covering coastal sanctuaries, alpine retreats, and grand rail journeys.
          </p>
          <div className="highlight-card" style={{ marginTop: "var(--space-lg)" }}>
            <span className="highlight-card__number" style={{ fontSize: "1.1rem" }}>The Guarantee</span>
            <p className="highlight-card__text" style={{ marginTop: "8px" }}>
              We never operate as a pass-through booking middleman. Every vertical in our portfolio must hold direct relationships with conservation land owners, ship owners, and flight charter logistics companies. Discreet family office and personal NDAs standard.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND PRINCIPLES */}
      <section className="section section--paper">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="eyebrow">Governance & Tenets</span>
          <h2 className="section-title">The 5 Rare Passages principles</h2>
        </div>
        <div className="pillars-grid">
          {BRAND_PRINCIPLES.map((principle) => (
            <div key={principle.number} className="pillar-card">
              <span className="highlight-card__number">{principle.number}</span>
              <h3 className="pillar-card__title" style={{ marginTop: "8px" }}>{principle.title}</h3>
              <p className="pillar-card__desc">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="section">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="eyebrow">How We Make Money</span>
          <h2 className="section-title">A transparent revenue architecture</h2>
        </div>
        <div className="pillars-grid">
          <div className="pillar-card">
            <span className="highlight-card__number">01</span>
            <h3 className="pillar-card__title" style={{ marginTop: "8px" }}>Operator Commissions</h3>
            <p className="pillar-card__desc">
              We are compensated by the operators we place business with, on terms that never change what a traveler pays or which recommendation they receive. The full commercial disclosure sits with each consumer brand.
            </p>
          </div>
          <div className="pillar-card">
            <span className="highlight-card__number">02</span>
            <h3 className="pillar-card__title" style={{ marginTop: "8px" }}>Family Office Retainers</h3>
            <p className="pillar-card__desc">
              High-net-worth families and private offices can engage Rare Passages on an annual retainer basis for multi-vertical portfolio management. This provides predictable recurring revenue and deep client relationships.
            </p>
          </div>
          <div className="pillar-card">
            <span className="highlight-card__number">03</span>
            <h3 className="pillar-card__title" style={{ marginTop: "8px" }}>Affiliate & Lead Generation</h3>
            <p className="pillar-card__desc">
              Where a brand offers self-serve booking, the commercial relationship is disclosed on that brand’s own site, in plain language, at the point of decision.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO VALUE */}
      <section className="section section--paper">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="eyebrow">Why This Portfolio Has Value</span>
          <h2 className="section-title">Built as an acquirable asset</h2>
        </div>
        <div className="pillars-grid">
          <div className="pillar-card">
            <h3 className="pillar-card__title">Brand Architecture</h3>
            <p className="pillar-card__desc">
              Each vertical operates as a standalone brand with its own domain, identity, and audience. This means verticals can be sold individually or as a portfolio. The parent brand provides the governance layer that makes the whole worth more than the sum of its parts.
            </p>
          </div>
          <div className="pillar-card">
            <h3 className="pillar-card__title">Low Overhead, High Margin</h3>
            <p className="pillar-card__desc">
              No physical offices, no inventory, no warehousing. The business is built on relationships, research, and digital infrastructure. Commission revenue on a single luxury safari booking can exceed $5,000.
            </p>
          </div>
          <div className="pillar-card">
            <h3 className="pillar-card__title">Defensible Moats</h3>
            <p className="pillar-card__desc">
              The published vetting standard, operator relationships, host agency credentials, and conservation trust create barriers to entry that take years to replicate.
            </p>
          </div>
          <div className="pillar-card">
            <h3 className="pillar-card__title">Recurring Revenue Potential</h3>
            <p className="pillar-card__desc">
              Family office retainers and repeat clientele create predictable revenue streams that command higher acquisition multiples.
            </p>
          </div>
        </div>
      </section>

      {/* CURATOR DESK */}
      <section className="section">
        <div className="vertical-cta">
          <span className="eyebrow">Curator Advisory Desk</span>
          <h2 className="vertical-cta__title">Senior Portfolio Curators</h2>
          <p className="vertical-cta__desc">
            When you contact Rare Passages, you speak directly with Senior Curators who have personally inspected the concessions, logged sea miles in polar waters, and maintained high-level access with wilderness conservancies.
          </p>
          <Link href="/contact" className="vertical-cta__btn">Schedule a portfolio consultation →</Link>
        </div>
      </section>
    </>
  );
}
