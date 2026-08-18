"use client";

import React, { useState } from "react";
import { PORTFOLIO_VERTICALS } from "@/data/verticals";
import { Send, CheckCircle2, Sparkles, Clock, Lock } from "lucide-react";

interface ContactFormProps {
  defaultVertical?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultVertical = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    vertical: defaultVertical || "matching",
    timeframe: "6-12-months",
    budgetRange: "50k-100k",
    groupSize: "couple-family",
    message: "",
    ndaRequested: false,
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const selectedVerticalObj = PORTFOLIO_VERTICALS.find((v) => v.slug === formData.vertical);

  return (
    <div className="bg-[var(--forest)] border border-[var(--gold)]/30 rounded-lg p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Subtle gold accent light */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--gold)]/5 rounded-full blur-3xl pointer-events-none" />

      {status === "success" ? (
        <div className="text-center py-12 space-y-6 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-[var(--gold)]" />
          </div>
          <h3 className="font-serif text-3xl font-semibold text-[var(--paper)]">
            Inquiry Received
          </h3>
          <p className="text-sm text-[var(--paper)]/80 max-w-lg mx-auto leading-relaxed">
            Thank you, <strong className="text-[var(--gold)]">{formData.fullName}</strong>. Your inquiry is in. We review every brief personally and reply by email.
          </p>

          <div className="bg-[var(--ink)] p-6 rounded-md border border-[var(--gold)]/20 text-left max-w-md mx-auto space-y-2 text-xs text-[var(--paper)]/80">
            <div className="text-[var(--gold)] font-serif text-sm font-semibold border-b border-white/10 pb-2 flex items-center justify-between">
              <span>Consultation Brief Summary</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[var(--muted)] font-medium">Vertical: </span>
              <span>{selectedVerticalObj ? selectedVerticalObj.name : "Curator Guided Matching"}</span>
            </div>
            <div>
              <span className="text-[var(--muted)] font-medium">Timeframe: </span>
              <span className="capitalize">{formData.timeframe.replace(/-/g, " ")}</span>
            </div>

          </div>

          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                vertical: "matching",
                timeframe: "6-12-months",
                budgetRange: "50k-100k",
                groupSize: "couple-family",
                message: "",
                ndaRequested: false,
                consent: false,
              });
            }}
            className="text-xs uppercase tracking-widest text-[var(--gold)] underline hover:text-[var(--sand)] transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-7">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--paper)] mb-2">
              Start a conversation
            </h3>
            <p className="text-xs sm:text-sm text-[var(--paper)]/70 leading-relaxed">
              Tell us what you have in mind. We read every brief personally and reply by email.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--gold)] font-medium mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Eleanor Vance"
                className="w-full bg-[var(--ink)] border border-[var(--gold)]/30 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-sm px-4 py-3 text-sm text-[var(--paper)] placeholder-[var(--muted)]/60 outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--gold)] font-medium mb-1.5">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="eleanor@domain.com"
                className="w-full bg-[var(--ink)] border border-[var(--gold)]/30 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-sm px-4 py-3 text-sm text-[var(--paper)] placeholder-[var(--muted)]/60 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--gold)] font-medium mb-1.5">
                Direct Phone / WhatsApp <span className="text-[var(--sand)] text-[11px]">(Optional)</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 019-2834"
                className="w-full bg-[var(--ink)] border border-[var(--gold)]/30 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-sm px-4 py-3 text-sm text-[var(--paper)] placeholder-[var(--muted)]/60 outline-none transition-colors"
              />
            </div>

            {/* Preferred Vertical */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--gold)] font-medium mb-1.5">
                Primary Vertical Interest
              </label>
              <select aria-label="Primary Vertical Interest"
                value={formData.vertical}
                onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                className="w-full bg-[var(--ink)] border border-[var(--gold)]/30 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-sm px-4 py-3 text-sm text-[var(--paper)] outline-none transition-colors cursor-pointer"
              >
                <option value="matching">Not sure yet — help me choose</option>
                {PORTFOLIO_VERTICALS.map((v) => (
                  <option key={v.slug} value={v.slug}>
                    {v.name} ({v.category})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Timeframe */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--gold)] font-medium mb-1.5">
                Timeframe
              </label>
              <select aria-label="Timeframe"
                value={formData.timeframe}
                onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                className="w-full bg-[var(--ink)] border border-[var(--gold)]/30 focus:border-[var(--gold)] rounded-sm px-3 py-3 text-xs text-[var(--paper)] outline-none cursor-pointer"
              >
                <option value="3-6-months">Next 3 - 6 Months</option>
                <option value="6-12-months">6 - 12 Months</option>
                <option value="2027-horizon">2027 Horizon Planning</option>
                <option value="flexible">Flexible / Open</option>
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--gold)] font-medium mb-1.5">
                Budget Scope (USD)
              </label>
              <select aria-label="Budget Scope (USD)"
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full bg-[var(--ink)] border border-[var(--gold)]/30 focus:border-[var(--gold)] rounded-sm px-3 py-3 text-xs text-[var(--paper)] outline-none cursor-pointer"
              >
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="charter-buyout">Private Charter / Island Buyout ($250k+)</option>
              </select>
            </div>

            {/* Group Size */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--gold)] font-medium mb-1.5">
                Travel Party
              </label>
              <select aria-label="Travel Party"
                value={formData.groupSize}
                onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                className="w-full bg-[var(--ink)] border border-[var(--gold)]/30 focus:border-[var(--gold)] rounded-sm px-3 py-3 text-xs text-[var(--paper)] outline-none cursor-pointer"
              >
                <option value="couple">Solo or Couple (1-2)</option>
                <option value="couple-family">Family Group (3-6)</option>
                <option value="multi-gen">Multi-Generational (7-12)</option>
                <option value="private-office">Private Office / Buyout (12+)</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[var(--gold)] font-medium mb-1.5">
              Specific Desires, Destinations, or Wildlife Encounters
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Looking to combine a private Okavango Delta camp buyout with mountain gorilla trekking in Rwanda, requiring private charter transfers."
              className="w-full bg-[var(--ink)] border border-[var(--gold)]/30 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-sm p-4 text-sm text-[var(--paper)] placeholder-[var(--muted)]/60 outline-none transition-colors resize-none"
            />
          </div>

          {/* Options & Privacy */}
          <div className="space-y-3 pt-2">
            <label className="flex items-center gap-3 cursor-pointer text-xs text-[var(--paper)]/80">
              <input
                type="checkbox"
                checked={formData.ndaRequested}
                onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                className="w-4 h-4 rounded border-[var(--gold)]/40 text-[var(--gold)] focus:ring-0 bg-[var(--ink)]"
              />
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span>Request mutual non-disclosure agreement (NDA) prior to detailed itinerary planning</span>
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer text-[12px] text-[var(--sand)]">
              <input
                type="checkbox"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="w-4 h-4 rounded border-[var(--gold)]/40 text-[var(--gold)] focus:ring-0 bg-[var(--ink)] mt-0.5"
              />
              <span>
                I agree to receive confidential communications from Rare Passages. Rare Passages strictly respects client privacy and never shares data with third-party marketers.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div>
          {status === "error" && (
            <p className="text-sm pl-4" style={{ color: "var(--sand)", borderLeft: "2px solid var(--gold)" }} role="alert">
              Inquiry intake is not open yet. Please email us directly and we will respond personally.
            </p>
          )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.22em] font-bold text-[var(--ink)] bg-gradient-to-r from-[var(--gold)] via-[var(--sand)] to-[var(--gold)] hover:shadow-[0_0_25px_color-mix(in_srgb,var(--gold)_40%,transparent)] transition-all duration-300 rounded-sm cursor-pointer disabled:opacity-50"
            >
              {status === "submitting" ? (
                <>
                  <Clock className="w-4 h-4 animate-spin text-[var(--ink)]" />
                  <span>Connecting with Curator Desk...</span>
                </>
              ) : (
                <>
                  <span>Send my brief</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
