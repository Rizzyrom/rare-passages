import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { metadata } from "./metadata";
export { metadata };


export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <span className="eyebrow">Contact</span>
        <h1>A person, not a form.</h1>
        <p className="page-hero__text">
          Rare Passages is founder-led. What comes through this page is read by the founder and answered in person. Travelers planning a trip should go to the relevant brand — <a href="https://safariawaits.com" target="_blank" rel="noopener noreferrer">Safari Awaits</a> for Africa.
        </p>
      </section>

      <section className="section">
        <div className="contact-grid">
          <div className="contact-card">
            <h2 className="contact-card__title">Operators and properties</h2>
            <p className="contact-card__desc">Camps, lodges, vessels and ground handlers who want to be examined for representation by a brand in the group. <Link href="/develop">How a partnership works</Link>.</p>
          </div>
          <div className="contact-card">
            <h2 className="contact-card__title">Founders and teams</h2>
            <p className="contact-card__desc">People who know a category of travel to the ground and want to build its brand inside the group.</p>
          </div>
          <div className="contact-card">
            <h2 className="contact-card__title">Press</h2>
            <p className="contact-card__desc">Boilerplate, facts and assets are in the <Link href="/press">press room</Link>. Mark your message press and expect a reply within one business day.</p>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="section section--paper">
        <div className="section-header">
          <span className="eyebrow">Write to us</span>
          <h2 className="section-title">Tell us who you are and what you run.</h2>
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
            <span className="company-info__label">Response</span>
            <span className="company-info__value">Two business days; press within one</span>
          </div>
        </div>
      </section>
    </>
  );
}
