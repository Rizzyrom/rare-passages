import React from "react";
import Link from "next/link";
import { PORTFOLIO_VERTICALS, Vertical } from "@/data/verticals";
import { VerticalCard } from "@/components/VerticalCard";
import { ArrowRight, Compass, Sparkles, ShieldCheck } from "lucide-react";

export default function PortfolioPage() {
  const active = PORTFOLIO_VERTICALS.filter((v) => v.status === "active");
  const horizon = PORTFOLIO_VERTICALS.filter((v) => v.status === "horizon");
  const development = PORTFOLIO_VERTICALS.filter((v) => v.status === "development");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-hero-pattern overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C8A44D]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13253F] border border-[#C8A44D]/40 text-[#C8A44D] text-xs uppercase tracking-[0.25em] font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Full Portfolio Directory</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#F7F2E8] leading-[1.05]">
            Every Passage, <span className="gold-gradient-text italic font-normal">Curated</span>.
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#F7F2E8]/80 leading-relaxed">
            Rare Passages houses a portfolio of specialist travel verticals, each an autonomous brand with its own domain expertise, vetted supplier network, and conservation mandate.
          </p>
        </div>
      </section>

      {/* Active Verticals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        <div className="flex items-center gap-3 border-b border-[#C8A44D]/20 pb-4">
          <Sparkles className="w-5 h-5 text-[#C8A44D]" />
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F2E8]">Active Verticals</h2>
          <span className="ml-auto text-xs text-[#7A8471] uppercase tracking-wider">{active.length} Live</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {active.map((v) => (
            <VerticalCard key={v.id} vertical={v} featured={v.id === "safari-awaits"} />
          ))}
        </div>
      </section>

      {/* Horizon Verticals */}
      <section id="horizon" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10 scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#C8A44D]/20 pb-4">
          <Compass className="w-5 h-5 text-[#C8A44D]" />
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F2E8]">Horizon Verticals</h2>
          <span className="ml-auto text-xs text-[#7A8471] uppercase tracking-wider">2027 Pipeline</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {horizon.map((v) => (
            <div key={v.id} className="p-6 bg-[#13253F]/50 border border-[#C8A44D]/20 rounded-lg space-y-4 hover:border-[#C8A44D]/40 hover:bg-[#13253F]/70 transition-all duration-300">
              <span className="text-[10px] uppercase tracking-widest text-[#C8A44D] font-bold block">{v.statusLabel}</span>
              <h3 className="font-serif text-xl font-semibold text-[#F7F2E8]">{v.name}</h3>
              <p className="text-xs text-[#F7F2E8]/70 leading-relaxed">{v.shortDescription}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {v.keyHighlights.slice(0, 2).map((h, i) => (
                  <span key={i} className="text-[10px] text-[#7A8471] uppercase tracking-wider px-2 py-1 border border-white/10 rounded-sm">{h.split(" ").slice(0, 3).join(" ")}...</span>
                ))}
              </div>
              <div className="pt-2 text-[11px] text-[#C8A44D] font-medium">{v.priceGuide}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Verticals */}
      {development.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
          <div className="flex items-center gap-3 border-b border-[#C8A44D]/20 pb-4">
            <ShieldCheck className="w-5 h-5 text-[#C8A44D]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F2E8]">In Development</h2>
            <span className="ml-auto text-xs text-[#7A8471] uppercase tracking-wider">Research Phase</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {development.map((v) => (
              <div key={v.id} className="p-6 bg-[#13253F]/30 border border-white/5 rounded-lg space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-[#7A8471] font-bold block">{v.statusLabel}</span>
                <h3 className="font-serif text-xl font-semibold text-[#F7F2E8]">{v.name}</h3>
                <p className="text-xs text-[#F7F2E8]/60 leading-relaxed">{v.shortDescription}</p>
                <div className="pt-2 text-[11px] text-[#7A8471]">{v.priceGuide}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F7F2E8] mb-4">
          Ready to explore a passage?
        </h2>
        <p className="text-sm text-[#F7F2E8]/70 mb-8 max-w-xl mx-auto">
          Each vertical operates independently with its own concierge team. Contact the one that speaks to you.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold text-[#0A1628] bg-gradient-to-r from-[#C8A44D] via-[#E0C579] to-[#C8A44D] hover:shadow-[0_0_30px_rgba(200,164,77,0.4)] transition-all duration-300 rounded-sm">
          <span>Back to Home</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
