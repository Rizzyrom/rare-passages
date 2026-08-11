import React from "react";
import Link from "next/link";
import { Compass, Shield, Award, Leaf, Mail, Globe, ArrowRight } from "lucide-react";
import { PORTFOLIO_VERTICALS } from "@/data/verticals";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-[#050B14] border-t border-[#C8A44D]/25 text-[#F7F2E8] pt-16 pb-12 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A44D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7A8471]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-[#C8A44D] bg-[#13253F] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#C8A44D]" />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-wider text-[#F7F2E8] uppercase">
                  Rare Passages
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-[#7A8471] font-medium uppercase -mt-1">
                  Global Portfolio Authority
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#F7F2E8]/70 leading-relaxed max-w-md">
              Rare Passages is the parent portfolio brand for extraordinary travel curators. We house specialist verticals across African safaris, polar maritime expeditions, private island sanctuaries, and grand overland journeys.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#C8A44D]">
                <Shield className="w-4 h-4 shrink-0 text-[#C8A44D]" />
                <span>100% Vetted Operators & Restricted Concessions</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#7A8471]">
                <Leaf className="w-4 h-4 shrink-0 text-[#7A8471]" />
                <span>2.5% Revenue Direct Commitment to Wilderness Conservation</span>
              </div>
            </div>
          </div>

          {/* Col 3: Specialist Verticals */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#C8A44D] tracking-wide mb-4">
              Portfolio Verticals
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider">
              {PORTFOLIO_VERTICALS.map((vertical) => (
                <li key={vertical.id}>
                  <Link
                    href={`/portfolio#${vertical.slug}`}
                    className="text-[#F7F2E8]/80 hover:text-[#C8A44D] transition-colors flex items-center justify-between group"
                  >
                    <span>{vertical.name}</span>
                    <span className="text-[10px] text-[#7A8471] group-hover:text-[#C8A44D]">
                      {vertical.status === "active" ? "Active" : "Horizon"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Institutional Brand Pages */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#C8A44D] tracking-wide mb-4">
              Brand Architecture
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#F7F2E8]/80">
              <li>
                <Link href="/about" className="hover:text-[#C8A44D] transition-colors">
                  Brand Story & Vision
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#C8A44D] transition-colors">
                  Portfolio Showcase
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-[#C8A44D] transition-colors">
                  Methodology & Vetting
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C8A44D] transition-colors">
                  Bespoke Matching Form
                </Link>
              </li>
              <li>
                <a href="https://safariawaits.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8A44D] transition-colors inline-flex items-center gap-1">
                  <span>Safari Awaits Flagship</span>
                  <ArrowRight className="w-3 h-3 text-[#C8A44D]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Governance & Direct Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#C8A44D] tracking-wide mb-4">
              Governance & Inquiry
            </h4>
            <p className="text-xs text-[#F7F2E8]/70 leading-relaxed mb-4">
              For private office inquiries, media relations, or institutional partnership evaluations:
            </p>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:curator@rarepassages.com"
                className="inline-flex items-center gap-2 text-[#C8A44D] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>curator@rarepassages.com</span>
              </a>
              <div className="text-[#7A8471] text-[11px] pt-1">
                Domain: rarepassages.com
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7A8471]">
          <div>
            © {new Date().getFullYear()} Rare Passages Portfolio Authority. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#C8A44D] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C8A44D] transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/20">|</span>
            <span>Non-Direct Consumer Sales Notice: Portfolio Showcase & Advisory Authority</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
