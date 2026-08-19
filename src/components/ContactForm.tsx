"use client";

import React, { useState } from "react";
import { track } from "@/lib/analytics";

// Corporate intake: partners, founders, press, institutions. Not a trip form —
// travelers belong on the brand sites. Posts to /api/inquiries (fail-closed).
const AUDIENCES = [
  { value: "operator", label: "Operator or property" },
  { value: "founder", label: "Founder or team" },
  { value: "institution", label: "Destination body or institution" },
  { value: "press", label: "Press" },
  { value: "other", label: "Something else" },
] as const;

export const ContactForm: React.FC<{ defaultAudience?: string }> = ({ defaultAudience = "operator" }) => {
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    role: "",
    email: "",
    phone: "",
    audience: defaultAudience,
    region: "",
    message: "",
    consent: false,
    website: "", // honeypot
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const v = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    track("inquiry_form_submit", { audience: form.audience });
    try {
      const r = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (r.status === 503) { setErrorText("Our intake is not connected yet. Please email the founder directly and we will reply in person."); throw new Error("503"); }
      if (!r.ok) { setErrorText("Something did not go through. Please try again, or email us directly."); throw new Error(String(r.status)); }
      setStatus("success");
      track("inquiry_form_success", { audience: form.audience });
    } catch {
      setStatus("error");
      track("inquiry_form_error", { audience: form.audience });
    }
  };

  if (status === "success") {
    return (
      <div className="cform cform--done" role="status">
        <span className="eyebrow">Received</span>
        <h3>Thank you. A named person will reply.</h3>
        <p>We read everything that comes through this form ourselves. Expect a reply within two business days; press enquiries within one.</p>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={handleSubmit} noValidate>
      <div className="cform__row cform__row--2">
        <label className="cform__field">
          <span>Full name</span>
          <input name="fullName" type="text" required autoComplete="name" value={form.fullName} onChange={set("fullName")} />
        </label>
        <label className="cform__field">
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" value={form.email} onChange={set("email")} />
        </label>
      </div>
      <div className="cform__row cform__row--2">
        <label className="cform__field">
          <span>Organization</span>
          <input name="organization" type="text" autoComplete="organization" value={form.organization} onChange={set("organization")} placeholder="Camp, company, publication, institution" />
        </label>
        <label className="cform__field">
          <span>Role</span>
          <input name="role" type="text" autoComplete="organization-title" value={form.role} onChange={set("role")} />
        </label>
      </div>
      <div className="cform__row cform__row--2">
        <label className="cform__field">
          <span>You are</span>
          <select name="audience" value={form.audience} onChange={set("audience")}>
            {AUDIENCES.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
          </select>
        </label>
        <label className="cform__field">
          <span>Region or category</span>
          <input name="region" type="text" value={form.region} onChange={set("region")} placeholder="e.g. Lower Zambezi, polar expedition, alpine" />
        </label>
      </div>
      <label className="cform__field">
        <span>{form.audience === "press" ? "What are you working on" : "What you run, and why us"}</span>
        <textarea name="message" rows={6} required value={form.message} onChange={set("message")} placeholder={form.audience === "press" ? "Outlet, angle, deadline." : "Two paragraphs is plenty. What you operate, where, and what you would want from a partnership."} />
      </label>
      <label className="cform__field">
        <span>Phone (optional)</span>
        <input name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} />
      </label>
      {/* honeypot */}
      <label className="cform__hp" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
      </label>
      <label className="cform__consent">
        <input name="consent" type="checkbox" required checked={form.consent} onChange={set("consent")} />
        <span>I agree that Rare Passages may use these details to respond. We do not sell or share them.</span>
      </label>
      {status === "error" && <p className="cform__error" role="alert">{errorText}</p>}
      <button type="submit" className="button" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
      <p className="cform__foot">Fails safe: if our intake is not connected, you will be told, not shown a fake confirmation.</p>
    </form>
  );
};
