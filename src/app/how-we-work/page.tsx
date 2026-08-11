import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, Leaf, Compass, CheckCircle2, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "42-Point Vetting Audit",
    description: "Every operator, lodge, vessel, and ground handler undergoes a rigorous 42-point quality audit covering safety records, guide certifications, conservation impact, guest-to-staff ratios, emergency protocols, and supplier transparency.",
  },
  {
    icon: Award,
    title: "Zero Commission Bias",
    description: "We do not accept paid placements or commission-based rankings. Verticals are selected on merit, safety, and conservation track record alone. Our matching fee is flat and transparent.",
  },
  {
    icon: Leaf,
    title: "Regenerative Conservation Mandate",
    description: "2.5% of all platform revenue flows directly to registered conservation funds in each operating region. We audit impact annually and publish the results.",
  },
  {
    icon: Compass,
    title: "Deep-Field Expertise",
    description: "Our curators are former field guides, expedition leaders, and conservation officers — not call-center agents. They have walked the trails, sailed the waters, and slept in the camps they recommend.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery Consultation",
    description: "A 45-minute private call to understand your travel vision, comfort preferences, group dynamics, and conservation interests. No forms, no bots — a real conversation with a specialist.",
  },
  {
    step: "02",
    title: "Bespoke Curation",
    description: "Within 72 hours, you receive a curated shortlist of 3-5 operators or vessels that match your criteria, complete with transparent pricing, guide bios, and conservation impact data.",
  },
  {
    step: "03",
    title: "Refinement & Booking",
    description: "We refine the selection based on your feedback, handle all logistics — flights, transfers, dietary needs, special occasions — and secure your booking with direct supplier contracts.",
  },
  {
    step: "04",
    title: "In-Field Concierge",
    description: "From the moment you depart to the moment you return, our team monitors your journey. Need a last-minute itinerary change? A medical referral? We are one message away, 24/7.",
  },
  {
    step: "05",
    title: "Post-Trip Impact Report",
    description: "After your journey, you receive a detailed impact report showing exactly how your booking contributed to local conservation, community employment, and carbon offset programs.",
  },
];

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-hero-pattern overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C8A44D]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13253F] border border-[#C8A44D]/40 text-[#C8A44D] text-xs uppercase tracking-[0.25em] font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Our Vetting Standards</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#F7F2E8] leading-[1.05]">
            How We <span className="gold-gradient-text italic font-normal">Work</span>.
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#F7F2E8]/80 leading-relaxed">
            Rare Passages does not aggregate tours or sell packaged deals. We curate, vet, and personally match travelers with operators who meet the most demanding standards in luxury adventure travel.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="text-center space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C8A44D] font-semibold">The Foundation</div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F7F2E8]">Four Pillars of Trust</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((p) => (
            <div key={p.title} className="p-8 bg-[#13253F]/60 border border-[#C8A44D]/20 rounded-lg space-y-4 hover:border-[#C8A44D]/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 grid place-items-center bg-[#C8A44D]/10 border border-[#C8A44D]/30 rounded-lg">
                  <p.icon className="w-5 h-5 text-[#C8A44D]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#F7F2E8]">{p.title}</h3>
              </div>
              <p className="text-sm text-[#F7F2E8]/70 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="text-center space-y-3">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C8A44D] font-semibold">Step by Step</div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F7F2E8]">The Curation Process</h2>
        </div>
        <div className="space-y-1">
          {PROCESS.map((p, i) => (
            <div key={p.step} className="flex gap-6 pb-10 relative">
              {i < PROCESS.length - 1 && (
                <div className="absolute left-7 top-16 bottom-0 w-px bg-gradient-to-b from-[#C8A44D]/30 to-transparent" />
              )}
              <div className="flex-shrink-0 w-14 h-14 grid place-items-center bg-gradient-to-br from-[#C8A44D] to-[#9E7D30] rounded-full text-[#0A1628] font-serif text-lg font-bold shadow-lg">
                {p.step}
              </div>
              <div className="space-y-2 pt-1">
                <h3 className="font-serif text-xl font-semibold text-[#F7F2E8]">{p.title}</h3>
                <p className="text-sm text-[#F7F2E8]/70 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F7F2E8] mb-4">
          Ready to begin?
        </h2>
        <p className="text-sm text-[#F7F2E8]/70 mb-8 max-w-xl mx-auto">
          Book a private discovery consultation with one of our curators. No obligation, no pressure — just a conversation about where the world is calling you.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold text-[#0A1628] bg-gradient-to-r from-[#C8A44D] via-[#E0C579] to-[#C8A44D] hover:shadow-[0_0_30px_rgba(200,164,77,0.4)] transition-all duration-300 rounded-sm">
          <span>Start Your Journey</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
