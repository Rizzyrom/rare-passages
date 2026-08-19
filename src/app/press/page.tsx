import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press",
  description: "Rare Passages press room: boilerplate, brand assets, founder contact and the facts a journalist needs, stated plainly.",
  alternates: { canonical: "/press" },
};

export default function PressPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Press</span>
        <h1>What we are, in one paragraph.</h1>
        <p className="page-hero__text">
          Rare Passages is a specialist travel group. It builds and operates consumer brands — Safari Awaits is the first — that match discerning travelers to the right trip with published methods, full cost transparency and the willingness to say no. It owns no lodges, ships or rolling stock; it examines and represents the people who do.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">Boilerplate</span>
          <h2 className="section-title">Copy that may be used verbatim.</h2>
        </div>
        <div className="press-boiler">
          <p><strong>Short.</strong> Rare Passages is a specialist travel group building brands that match travelers to the right trip — starting with Safari Awaits, an African safari matching brand covering eight countries.</p>
          <p><strong>Standard.</strong> Rare Passages builds and operates specialist consumer travel brands with a shared operating standard: research before recommendation, the whole cost first, and the willingness to tell a traveler no. Its first brand, Safari Awaits, covers eight African countries with published editorial standards and decision tools — a cost estimator, a destination comparator and a month-by-month matrix — that no competitor in the category offers. The group is founder-led and privately held.</p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="section-header">
          <span className="eyebrow">Facts</span>
          <h2 className="section-title">Stated plainly.</h2>
        </div>
        <dl className="press-facts">
          <div><dt>Founded</dt><dd>2026</dd></div>
          <div><dt>Ownership</dt><dd>Privately held, founder-led</dd></div>
          <div><dt>Brands</dt><dd>Safari Awaits (active). Expedition Maritime, Private Islands, Alpine Retreats, Grand Rail Journeys (in development).</dd></div>
          <div><dt>Model</dt><dd>Asset-light: the group builds brands and examines partners; it does not own or operate properties or vessels.</dd></div>
          <div><dt>What we will not claim</dt><dd>Traveler counts, awards or rankings we have not earned. Ask, and we will tell you where we are.</dd></div>
        </dl>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">Assets</span>
          <h2 className="section-title">Marks, wordmarks and guidelines.</h2>
        </div>
        <ul className="plain-list">
          <li><Link href="/brand">Rare Passages brand guidelines and kit</Link> — mark, lockups, colour, type, usage.</li>
          <li><a href="https://safariawaits.com/brand" target="_blank" rel="noopener noreferrer">Safari Awaits brand guidelines and kit</a>.</li>
          <li><Link href="/standards">The group standard</Link> — the operating document every brand is held to.</li>
        </ul>
      </section>

      <section className="section section--paper cta-band">
        <span className="eyebrow">Contact</span>
        <h2 className="section-title">A person, not a form.</h2>
        <p>Press enquiries reach the founder directly. Use the contact form and mark it press; expect a reply within one business day.</p>
        <Link href="/contact" className="button">Contact the founder</Link>
      </section>
    </>
  );
}
