import Link from "next/link";

export const metadata = {
  title: "How We Work",
  description: "How Rare Passages vets operators, matches travelers, and manages every step of the journey from discovery to post-trip impact reporting.",
};

const PILLARS = [
  {
    title: "Published Vetting Standard",
    description: "Every operator, lodge, vessel, and ground handler is assessed against a published vetting standard covering safety records, guide certifications, conservation impact, guest-to-staff ratios, emergency protocols, and supplier transparency.",
  },
  {
    title: "Zero Commission Bias",
    description: "We do not accept paid placements or commission-based rankings. Verticals are selected on merit, safety, and conservation track record alone. Our matching fee is flat and transparent.",
  },
  {
    title: "Regenerative Conservation Mandate",
    description: "2.5% of all platform revenue flows directly to registered conservation funds in each operating region. We audit impact annually and publish the results.",
  },
  {
    title: "Deep-Field Expertise",
    description: "Our curators are former field guides, expedition leaders, and conservation officers, not call-center agents. They have walked the trails, sailed the waters, and slept in the camps they recommend.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery Consultation",
    description: "A 45-minute private call to understand your travel vision, comfort preferences, group dynamics, and conservation interests. No forms, no bots, a real conversation with a specialist.",
  },
  {
    step: "02",
    title: "Bespoke Curation",
    description: "Within 72 hours, you receive a curated shortlist of 3-5 operators or vessels that match your criteria, complete with transparent pricing, guide bios, and conservation impact data.",
  },
  {
    step: "03",
    title: "Refinement & Booking",
    description: "We refine the selection based on your feedback, handle all logistics, flights, transfers, dietary needs, special occasions, and secure your booking with direct supplier contracts.",
  },
  {
    step: "04",
    title: "In-Field Concierge",
    description: "From the moment you depart to the moment you return, our team monitors your journey. Need a last-minute itinerary change? A medical referral? We are one message away, 24/7.",
  },
  {
    step: "05",
    title: "Post-Trip Impact Report",
    description: "After your journey, you receive a detailed impact report showing exactly how your booking contributed to local conservation, community employment, and carbon offset programs.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <span className="eyebrow">Our Vetting Standards</span>
        <h1>How we work.</h1>
        <p className="page-hero__text">
          Rare Passages does not aggregate tours or sell packaged deals. We curate, vet, and personally match travelers with operators who meet the most demanding standards in luxury adventure travel.
        </p>
      </section>

      {/* FOUR PILLARS */}
      <section className="section">
        <div className="section-header">
          <span className="eyebrow">The Foundation</span>
          <h2 className="section-title">Four pillars of trust</h2>
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

      {/* PROCESS TIMELINE */}
      <section className="section section--paper">
        <div className="section-header">
          <span className="eyebrow">Step by Step</span>
          <h2 className="section-title">The curation process</h2>
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

      {/* CTA */}
      <section className="section">
        <div className="vertical-cta">
          <h2 className="vertical-cta__title">Ready to begin?</h2>
          <p className="vertical-cta__desc">
            Book a private discovery consultation with one of our curators. No obligation, no pressure, just a conversation about where the world is calling you.
          </p>
          <Link href="/contact" className="vertical-cta__btn">Start your journey →</Link>
        </div>
      </section>
    </>
  );
}
