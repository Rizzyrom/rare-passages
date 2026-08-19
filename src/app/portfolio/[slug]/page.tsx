import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_VERTICALS } from "@/data/verticals";
import { photos } from "@/data/images";

export function generateStaticParams() {
  return PORTFOLIO_VERTICALS.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vertical = PORTFOLIO_VERTICALS.find((v) => v.slug === slug);
  if (!vertical) return {};
  return {
    title: `${vertical.name}`,
    description: vertical.shortDescription.length > 160 ? vertical.shortDescription.slice(0, 157).replace(/\s+\S*$/, '') + '…' : vertical.shortDescription,
  };
}

export default async function VerticalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vertical = PORTFOLIO_VERTICALS.find((v) => v.slug === slug);
  if (!vertical) notFound();

  const photo = photos.verticals[vertical.slug as keyof typeof photos.verticals];
  const heroImg = photo?.card || photos.hero.desktop;
  // Interlude uses a different photograph than the hero: conservation for
  // land verticals, arctic for expedition, hero fjord as the fallback.
  const interludePhoto =
    vertical.slug === "expedition-cruises" || vertical.slug === "expedition-maritime"
      ? { url: photos.editorial.arctic.url, alt: photos.editorial.arctic.alt }
      : { url: photos.editorial.conservation?.url || photos.hero.desktop, alt: photos.editorial.conservation?.alt || "" };
  const isActive = vertical.status === "active";
  const verticalIndex = PORTFOLIO_VERTICALS.findIndex((v) => v.id === vertical.id);
  const prevVertical = verticalIndex > 0 ? PORTFOLIO_VERTICALS[verticalIndex - 1] : null;
  const nextVertical = verticalIndex < PORTFOLIO_VERTICALS.length - 1 ? PORTFOLIO_VERTICALS[verticalIndex + 1] : null;

  return (
    <>
      {/* HERO */}
      <section className="detail-hero"><Image className="detail-hero__image" src={heroImg} alt={vertical.name} fill priority sizes="100vw" /><div className="detail-hero__scrim" />
        <div className="detail-hero__content">
          <span className="detail-hero__eyebrow">{vertical.category}</span>
          <h1 className="detail-hero__title">{vertical.name}</h1>
          <p className="detail-hero__tagline">{vertical.tagline}</p>
          <div className="detail-hero__status">
            <span className={`status-badge ${isActive ? "status-badge--active" : "status-badge--horizon"}`}>
              {vertical.statusLabel}
            </span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <div className="detail-body">
      <section className="section section--narrow">
        <div className="detail-overview">
          <span className="eyebrow">Overview</span>
          <p className="detail-overview__text">{vertical.fullDescription}</p>
          <div className="detail-overview__meta-grid">
            <div className="detail-meta-item">
              <span className="detail-meta-label">Category</span>
              <span className="detail-meta-value">{vertical.category}</span>
            </div>
            <div className="detail-meta-item">
              <span className="detail-meta-label">Group Size</span>
              <span className="detail-meta-value">{vertical.guestCapacity}</span>
            </div>
            <div className="detail-meta-item">
              <span className="detail-meta-label">Price Guide</span>
              <span className="detail-meta-value">{vertical.priceGuide}</span>
            </div>
            <div className="detail-meta-item">
              <span className="detail-meta-label">Sustainability</span>
              <span className="detail-meta-value">{vertical.sustainabilityRating}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      {vertical.featuredDestinations.length > 0 && (
        <section className="section">
          <div className="section-header" data-reveal>
            <span className="eyebrow">Destinations</span>
            <h2 className="section-title">Where this vertical operates</h2>
          </div>
          <div className="destination-list">
            {vertical.featuredDestinations.map((dest, i) => (
              <div key={i} className="destination-list__item">
                <span className="destination-list__number">{String(i + 1).padStart(2, "0")}</span>
                <span className="destination-list__name">{dest}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* KEY HIGHLIGHTS */}
      {vertical.keyHighlights.length > 0 && (
        <section className="section section--paper">
          <div className="section-header" data-reveal>
            <span className="eyebrow">In practice</span>
            <h2 className="section-title">What the brand does</h2>
          </div>
          <div className="highlights-grid">
            {vertical.keyHighlights.map((highlight, i) => (
              <div key={i} className="highlight-card">
                <span className="highlight-card__number">{String(i + 1).padStart(2, "0")}</span>
                <p className="highlight-card__text">{highlight}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* VERTICAL PILLARS */}
      {vertical.verticalPillars.length > 0 && (
        <section className="section">
          <div className="section-header" data-reveal>
            <span className="eyebrow">The Approach</span>
            <h2 className="section-title">Operating principles</h2>
          </div>
          <div className="pillars-grid">
            {vertical.verticalPillars.map((pillar, i) => (
              <div key={i} className="pillar-card">
                <h3 className="pillar-card__title">{pillar.title}</h3>
                <p className="pillar-card__desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SAMPLE ITINERARIES */}
      {vertical.sampleItineraries.length > 0 && (
        <section className="section section--paper">
          <div className="section-header" data-reveal>
            <span className="eyebrow">Sample Journeys</span>
            <h2 className="section-title">Representative itineraries</h2>
          </div>
          <div className="itinerary-list">
            {vertical.sampleItineraries.map((itin, i) => (
              <div key={i} className="itinerary-card">
                <div className="itinerary-card__header">
                  <span className="itinerary-card__number">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="itinerary-card__title">{itin.title}</h3>
                    <span className="itinerary-card__meta">{itin.duration} — {itin.regions}</span>
                  </div>
                </div>
                <p className="itinerary-card__desc">{itin.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      </div>

      {/* INTERLUDE */}
      <section className="interlude">
        <Image src={interludePhoto.url} alt={interludePhoto.alt} fill sizes="100vw" />
        <p className="interlude__line" data-reveal>{vertical.status === "active" ? "Known to the concession, represented with the reasoning attached." : "In development. Represented once it meets the group standard."}</p>
      </section>

      {/* EXTERNAL LINK or CONTACT CTA */}
      <section className="section">
        <div className="vertical-cta">
          {vertical.externalUrl ? (
            <>
              <h2 className="vertical-cta__title">Ready to explore {vertical.name}?</h2>
              <p className="vertical-cta__desc">The brand site carries the destinations, guides, decision tools and published standards.</p>
              <a href={vertical.externalUrl} className="vertical-cta__btn" target="_blank" rel="noopener noreferrer">
                Visit {vertical.name} →
              </a>
            </>
          ) : (
            <>
              <h2 className="vertical-cta__title">{vertical.name} is {vertical.status === "development" ? "in development" : "a horizon brand"}.</h2>
              <p className="vertical-cta__desc">Operators and founders who run this properly and want it represented properly: see how a partnership works.</p>
              <Link href="/develop" className="vertical-cta__btn">
                Develop this brand →
              </Link>
            </>
          )}
        </div>
      </section>

      {/* PREV / NEXT NAV */}
      <section className="vertical-nav">
        {prevVertical ? (
          <Link href={`/portfolio/${prevVertical.slug}`} className="vertical-nav__link vertical-nav__link--prev">
            <span className="vertical-nav__label">Previous</span>
            <span className="vertical-nav__name">{prevVertical.name}</span>
          </Link>
        ) : (
          <span />
        )}
        {nextVertical ? (
          <Link href={`/portfolio/${nextVertical.slug}`} className="vertical-nav__link vertical-nav__link--next">
            <span className="vertical-nav__label">Next</span>
            <span className="vertical-nav__name">{nextVertical.name}</span>
          </Link>
        ) : (
          <span />
        )}
      </section>
    </>
  );
}
