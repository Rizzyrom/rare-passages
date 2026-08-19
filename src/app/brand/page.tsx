import type { Metadata } from "next";
import { StarMark, SiteLogo } from "@/components/site-logo";

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description: "Rare Passages brand standards: logo, color, typography, voice, and application assets.",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "Starlight", hex: "#e0c579 → #c8a44d", token: "gradient", use: "The star only. Vertical, light at the top" },
  { name: "Ink Navy", hex: "#0a1628", token: "--ink", use: "Primary ground. The night the star sits in" },
  { name: "Paper", hex: "#f7f2e8", token: "--paper", use: "Light surfaces. Never pure white" },
  { name: "Gold", hex: "#c8a44d", token: "--gold", use: "Accents, rules, active states — sparingly" },
  { name: "Deep Navy", hex: "#1a3154", token: "--forest", use: "Panels, overlays, secondary dark surfaces" },
  { name: "Slate", hex: "#3a5780", token: "--moss", use: "Supporting cool tone" },
  { name: "Sand", hex: "#e8dec8", token: "--sand", use: "Hairlines, quiet borders on dark" },
  { name: "Muted", hex: "#6b7588", token: "--muted", use: "Secondary text, captions" },
];

export default function BrandPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Internal standards</span>
        <h1>The Rare Passages brand.</h1>
        <p>The parent of the portfolio. One star, one horizon, and the standard every vertical answers to.</p>
      </section>

      <article className="content-wrap longform brand-doc">
        <section>
          <span className="eyebrow">The mark</span>
          <h2>The star over the water.</h2>
          <p>
            A north star above the horizon, its light settling on the water below. Navigation is the brand:
            rare passages are found by people who know the way. The star always wears the Starlight gradient;
            the horizon takes the text color of its surface. The family system: every vertical shares this
            horizon — Safari Awaits raises the sun over grassland; the parent holds the night sky.
          </p>
          <div className="brand-row">
            <div className="brand-cell brand-cell--paper"><StarMark size={120} title="Star mark on paper" /></div>
            <div className="brand-cell brand-cell--ink"><StarMark size={120} title="Star mark on ink" /></div>
            <div className="brand-cell brand-cell--forest"><StarMark size={120} title="Star mark on navy" /></div>
          </div>
        </section>

        <section>
          <span className="eyebrow">The lockup</span>
          <h2>Mark plus wordmark.</h2>
          <p>
            RARE PASSAGES in Cormorant Garamond 600 capitals, tracked wide, outlined to paths so it renders
            identically everywhere. Horizontal lockup wherever width allows; stacked for squares; the mark
            alone at small sizes.
          </p>
          <div className="brand-stack">
            <div className="brand-cell brand-cell--paper brand-cell--wide"><SiteLogo height={44} /></div>
            <div className="brand-cell brand-cell--ink brand-cell--wide"><SiteLogo height={44} /></div>
          </div>
          <ul className="check-list">
            <li>Clearspace: one star-height of empty space on all sides.</li>
            <li>Minimum lockup height 20px; below that, use the mark alone.</li>
            <li>Never recolor the star, rotate the mark, or reset the wordmark in another face.</li>
            <li>The parent prefers dark ground: ink navy first, paper second.</li>
          </ul>
        </section>

        <section>
          <span className="eyebrow">Color</span>
          <h2>Night water, starlight, paper.</h2>
          <p>
            Rare Passages inverts the vertical brands: dark-first. Ink Navy is the ground, Paper is for
            documents and light surfaces, Gold appears where attention should settle. Roughly 70% navy
            tones, 25% paper, 5% gold.
          </p>
          <div className="swatch-grid">
            {colors.map((c) => (
              <div key={c.hex} className="swatch">
                {c.token === "gradient" ? (
                  <div className="swatch__chip swatch__chip--sunrise" />
                ) : (
                  <div className="swatch__chip" style={{ background: c.hex }} />
                )}
                <strong>{c.name}</strong>
                <code>{c.hex}</code>
                <p>{c.use}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <span className="eyebrow">Voice</span>
          <h2>Institutional calm. Zero theater.</h2>
          <p>
            The parent speaks to partners, operators, press and talent — never to travelers: measured, specific, unhurried.
            No invented concierge language, no fake urgency, no titles we have not earned. Every claim
            checkable. Every number real. No emojis, anywhere, ever.
          </p>
          <p><strong>One line:</strong> A group of specialist travel brands. One operating standard.</p>
          <p><strong>Short bio (social):</strong> A specialist travel group. Safari Awaits is active; polar, islands, alpine and rail brands follow. One published standard, full cost transparency.</p>
          <p><strong>Long boilerplate:</strong> Rare Passages is a travel group built on a single conviction: expertise does not scale by dilution. Each brand in the portfolio is run by specialists in one category of travel and is held to a shared standard covering research, partner vetting, cost disclosure and conduct. The group does not own lodges, vessels or rolling stock; it builds the brands that connect travelers to the operators who do.</p>
        </section>

        <section>
          <span className="eyebrow">Kit</span>
          <h2>Download the assets.</h2>
          <div className="asset-grid">
            {[
              ["rp-lockup-ink.svg", "Horizontal lockup — light surfaces"],
              ["rp-lockup-cream.svg", "Horizontal lockup — dark surfaces"],
              ["rp-stacked-ink.svg", "Stacked lockup — light surfaces"],
              ["rp-stacked-cream.svg", "Stacked lockup — dark surfaces"],
              ["rp-mark.svg", "Star mark — master SVG"],
              ["rp-avatar-ink.png", "Profile avatar 1024 — ink navy"],
              ["rp-avatar-navy.png", "Profile avatar 1024 — deep navy"],
              ["rp-avatar-paper.png", "Profile avatar 1024 — paper"],
              ["rp-banner-x.png", "X / Twitter header 1500×500"],
              ["rp-banner-linkedin.png", "LinkedIn banner 1584×396"],
              ["rp-logo-email.png", "Email signature logo (transparent)"],
              ["email-signature.html", "Email signature — paste-ready HTML"],
            ].map(([file, label]) => (
              <a key={file} href={`/brand/${file}`} download className="asset-link">
                <strong>{label}</strong>
                <code>{file}</code>
              </a>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
