import { notFound } from "next/navigation";
import Link from "next/link";
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
    title: `${vertical.name} — ${vertical.tagline}`,
    description: vertical.fullDescription,
  };
}

export default async function VerticalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vertical = PORTFOLIO_VERTICALS.find((v) => v.slug === slug);
  if (!vertical) notFound();

  const photo = photos.verticals[vertical.slug as keyof typeof photos.verticals];
  const heroImg = photo?.card || photos.hero.desktop;
  const isActive = vertical.status === "active";
  const verticalIndex = PORTFOLIO_VERTICALS.findIndex((v) => v.id === vertical.id);
  const prevVertical = verticalIndex > 0 ? PORTFOLIO_VERTICALS[verticalIndex - 1] : null;
  const nextVertical = verticalIndex < PORTFOLIO_VERTICALS.length - 1 ? PORTFOLIO_VERTICALS[verticalIndex + 1] : null;

  return (
    <>
      {/* HERO */}
      <section className="detail-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(10,22,40,.6), rgba(10,22,40,.3) 40%, rgba(10,22,40,.9)), url(${heroImg})` }} role="img" aria-label={vertical.name}>
        <div className="detail-hero__content">
          <span className="detail-hero__eyebrow">{vertical.category}</span>
          <h1 className="detail-hero__title">{vertical.name}</h1>
          <p className="detail-hero__tagline">{vertical.tagline}</p>
          <div className="detail-hero__status">
            <span className={`status-badge ${isActive ? "status-badge--active" : "status-badge--horizon"}`}>
              {isActive ? "Active" : "In Development"}
            </span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
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
          <div className="section-header">
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
          <div className="section-header">
            <span className="eyebrow">What Sets It Apart</span>
            <h2 className="section-title">Key differentiators</h2>
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
          <div className="section-header">
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
          <div className="section-header">
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

      {/* EXTERNAL LINK or CONTACT CTA */}
      <section className="section">
        <div className="vertical-cta">
          {vertical.externalUrl ? (
            <>
              <h2 className="vertical-cta__title">Ready to explore {vertical.name}?</h2>
              <p className="vertical-cta__desc">Visit the dedicated brand site to browse destinations, guides, and start planning.</p>
              <a href={vertical.externalUrl} className="vertical-cta__btn" target="_blank" rel="noopener noreferrer">
                Visit {vertical.name} →
              </a>
            </>
          ) : (
            <>
              <h2 className="vertical-cta__title">{vertical.name} is coming soon.</h2>
              <p className="vertical-cta__desc">This vertical is in development. Be the first to know when it launches.</p>
              <Link href="/contact" className="vertical-cta__btn">
                Get early access →
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
