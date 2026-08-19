import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Group Standard",
  description: "The operating standard every Rare Passages brand is held to: research, transparency, refusal, partner examination and editorial independence. Published so it can be checked.",
  alternates: { canonical: "/standards" },
};

const standards = [
  { n: "01", title: "Research before recommendation", body: "Every destination, season and operator a brand recommends has been examined by a named person against primary sources — park authorities, operator documentation, direct enquiry. Historical guidance is labelled as guidance." },
  { n: "02", title: "The whole cost, first", body: "A traveler sees the full price — transfers, park and concession fees, levies, single supplements — before any commitment. Teaser rates and undisclosed markups are prohibited across the group." },
  { n: "03", title: "The willingness to say no", body: "A brand tells a traveler when the month is wrong, the country is wrong, or the year is wrong to go at all. A recommendation that cannot lose the booking is not a recommendation." },
  { n: "04", title: "Partners are examined, then re-examined", body: "Operators enter a brand's recommendations only after assessment against guiding standard, safety practice, conservation and community position, and pricing transparency. Standing is reviewed every season." },
  { n: "05", title: "No paid placement", body: "No operator, property or destination can pay to be recommended, ranked or featured. Commercial relationships are disclosed where they exist and never alter the recommendation." },
  { n: "06", title: "Editorial independence", body: "Guides and destination pages carry a byline and a last-reviewed date, cite their sources, and are corrected in public when wrong. Editorial standards for each brand are published on that brand's site." },
  { n: "07", title: "Traveler data is handled with restraint", body: "Brands collect what is needed to plan a trip and nothing else, state plainly what will happen to it, and never sell or trade it. Consent is opt-in." },
  { n: "08", title: "One design language, honestly applied", body: "Every brand in the group shares a horizon, a type system and a photographic standard: natural light, real places, no stock tells, no on-image credits. If it looks templated, it fails." },
];

export default function StandardsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">The group standard</span>
        <h1>What every brand we run is held to.</h1>
        <p className="page-hero__text">
          Published so that travelers, partners and journalists can check us against it. When a brand falls short of this document, the document wins.
        </p>
      </section>

      <section className="section">
        <ol className="standards-list">
          {standards.map((s) => (
            <li key={s.n}>
              <span className="standards-list__num" aria-hidden="true">{s.n}</span>
              <div>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--paper">
        <div className="section-header">
          <span className="eyebrow">In practice</span>
          <h2 className="section-title">Where to see it applied.</h2>
        </div>
        <ul className="plain-list">
          <li><a href="https://safariawaits.com/editorial-standards" target="_blank" rel="noopener noreferrer">Safari Awaits editorial standards</a> — the first brand’s published method.</li>
          <li><a href="https://safariawaits.com/operators" target="_blank" rel="noopener noreferrer">Safari Awaits operator framework</a> — how partners are assessed.</li>
          <li><Link href="/develop">Develop with us</Link> — what the standard means for a prospective partner.</li>
        </ul>
        <p className="standards-foot">Last reviewed August 2026. Owned by the founder; revised in public.</p>
      </section>
    </>
  );
}
