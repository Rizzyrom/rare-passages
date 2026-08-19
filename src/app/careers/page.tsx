import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description: "Rare Passages is small and founder-led. What we are looking for, what we are not, and how to write to us.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Careers</span>
        <h1>Small, by design, for now.</h1>
        <p className="page-hero__text">
          Rare Passages is founder-led and does not yet have open roles. That will change as the first brand’s season begins. This page says what we will look for when it does, so the right people can write early.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">Who we will need</span>
          <h2 className="section-title">Three kinds of person.</h2>
        </div>
        <div className="pillars-grid">
          <div className="pillar-card">
            <h3 className="pillar-card__title">Destination specialists</h3>
            <p className="pillar-card__desc">People who have guided, managed or lived in the places a brand covers and can tell a traveler the truth about a camp in March. Not sales. Judgement.</p>
          </div>
          <div className="pillar-card">
            <h3 className="pillar-card__title">Editors and researchers</h3>
            <p className="pillar-card__desc">Writers who cite sources, cut adjectives and would rather publish one accurate page than ten plausible ones.</p>
          </div>
          <div className="pillar-card">
            <h3 className="pillar-card__title">Brand founders</h3>
            <p className="pillar-card__desc">People who know a category of travel to the ground and want to build its definitive brand inside the group. See <Link href="/develop">Develop with us</Link>.</p>
          </div>
        </div>
      </section>

      <section className="section section--paper cta-band">
        <span className="eyebrow">Write early</span>
        <h2 className="section-title">Tell us who you are.</h2>
        <p>No CV template. Two paragraphs: what you know to the ground, and why this. A person reads it.</p>
        <Link href="/contact" className="button">Write to us</Link>
      </section>
    </>
  );
}
