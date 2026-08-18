import { ContactForm } from "@/components/ContactForm";
import { metadata } from "./metadata";
export { metadata };


export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <span className="eyebrow">Get in touch</span>
        <h1>Start the conversation.</h1>
        <p className="page-hero__text">
          Whether you’re planning a single passage or looking to engage Rare Passages as your permanent travel portfolio, we’d like to hear from you.
        </p>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="section">
        <div className="contact-grid">
          <div className="contact-card">
            <span className="contact-card__icon">✦</span>
            <h2 className="contact-card__title">Plan a Journey</h2>
            <p className="contact-card__desc">
              Tell us about the trip you’re envisioning. We’ll match you with the right vertical and a specialist curator will respond within 72 hours.
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
              Are you a lodge, expedition vessel, or specialist operator meeting our published vetting audit standard? We’re interested in talking.
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
        <div className="contact-form-wrap">
          <ContactForm />
        </div>
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
