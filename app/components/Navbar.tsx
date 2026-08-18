"use client";

import {
  ArrowRight,
  Menu,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  onOpenQuiz: () => void;
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenQuiz, onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Live Simulator", href: "#simulator" },
    { name: "ROI Calculator", href: "#calculator" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "7-Day Blueprint", href: "#blueprint" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090D16]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54] p-[1px] shadow-lg shadow-[#25D366]/20 group-hover:shadow-[#25D366]/40 transition-all duration-300">
              <div className="w-full h-full bg-[#090D16] rounded-[11px] flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#25D366] rounded-full animate-pulse-ring" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  AIT
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30">
                  WABA
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium hidden sm:block">
                WhatsApp Automation Agency
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-gray-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenQuiz}
              className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
            >
              <Zap className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Free Automation Audit</span>
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-xl group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-[11px] bg-[#090D16] group-hover:bg-[#090D16]/80 text-white transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Book Strategy Call</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform text-[#25D366]" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0F172A]/95 border border-white/10 backdrop-blur-xl shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center gap-2 px-2 py-1 text-xs text-[#25D366] font-medium bg-[#25D366]/10 rounded-lg">
              <ShieldCheck className="w-4 h-4" />
              <span>Meta Official Cloud API Agency Partner</span>
            </div>
            <div className="grid grid-cols-2 gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="w-full text-center text-xs font-semibold py-2.5 px-4 rounded-xl bg-white/10 text-white hover:bg-white/15 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 text-[#25D366]" />
                Free 2-Min Automation Audit
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center text-xs font-semibold py-2.5 px-4 rounded-xl bg-[#25D366] text-[#090D16] hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 font-bold"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Book Strategy Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
