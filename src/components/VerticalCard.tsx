import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Vertical } from "@/data/verticals";
import { ArrowUpRight, Compass, ShieldCheck, MapPin, Users, Sparkles, Anchor, Trees } from "lucide-react";

interface VerticalCardProps {
  vertical: Vertical;
  featured?: boolean;
}

export const VerticalCard: React.FC<VerticalCardProps> = ({ vertical, featured = false }) => {
  const isFlagship = vertical.status === "active" && vertical.id === "safari-awaits";

  return (
    <div
      id={vertical.slug}
      className={`group relative rounded-lg overflow-hidden border transition-all duration-500 bg-[#13253F]/80 backdrop-blur-md flex flex-col ${
        featured
          ? "border-[#C8A44D]/50 shadow-[0_0_30px_rgba(200,164,77,0.15)] hover:border-[#C8A44D] hover:shadow-[0_0_40px_rgba(200,164,77,0.25)]"
          : "border-[#C8A44D]/20 hover:border-[#C8A44D]/60 hover:shadow-[0_0_25px_rgba(200,164,77,0.15)]"
      }`}
    >
      {/* Top Banner Image with Gradient Overlay */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A1628]">
        <Image
          src={vertical.heroImage}
          alt={vertical.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13253F] via-[#13253F]/40 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full backdrop-blur-md border ${
              isFlagship
                ? "bg-[#C8A44D] text-[#0A1628] border-[#E0C579]"
                : vertical.status === "active"
                ? "bg-[#7A8471]/90 text-[#F7F2E8] border-[#9DA794]"
                : "bg-[#0A1628]/80 text-[#C8A44D] border-[#C8A44D]/40"
            }`}
          >
            {isFlagship && <Sparkles className="w-3 h-3" />}
            {vertical.statusLabel}
          </span>
        </div>

        {/* Category Pill */}
        <div className="absolute top-4 right-4">
          <span className="text-[10px] uppercase tracking-wider text-[#F7F2E8]/80 bg-[#0A1628]/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10">
            {vertical.category}
          </span>
        </div>

        {/* Vertical Title overlay */}
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F2E8] group-hover:text-[#C8A44D] transition-colors">
            {vertical.name}
          </h3>
          <p className="text-xs text-[#C8A44D] font-medium tracking-wide mt-1">
            {vertical.tagline}
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <p className="text-sm text-[#F7F2E8]/80 leading-relaxed font-normal">
          {vertical.shortDescription}
        </p>

        {/* Featured Destinations */}
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#C8A44D] font-semibold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Key Sanctuary Regions</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {vertical.featuredDestinations.map((dest, idx) => (
              <span
                key={idx}
                className="text-[11px] text-[#F7F2E8]/90 bg-[#0A1628]/60 border border-[#C8A44D]/20 px-2.5 py-1 rounded-sm"
              >
                {dest}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <div className="text-[11px] uppercase tracking-wider text-[#7A8471] font-bold">
            Curated Standards & Access
          </div>
          <ul className="space-y-1.5 text-xs text-[#F7F2E8]/80">
            {vertical.keyHighlights.slice(0, 3).map((hl, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#C8A44D] font-serif text-sm font-bold">•</span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Meta stats bar */}
        <div className="grid grid-cols-2 gap-2 text-[11px] bg-[#0A1628]/70 p-3 rounded-sm border border-white/5 text-[#F7F2E8]/70">
          <div>
            <span className="block text-[9px] uppercase tracking-widest text-[#7A8471]">Capacity Limit</span>
            <span className="font-semibold text-[#F7F2E8]">{vertical.guestCapacity}</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-widest text-[#7A8471]">Sustainability</span>
            <span className="font-semibold text-[#C8A44D] truncate block">{vertical.sustainabilityRating}</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          {vertical.externalUrl ? (
            <a
              href={vertical.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.18em] font-semibold text-[#0A1628] bg-gradient-to-r from-[#C8A44D] to-[#E0C579] hover:from-[#E0C579] hover:to-[#C8A44D] transition-all duration-300 rounded-sm shadow-md"
            >
              <span>Visit Vertical Site ({vertical.name})</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <Link
              href={`/contact?vertical=${vertical.slug}`}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.18em] font-semibold text-[#F7F2E8] bg-[#0A1628] border border-[#C8A44D]/40 hover:border-[#C8A44D] hover:bg-[#13253F] transition-all duration-300 rounded-sm"
            >
              <span>Inquire For Access / Allocation</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8A44D]" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
