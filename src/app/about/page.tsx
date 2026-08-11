import React from "react";
import Link from "next/link";
import { BRAND_PRINCIPLES } from "@/data/verticals";
import { Compass, ShieldCheck, Sparkles, Leaf, Award, ArrowRight, Lock, Check } from "lucide-react";

export const metadata = {
  title: "About Rare Passages | Brand Story, Principles & Vision",
  description: "Discover the Rare Passages parent brand philosophy, 42-point operator audit standards, conservation trust, and executive leadership behind Safari Awaits and Expedition Maritime.",
};

export default function AboutPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Page Hero */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-hero-pattern border-b border-[#C8A44D]/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13253F] border border-[#C8A44D]/40 text-[#C8A44D] text-xs uppercase tracking-[0.25em] font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Parent Brand Architecture</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#F7F2E8] leading-tight">
            The Parent Brand for <br />
            <span className="gold-gradient-text italic font-normal">Uncompromised</span> Travel.
          </h1>

          <p className="text-base sm:text-lg text-[#F7F2E8]/80 max-w-2xl mx-auto leading-relaxed">
            Rare Passages was founded on a singular premise: world-class travel requires dedicated domain specialists, unified by institutional quality standards and total discretion.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8A44D] font-semibold">
              Our Genesis & Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F7F2E8] leading-snug">
              Restoring Mastery to Modern Travel Curation
            </h2>
            <div className="space-y-4 text-sm text-[#F7F2E8]/80 leading-relaxed">
              <p>
                In an industry increasingly dominated by mass booking engines and generic travel agency consortia, discerning travelers faced a dilemma: entrust complex wild journeys to generalists, or coordinate across disparate specialist operators with no unified quality control.
              </p>
              <p>
                Rare Passages was built to eliminate this friction. As the parent portfolio brand, we conceive, launch, and govern dedicated specialist verticals—each focused intensely on its respective ecosystem:
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-[#C8A44D]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A44D]" />
                  <span><strong>Safari Awaits:</strong> Private African concession safaris and primate sanctuaries</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A44D]" />
                  <span><strong>Expedition Maritime:</strong> PC6 polar class voyages through Antarctica, Svalbard & Galápagos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A44D]" />
                  <span><strong>Horizon Verticals:</strong> Coastal island sanctuaries, alpine heli-ski chalets & grand rail</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#13253F] border border-[#C8A44D]/30 p-8 rounded-lg space-y-6 relative">
            <div className="w-12 h-12 rounded-full bg-[#0A1628] border border-[#C8A44D] flex items-center justify-center">
              <Award className="w-6 h-6 text-[#C8A44D]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#F7F2E8]">
              The Rare Passages Guarantee
            </h3>
            <p className="text-xs text-[#F7F2E8]/80 leading-relaxed">
              We never operate as a pass-through booking middleman. Every vertical in our portfolio must hold direct relationships with conservation land owners, ship owners, and flight charter logistics companies.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-[#C8A44D]">
              <Lock className="w-4 h-4 text-[#C8A44D]" />
              <span>Discreet Family Office & Personal NDAs Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C8A44D] font-semibold">
            Governance & Tenets
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F7F2E8]">
            The 5 Rare Passages Principles
          </h2>
          <p className="text-xs sm:text-sm text-[#F7F2E8]/70">
            These non-negotiable principles govern every property, vessel, and experience in the Rare Passages portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAND_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="bg-[#13253F]/60 border border-[#C8A44D]/25 p-8 rounded-lg space-y-4 hover:border-[#C8A44D] transition-colors relative"
            >
              <div className="font-serif text-4xl font-bold text-[#C8A44D]">
                {principle.number}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#F7F2E8]">
                {principle.title}
              </h3>
              <p className="text-xs text-[#F7F2E8]/80 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}

          {/* Conservation Callout Card */}
          <div className="bg-gradient-to-br from-[#0A1628] to-[#13253F] border border-[#7A8471] p-8 rounded-lg space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#7A8471]">
                <Leaf className="w-5 h-5 text-[#7A8471]" />
                <span className="text-xs font-bold uppercase tracking-wider">Regenerative Trust</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#F7F2E8]">
                2.5% Platform Revenue Commitment
              </h3>
              <p className="text-xs text-[#F7F2E8]/80 leading-relaxed">
                We believe true luxury must protect the wilderness that inspires it. 2.5% of all booking platform revenue is directed to indigenous ranger salaries, anti-poaching canines, and ocean plastic removal fleets.
              </p>
            </div>
            <div className="text-[11px] text-[#C8A44D] font-semibold uppercase tracking-wider pt-4 border-t border-white/10">
              Zero Direct Markup Guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Desk */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#13253F] border border-[#C8A44D]/30 p-8 sm:p-12 rounded-lg space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8A44D] font-semibold">
              Curator Advisory Desk
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#F7F2E8]">
              Senior Portfolio Curators
            </h2>
            <p className="text-xs sm:text-sm text-[#F7F2E8]/80 leading-relaxed">
              When you contact Rare Passages, you speak directly with Senior Curators who have personally inspected the concessions, logged sea miles in polar waters, and maintained high-level access with wilderness conservancies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#F7F2E8]/80 border-t border-white/10 pt-6">
            <div className="space-y-2">
              <div className="font-serif text-lg font-semibold text-[#C8A44D]">Discreet Communications</div>
              <p className="text-[#F7F2E8]/70">
                Direct phone, encrypted WhatsApp, or private email coordination. High-profile clients can communicate directly via their family office representatives.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-lg font-semibold text-[#C8A44D]">Multi-Vertical Itinerary Synergy</div>
              <p className="text-[#F7F2E8]/70">
                Orchestrate seamless combinations—such as a Botswana Okavango Delta safari followed immediately by a private island retreat in the Seychelles.
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-center sm:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold text-[#0A1628] bg-[#C8A44D] hover:bg-[#E0C579] transition-colors rounded-sm"
            >
              <span>Schedule Portfolio Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
