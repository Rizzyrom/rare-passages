import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Develop With Us",
  description: "Rare Passages builds specialist travel brands with operators, properties and founders who are already doing it properly. How a partnership works.",
  alternates: { canonical: "/develop" },
};

export default function DevelopPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Develop with us</span>
        <h1>We build the brand. You run the ground.</h1>
        <p className="page-hero__text">
          Rare Passages does not own lodges, ships or rolling stock. We build the specialist consumer brands that send briefed travelers to the people who do — and we are selective about whose name we put in front of them.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">Who we work with</span>
          <h2 className="section-title">Three kinds of partner.</h2>
        </div>
        <div className="pillars-grid">
          <div className="pillar-card">
            <h3 className="pillar-card__title">Operators and properties</h3>
            <p className="pillar-card__desc">Camps, lodges, expedition vessels and ground handlers with a real guiding standard, a defensible conservation or community position, and the willingness to be examined before they are recommended. We send briefed, qualified travelers with the full cost already understood.</p>
          </div>
          <div className="pillar-card">
            <h3 className="pillar-card__title">Founders and teams</h3>
            <p className="pillar-card__desc">People who know a category of travel to the ground — polar, rail, islands, mountains — and want to build its definitive brand inside a group that supplies the method, the design system, the technology and the operating standard.</p>
          </div>
          <div className="pillar-card">
            <h3 className="pillar-card__title">Destination bodies and institutions</h3>
            <p className="pillar-card__desc">Tourism boards, conservancies and research institutions who want their destination represented with accuracy, sourced facts and honest seasonality rather than brochure language.</p>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="section-header">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">A partnership, in order.</h2>
        </div>
        <ol className="develop-steps">
          <li><strong>A conversation.</strong> You tell us what you run and how. We tell you honestly whether it fits a brand we operate or intend to.</li>
          <li><strong>Examination.</strong> We assess against <Link href="/standards">the group standard</Link>: guiding, safety, conservation position, transparency of pricing, how you handle a problem at two in the morning. This is not a formality; some conversations end here.</li>
          <li><strong>Representation.</strong> If it fits, your property or product appears in the relevant brand’s recommendations with the reasoning attached — why here, why this month, what a traveler gives up by choosing it. Travelers arrive briefed.</li>
          <li><strong>Review.</strong> Every partner is re-examined each season. Standing is earned continuously, not granted once.</li>
        </ol>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">What we do not do</span>
          <h2 className="section-title">Said plainly.</h2>
        </div>
        <ul className="plain-list">
          <li>We do not sell placement. No property can pay to be recommended, and no property that pays us more is recommended more.</li>
          <li>We do not aggregate. We represent twelve operators properly rather than four hundred by name.</li>
          <li>We do not publish what we cannot stand behind. If a claim about your property cannot be verified, it does not appear.</li>
        </ul>
      </section>

      <section className="section section--paper cta-band">
        <span className="eyebrow">Start the conversation</span>
        <h2 className="section-title">Tell us what you run.</h2>
        <p>Operators, founders and institutions: use the partner form and say which of the three you are. A named person replies.</p>
        <Link href="/contact" className="button">Partner with us</Link>
      </section>
    </>
  );
}
