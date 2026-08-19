import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_VERTICALS } from "@/data/verticals";
import { photos } from "@/data/images";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rare Passages",
    url: "https://rarepassages.com",
    description: "A specialist travel group building brands held to one published standard: safaris, expedition cruises, private islands, alpine retreats, and grand rail journeys.",
    brand: PORTFOLIO_VERTICALS.map((v) => ({
      "@type": "Brand",
      name: v.name,
      url: v.externalUrl || `https://rarepassages.com/portfolio/${v.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="hero">
        { }
        <Image className="hero__image" src={photos.hero.desktop} alt="Dramatic remote landscape" fill priority sizes="100vw" />
        <div className="hero__gradient" />
        <div className="hero__content">
          <span className="hero__eyebrow">A portfolio of travel worth doing</span>
          <h1 className="hero__title">Rare <em>Passages.</em></h1>
          <p className="hero__subtitle">
            A group of specialist travel brands, each built around a single kind of journey and held to one operating standard. Safaris. Expedition voyages. Private islands. Alpine retreats. Grand rail.
          </p>
        </div>
        <div className="hero__scroll">Scroll</div>
      </section>

      {/* OPENING STATEMENT */}
      <section className="opening">
        <div className="opening__marker" data-reveal>
          <span className="eyebrow">The premise</span>
        </div>
        <p className="opening__text" data-reveal>
          Most travel groups grow by adding inventory. We grow by adding expertise. <em>Each brand in the portfolio is run by people who know one kind of travel completely</em> — and is held to the same standard of research, disclosure and partner conduct.
        </p>
        <p className="opening__note" data-reveal="late">
          That is the whole thesis: depth cannot be centralised, but standards can.
        </p>
      </section>

      {/* VERTICAL STRIPS, Full-bleed alternating, one per vertical */}
      {PORTFOLIO_VERTICALS.map((v, i) => {
        const photo = photos.verticals[v.slug as keyof typeof photos.verticals];
        const isActive = v.status === "active";
        return (
          <section key={v.id} className={`dest-strip ${i % 2 === 1 ? "dest-strip--reverse" : ""}`}>
            <div className="dest-strip__image">
              { }
              <Image src={photo?.card || photos.hero.mobile} alt={v.name} fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="dest-strip__content" data-reveal>
              <span className="dest-strip__number">0{i + 1}</span>
              <h2 className="dest-strip__name">{v.name}</h2>
              <span className="dest-strip__tagline">{v.tagline}</span>
              <p className="dest-strip__desc">{v.shortDescription}</p>
              <div className="dest-strip__meta">
                <div className="dest-strip__meta-item">
                  <span className="dest-strip__meta-label">Status</span>
                  <span className="dest-strip__meta-value">
                    {v.statusLabel}
                  </span>
                </div>
                <div className="dest-strip__meta-item">
                  <span className="dest-strip__meta-label">Status</span>
                  <span className="dest-strip__meta-value">{v.statusLabel}</span>
                </div>
              </div>
              <div className="actions">
                {v.externalUrl ? (
                  <a href={v.externalUrl} className="text-link" target="_blank" rel="noopener noreferrer">
                    Visit {v.name} →
                  </a>
                ) : (
                  <Link href={`/portfolio/${v.slug}`} className="text-link">
                    Read the {v.name} brief →
                  </Link>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* THE APPROACH */}
      <section className="approach">
        <div className="approach__left">
          <span className="eyebrow">The Standard</span>
          <h2>One portfolio.<br />One standard.</h2>
        </div>
        <div className="approach__right">
          <p>
            Every brand in the portfolio answers to the same standard, reviewed every season.
          </p>
          <p className="approach__pullquote">
            “A brand earns its place in this portfolio by knowing its category better than anyone we could hire to replace it.”
          </p>
          <p>
            Whether a brand is tracking gorillas in Rwanda or running ice cruises through the Northwest Passage, the standard does not change. We vet every operator for safety, conservation ethics, guest density, and guiding excellence. We disclose every commercial relationship. We show you the full cost before you book.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="/how-we-work" className="text-link">How we vet operators →</Link>
          </div>
        </div>
      </section>

      {/* CONSERVATION COMMITMENT */}
      <section className="featured-guide">
        <div className="featured-guide__image">
          { }
          <Image src={photos.editorial.conservation?.url || photos.hero.mobile} alt="Wildlife conservation" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="featured-guide__content">
          <span className="featured-guide__category">Conservation Commitment</span>
          <h3 className="featured-guide__title">Conservation is a line item, not a slogan.</h3>
          <p className="featured-guide__desc">
            Every vertical will publish where its conservation contribution goes and how much it is, before it takes a booking. Habitat, marine protection, and local guide training are the priorities. We will state the number when there is a number to state.
          </p>
          <Link href="/about" className="text-link">Read the commitment →</Link>
        </div>
      </section>

      {/* PARTNER WITH US — the corporate CTA, replaces the growth/revenue pitch deck */}
      <section className="partner">
        <div className="partner__intro" data-reveal>
          <span className="eyebrow">Partner with us</span>
          <h2>We are looking for operators who are already doing it properly.</h2>
          <p>
            Rare Passages does not own lodges, ships or rolling stock. We build the brands that send briefed
            travelers to the people who do — and we are selective about whose name we put in front of them.
          </p>
        </div>
        <div className="partner__grid">
          <article data-reveal>
            <span className="eyebrow">Operators &amp; properties</span>
            <h3>Join a vertical</h3>
            <p>Camps, vessels, lodges and ground handlers who meet our vetting standard and want qualified, well-briefed travelers rather than volume.</p>
          </article>
          <article data-reveal>
            <span className="eyebrow">Founders &amp; teams</span>
            <h3>Build the next brand</h3>
            <p>We back category specialists who know one kind of travel completely. If that is you, the portfolio is how you scale without losing the craft.</p>
          </article>
          <article data-reveal>
            <span className="eyebrow">Press &amp; institutions</span>
            <h3>Work with the group</h3>
            <p>Editorial enquiries, standards documentation, and partnership conversations with conservation and industry bodies.</p>
          </article>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        { }
        <Image className="final-cta__image" src={photos.sections.ctaBackground} alt="" aria-hidden fill sizes="100vw" />
        <div className="final-cta__overlay" />
        <div className="final-cta__content">
          <h2 className="final-cta__title">Build the next passage.</h2>
          <p className="final-cta__subtitle">
            We work with operators, founders and institutions who are ready to be examined against one standard.
          </p>
          <Link href="/develop" className="final-cta__btn">Partner with us</Link>
        </div>
      </section>
    </>
  );
}
