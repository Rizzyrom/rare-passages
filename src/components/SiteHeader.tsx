"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio Verticals" },
    { href: "/about", label: "About & Principles" },
    { href: "/how-we-work", label: "How We Work" },
    { href: "/contact", label: "Contact & Inquiries" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0A1628]/90 backdrop-blur-md border-b border-[#C8A44D]/20 py-4 shadow-2xl shadow-black/40"
          : "bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/50 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Emblem */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#C8A44D] rounded-sm p-1"
        >
          <div className="relative w-10 h-10 rounded-full border border-[#C8A44D]/50 bg-[#13253F] flex items-center justify-center transition-all duration-300 group-hover:border-[#C8A44D] group-hover:shadow-[0_0_15px_rgba(200,164,77,0.3)]">
            <Compass className="w-5 h-5 text-[#C8A44D] transition-transform duration-500 group-hover:rotate-45" />
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#F7F2E8] group-hover:text-[#C8A44D] transition-colors uppercase">
              Rare Passages
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-[#7A8471] font-medium uppercase -mt-1">
              Portfolio Curator
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-[#C8A44D] font-semibold"
                    : "text-[#F7F2E8]/80 hover:text-[#C8A44D]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A44D] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#0A1628] bg-gradient-to-r from-[#C8A44D] to-[#E0C579] hover:from-[#E0C579] hover:to-[#C8A44D] transition-all duration-300 rounded-sm shadow-md hover:shadow-[0_0_20px_rgba(200,164,77,0.4)]"
          >
            <span>Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 text-[#F7F2E8] hover:text-[#C8A44D] focus:outline-none focus:ring-2 focus:ring-[#C8A44D] rounded-sm"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#0A1628] border-b border-[#C8A44D]/30 p-6 shadow-2xl z-40 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.2em] py-2 border-b border-white/5 transition-colors ${
                    isActive ? "text-[#C8A44D] font-bold" : "text-[#F7F2E8]/80 hover:text-[#C8A44D]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold text-[#0A1628] bg-[#C8A44D] hover:bg-[#E0C579] transition-colors rounded-sm"
              >
                <span>Request Portfolio Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
