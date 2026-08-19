import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_PRINCIPLES } from "@/data/verticals";

export const metadata: Metadata = {
  title: "About Rare Passages",
  description: "Rare Passages is a specialist travel group. It builds and operates consumer travel brands held to one published standard, starting with Safari Awaits.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About</span>
        <h1>A group built around one standard.</h1>
        <p className="page-hero__text">
          Rare Passages builds and operates specialist travel brands. Each brand knows one kind of travel to the ground; the group supplies the method, the design language, the technology and the operating standard they are all held to.
        </p>
      </section>

      <section className="section section--narrow">
        <div className="detail-overview">
          <span className="eyebrow">Why it exists</span>
          <h2 className="section-title" style={{ marginBottom: "var(--space-md)" }}>Expertise does not scale by aggregation.</h2>
          <p className="detail-overview__text" style={{ fontSize: "1.05rem" }}>
            The largest travel companies became large by adding destinations. The result is breadth without depth: hundreds of countries by name, none known to the concession. Specialist knowledge, meanwhile, lives in small operators who are excellent on the ground and invisible online.
          </p>
          <p className="detail-overview__text" style={{ fontSize: "1.05rem" }}>
            Rare Passages was founded to hold both. Each brand in the group covers a small number of places completely — a handful of countries, a handful of routes — and represents the operators who actually run them, examined against a published standard and re-examined every season. The group owns no lodges, ships or rolling stock. It builds the brands; it does not compete with the people it recommends.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="section-header">
          <span className="eyebrow">Principles</span>
          <h2 className="section-title">What every brand is held to.</h2>
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
        <p style={{ marginTop: "var(--space-lg)" }}>
          <Link href="/standards" className="text-link">Read the full group standard →</Link>
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">Structure</span>
          <h2 className="section-title">How the group is organised.</h2>
        </div>
        <div className="pillars-grid">
          <div className="pillar-card">
            <h3 className="pillar-card__title">Brands</h3>
            <p className="pillar-card__desc">Consumer-facing, each with its own name, domain, identity and audience. Safari Awaits is active. Expedition Maritime, Private Islands, Alpine Retreats and Grand Rail Journeys are in development. <Link href="/portfolio">See the brands</Link>.</p>
          </div>
          <div className="pillar-card">
            <h3 className="pillar-card__title">The group</h3>
            <p className="pillar-card__desc">Supplies what the brands share: the operating standard, the operator examination framework, the shared design language and photography standard, the technology, and the editorial method.</p>
          </div>
          <div className="pillar-card">
            <h3 className="pillar-card__title">Partners</h3>
            <p className="pillar-card__desc">Operators, properties, founders and destination bodies who meet the standard and are represented by the relevant brand. <Link href="/develop">Develop with us</Link> explains how a partnership works.</p>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="section-header">
          <span className="eyebrow">Ownership</span>
          <h2 className="section-title">Founder-led, privately held.</h2>
        </div>
        <div className="detail-overview">
          <p className="detail-overview__text">
            Rare Passages is a trading name of RM Ventures LLC. It is founder-led and privately held, and it publishes its standard rather than its financials. Journalists and prospective partners can reach the founder directly through <Link href="/contact">the contact page</Link>; the <Link href="/press">press room</Link> carries boilerplate, facts and brand assets.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="vertical-cta">
          <span className="eyebrow">Work with the group</span>
          <h2 className="vertical-cta__title">Operators, founders, institutions.</h2>
          <p className="vertical-cta__desc">
            If you run something properly and want it represented properly, start with a conversation. A named person replies.
          </p>
          <Link href="/contact" className="vertical-cta__btn">Partner with us →</Link>
        </div>
      </section>
    </>
  );
}
