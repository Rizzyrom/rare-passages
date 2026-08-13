import { metadata } from "./metadata";
export { metadata };

import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <span className="eyebrow">Get in touch</span>
        <h1>Start the conversation.</h1>
        <p className="page-hero__text">
          Whether you're planning a single passage or looking to engage Rare Passages as your permanent travel portfolio, we'd like to hear from you.
        </p>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="section">
        <div className="contact-grid">
          <div className="contact-card">
            <span className="contact-card__icon">✦</span>
            <h2 className="contact-card__title">Plan a Journey</h2>
            <p className="contact-card__desc">
              Tell us about the trip you're envisioning. We'll match you with the right vertical and a specialist curator will respond within 72 hours.
            </p>
            <a href="mailto:hello@rarepassages.com" className="contact-card__link">hello@rarepassages.com →</a>
          </div>

          <div className="contact-card">
            <span className="contact-card__icon">◆</span>
            <h2 className="contact-card__title">Family Office & Private Clients</h2>
            <p className="contact-card__desc">
              For multi-vertical engagements, annual travel portfolios, or family office coordination, request a private consultation with our Senior Curators.
            </p>
            <a href="mailto:private@rarepassages.com" className="contact-card__link">private@rarepassages.com →</a>
          </div>

          <div className="contact-card">
            <span className="contact-card__icon">◇</span>
            <h2 className="contact-card__title">Partnerships & Operators</h2>
            <p className="contact-card__desc">
              Are you a lodge, expedition vessel, or specialist operator meeting our 42-point audit standard? We're interested in talking.
            </p>
            <a href="mailto:partners@rarepassages.com" className="contact-card__link">partners@rarepassages.com →</a>
          </div>

          <div className="contact-card">
            <span className="contact-card__icon">●</span>
            <h2 className="contact-card__title">Press & Media</h2>
            <p className="contact-card__desc">
              For editorial features, interviews, or press inquiries about Rare Passages and our portfolio verticals.
            </p>
            <a href="mailto:press@rarepassages.com" className="contact-card__link">press@rarepassages.com →</a>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="section section--paper">
        <div className="section-header">
          <span className="eyebrow">Inquiry Form</span>
          <h2 className="section-title">Send us a message</h2>
        </div>
        <form className="contact-form" action="mailto:hello@rarepassages.com" method="POST" encType="text/plain">
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your full name" />
            </div>
            <div className="contact-form__field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" />
            </div>
          </div>
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="interest">Area of Interest</label>
              <select id="interest" name="interest">
                <option value="">Select a vertical...</option>
                <option value="safari">Safari Awaits — African Safaris</option>
                <option value="expedition">Expedition Maritime — Polar & Oceanic</option>
                <option value="coastal">Coastal & Island Sanctuaries</option>
                <option value="alpine">Alpine & High-Altitude Retreats</option>
                <option value="rail">Grand Rail & Overland</option>
                <option value="multi">Multi-Vertical Portfolio</option>
                <option value="partnership">Partnership / Operator</option>
                <option value="press">Press / Media</option>
              </select>
            </div>
            <div className="contact-form__field">
              <label htmlFor="timeline">Timeline</label>
              <select id="timeline" name="timeline">
                <option value="">When are you looking to travel?</option>
                <option value="0-3">Within 3 months</option>
                <option value="3-6">3-6 months</option>
                <option value="6-12">6-12 months</option>
                <option value="12+">12+ months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>
          <div className="contact-form__field">
            <label htmlFor="message">Tell us about your trip</label>
            <textarea id="message" name="message" rows={5} placeholder="Group size, destinations of interest, budget range, any specific requirements..."></textarea>
          </div>
          <button type="submit" className="contact-form__submit">Send inquiry →</button>
        </form>
      </section>

      {/* COMPANY INFO */}
      <section className="section">
        <div className="company-info">
          <div className="company-info__item">
            <span className="company-info__label">Operating Entity</span>
            <span className="company-info__value">RM Ventures LLC</span>
          </div>
          <div className="company-info__item">
            <span className="company-info__label">Based In</span>
            <span className="company-info__value">Las Vegas, Nevada, USA</span>
          </div>
          <div className="company-info__item">
            <span className="company-info__label">Hours</span>
            <span className="company-info__value">Monday — Friday, 9am — 6pm PT</span>
          </div>
          <div className="company-info__item">
            <span className="company-info__label">Response Time</span>
            <span className="company-info__value">Within 72 hours</span>
          </div>
        </div>
      </section>
    </>
  );
}
