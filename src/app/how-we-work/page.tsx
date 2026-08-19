import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Work",
  description: "How Rare Passages examines operators, builds brands and keeps them to one standard. The group's working method, for partners and press.",
  alternates: { canonical: "/how-we-work" },
};

const PILLARS = [
  { title: "A published standard", description: "Every brand is held to the same operating document, published at /standards so that travelers, partners and journalists can check us against it. When a brand falls short of it, the document wins." },
  { title: "No paid placement", description: "No operator, property or destination can pay to be recommended, ranked or featured by any brand in the group. Commercial relationships are disclosed on the brand that carries them and never alter a recommendation." },
  { title: "Depth over breadth", description: "Each brand covers a small number of places completely rather than many by name. Safari Awaits works in eight countries and knows them to the concession; the next brands will be built the same way." },
  { title: "Editorial method", description: "Guides carry a byline and a last-reviewed date, cite primary sources, and are corrected in public when wrong. Photography is natural light, real places, no stock tells." },
];

const PROCESS = [
  { step: "01", title: "A conversation", description: "An operator, property or founder tells us what they run and how. We say honestly whether it fits a brand we operate or intend to. Some conversations end here." },
  { step: "02", title: "Examination", description: "Assessment against the group standard: guiding qualification and practice, safety procedure, conservation and community position, pricing transparency, and how a problem at two in the morning is handled. Documentation is requested; claims are checked." },
  { step: "03", title: "Representation", description: "If it fits, the property or product enters the relevant brand’s recommendations with the reasoning attached — why here, why this month, and what a traveler gives up by choosing it. Travelers arrive briefed and with the full cost already understood." },
  { step: "04", title: "Seasonal review", description: "Standing is earned continuously. Every partner is re-examined each season against the same standard; recommendations change when the facts do." },
];

export default function HowWeWorkPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">How we work</span>
        <h1>Examine, represent, re-examine.</h1>
        <p className="page-hero__text">
          Rare Passages does not aggregate tours or sell packaged deals. Each brand in the group examines operators against a published standard, represents the ones that meet it with the reasoning attached, and re-examines them every season.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">Foundations</span>
          <h2 className="section-title">Four things that do not change by brand.</h2>
        </div>
        <div className="pillars-grid">
          {PILLARS.map((p) => (
            <div key={p.title} className="pillar-card">
              <h3 className="pillar-card__title">{p.title}</h3>
              <p className="pillar-card__desc">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--paper">
        <div className="section-header">
          <span className="eyebrow">For partners</span>
          <h2 className="section-title">How an operator enters a brand.</h2>
        </div>
        <div className="itinerary-list" style={{ maxWidth: "800px" }}>
          {PROCESS.map((p) => (
            <div key={p.step} className="itinerary-card">
              <div className="itinerary-card__header">
                <span className="itinerary-card__number">{p.step}</span>
                <h3 className="itinerary-card__title">{p.title}</h3>
              </div>
              <p className="itinerary-card__desc">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">In practice</span>
          <h2 className="section-title">Where to see it working.</h2>
        </div>
        <ul className="plain-list">
          <li><a href="https://safariawaits.com/operators" target="_blank" rel="noopener noreferrer">The Safari Awaits operator framework</a> — the first brand’s examination method, published.</li>
          <li><a href="https://safariawaits.com/editorial-standards" target="_blank" rel="noopener noreferrer">Safari Awaits editorial standards</a> — bylines, sourcing, corrections.</li>
          <li><Link href="/standards">The group standard</Link> — the document every brand is held to.</li>
        </ul>
      </section>

      <section className="section section--paper">
        <div className="vertical-cta">
          <span className="eyebrow">Operators, founders, institutions</span>
          <h2 className="vertical-cta__title">Tell us what you run.</h2>
          <p className="vertical-cta__desc">
            If it is done properly, we would like to hear about it. A named person replies.
          </p>
          <Link href="/develop" className="vertical-cta__btn">Develop with us →</Link>
        </div>
      </section>
    </>
  );
}
