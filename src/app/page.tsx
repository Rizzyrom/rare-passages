import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_VERTICALS, BRAND_PRINCIPLES, METHODOLOGY_STEPS } from "@/data/verticals";
import { VerticalCard } from "@/components/VerticalCard";
import { ContactForm } from "@/components/ContactForm";
import {
  Compass,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Award,
  Leaf,
  CheckCircle2,
  Anchor,
  Trees,
} from "lucide-react";

export default function HomePage() {
  const activeVerticals = PORTFOLIO_VERTICALS.filter((v) => v.status === "active");
  const horizonVerticals = PORTFOLIO_VERTICALS.filter((v) => v.status === "horizon");

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-hero-pattern overflow-hidden">
        {/* Subtle grid lines background */}
        <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />

        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C8A44D]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 animate-fade-in">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13253F] border border-[#C8A44D]/40 text-[#C8A44D] text-xs uppercase tracking-[0.25em] font-medium shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A44D]" />
            <span>The Parent Portfolio Authority for Luxury Travel</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#F7F2E8] leading-[1.05]">
            Where Extraordinary <br className="hidden sm:block" />
            <span className="gold-gradient-text italic font-normal">Passages</span> Are Curated.
          </h1>

          {/* Lead Paragraph */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#F7F2E8]/80 leading-relaxed font-normal">
            Rare Passages is the umbrella portfolio brand housing specialist travel curators—from private African safaris to polar maritime expeditions. We do not aggregate mass tours; we guarantee uncompromising vetting, restricted access, and regenerative conservation.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold text-[#0A1628] bg-gradient-to-r from-[#C8A44D] via-[#E0C579] to-[#C8A44D] hover:shadow-[0_0_30px_rgba(200,164,77,0.4)] transition-all duration-300 rounded-sm"
            >
              <span>Explore Portfolio Verticals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/how-we-work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold text-[#F7F2E8] bg-[#13253F] border border-[#C8A44D]/40 hover:border-[#C8A44D] hover:bg-[#1A3154] transition-all duration-300 rounded-sm"
            >
              <span>Our Vetting Standards</span>
              <ShieldCheck className="w-4 h-4 text-[#C8A44D]" />
            </Link>
          </div>

          {/* Featured Verticals Quick Strip */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-[#7A8471] font-medium uppercase tracking-widest border-t border-white/10 max-w-3xl mx-auto">
            <span className="text-[#C8A44D] font-serif italic text-sm text-normal">Portfolio Highlights:</span>
            <div className="flex items-center gap-2 text-[#F7F2E8]/90">
              <Trees className="w-4 h-4 text-[#C8A44D]" />
              <span>Safari Awaits (Flagship)</span>
            </div>
            <div className="flex items-center gap-2 text-[#F7F2E8]/90">
              <Anchor className="w-4 h-4 text-[#C8A44D]" />
              <span>Expedition Maritime</span>
            </div>
            <div className="flex items-center gap-2 text-[#F7F2E8]/90">
              <Globe2 className="w-4 h-4 text-[#7A8471]" />
              <span>Horizon 2027 Verticals</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Metrics & Proof Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-[#13253F]/60 border border-[#C8A44D]/25 rounded-lg backdrop-blur-md">
          <div className="space-y-1 text-center sm:text-left border-r border-white/10 last:border-0 pr-4">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C8A44D]">$0</div>
            <div className="text-xs uppercase tracking-wider text-[#F7F2E8] font-semibold">Direct Markup</div>
            <div className="text-[11px] text-[#7A8471]">Institutional Direct Rates</div>
          </div>

          <div className="space-y-1 text-center sm:text-left border-r border-white/10 last:border-0 pr-4">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C8A44D]">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#F7F2E8] font-semibold">Vetted Concessions</div>
            <div className="text-[11px] text-[#7A8471]">42-Point Quality Audit</div>
          </div>

          <div className="space-y-1 text-center sm:text-left border-r border-white/10 last:border-0 pr-4">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C8A44D]">2.5%</div>
            <div className="text-xs uppercase tracking-wider text-[#F7F2E8] font-semibold">Conservation Fund</div>
            <div className="text-[11px] text-[#7A8471]">Direct Platform Revenue Commitment</div>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C8A44D]">34</div>
            <div className="text-xs uppercase tracking-wider text-[#F7F2E8] font-semibold">Protected Regions</div>
            <div className="text-[11px] text-[#7A8471]">Safaris, Polar Seas & Atolls</div>
          </div>
        </div>
      </section>

      {/* 3. Portfolio Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#C8A44D]/20 pb-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C8A44D] font-semibold mb-2">
              Portfolio Directory
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F7F2E8]">
              Specialist Portfolio Verticals
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#F7F2E8]/70 max-w-md">
            Each Rare Passages vertical operates as an autonomous specialist brand governed by our strict environmental, safety, and luxury benchmarks.
          </p>
        </div>

        {/* Flagship & Active Verticals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeVerticals.map((vertical) => (
            <VerticalCard
              key={vertical.id}
              vertical={vertical}
              featured={vertical.id === "safari-awaits"}
            />
          ))}
        </div>

        {/* Horizon Pipeline Teaser */}
        <div className="pt-8">
          <div className="bg-[#13253F]/40 border border-[#C8A44D]/20 p-8 rounded-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A44D] font-bold">
                  Pipeline & Development
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#F7F2E8]">
                  Horizon Verticals (2027 & Beyond)
                </h3>
              </div>
              <Link
                href="/portfolio#horizon"
                className="inline-flex items-center gap-1.5 text-xs text-[#C8A44D] hover:underline font-semibold uppercase tracking-wider"
              >
                <span>View Full Pipeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {horizonVerticals.map((hv) => (
                <div
                  key={hv.id}
                  className="p-5 bg-[#0A1628]/80 border border-white/5 rounded-sm space-y-3"
                >
                  <span className="text-[9px] uppercase tracking-widest text-[#7A8471] font-bold block">
                    {hv.statusLabel}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-[#F7F2E8]">
                    {hv.name}
                  </h4>
                  <p className="text-xs text-[#F7F2E8]/70 line-clamp-3">
                    {hv.shortDescription}
                  </p>
                  <div className="pt-2 text-[10px] text-[#C8A44D] font-medium uppercase tracking-wider">
                    {hv.priceGuide}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Parent Philosophy & Governance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#13253F] to-[#0A1628] border border-[#C8A44D]/30 p-8 sm:p-14 rounded-lg relative overflow-hidden space-y-12">
          {/* Subtle logo emblem mark */}
          <div className="absolute right-[-40px] bottom-[-40px] opacity-5 pointer-events-none">
            <Compass className="w-96 h-96 text-[#C8A44D]" />
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8A44D] font-semibold">
              The Parent Brand Imperative
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F7F2E8] leading-tight">
              Why High-Net-Worth Travelers Trust a Parent Portfolio Authority
            </h2>
            <p className="text-sm sm:text-base text-[#F7F2E8]/80 leading-relaxed">
              In an era of diluted luxury travel marketing, Rare Passages stands as an institutional anchor. We do not sell mass packages. We curate specialist vertical brands that uphold single-point mastery, zero direct markup, and total discretion.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {BRAND_PRINCIPLES.slice(0, 3).map((pr) => (
              <div
                key={pr.number}
                className="bg-[#0A1628]/90 border border-[#C8A44D]/20 p-6 rounded-sm space-y-3 relative group hover:border-[#C8A44D] transition-colors"
              >
                <span className="font-serif text-3xl font-bold text-[#C8A44D]/40 group-hover:text-[#C8A44D] transition-colors block">
                  {pr.number}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#F7F2E8]">
                  {pr.title}
                </h3>
                <p className="text-xs text-[#F7F2E8]/70 leading-relaxed">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#C8A44D] hover:text-[#E0C579] transition-colors"
            >
              <span>Read Full Brand Story & Governance Principles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. How We Work Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C8A44D] font-semibold">
            Methodology
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F7F2E8]">
            The Passage Curation Process
          </h2>
          <p className="text-xs sm:text-sm text-[#F7F2E8]/70">
            From initial archetype discovery to post-expedition archiving, every detail is engineered for effortless perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((st) => (
            <div
              key={st.step}
              className="p-6 bg-[#13253F]/50 border border-[#C8A44D]/20 rounded-sm space-y-4 hover:border-[#C8A44D] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#0A1628] border border-[#C8A44D] flex items-center justify-center font-serif text-base font-bold text-[#C8A44D]">
                {st.step}
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#F7F2E8]">
                {st.name}
              </h3>
              <p className="text-xs text-[#F7F2E8]/70 leading-relaxed">
                {st.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/how-we-work"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold text-[#0A1628] bg-[#C8A44D] hover:bg-[#E0C579] transition-colors rounded-sm"
          >
            <span>Explore Partner Vetting & 42-Point Audit</span>
            <ShieldCheck className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. Contact & Consultation Anchor */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </div>
  );
}
