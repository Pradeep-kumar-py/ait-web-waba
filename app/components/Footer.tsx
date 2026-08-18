"use client";

import confetti from "canvas-confetti";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

interface FooterProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export default function Footer({ onOpenBooking, onOpenQuiz }: FooterProps) {
  const [playbookEmail, setPlaybookEmail] = useState("");
  const [downloadSent, setDownloadSent] = useState(false);

  const handlePlaybookDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playbookEmail.trim()) return;
    setDownloadSent(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#25D366", "#128C7E", "#38BDF8"],
    });
  };

  return (
    <footer className="bg-[#05080E] text-gray-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Lead Magnet CTA Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0C1F18] via-[#0D1822] to-[#0A1118] border border-[#25D366]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#25D366] bg-[#25D366]/15 px-2.5 py-1 rounded-md border border-[#25D366]/30 inline-flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>Free Lead Magnet for Small Business Owners</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Download the 2026 WhatsApp Automation Playbook
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Get our exact 15 high-converting conversation scripts, appointment
              booking flows, and Meta API setup checklist.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {!downloadSent ? (
              <form
                onSubmit={handlePlaybookDownload}
                className="flex flex-col sm:flex-row gap-2 max-w-md w-full"
              >
                <input
                  type="email"
                  required
                  value={playbookEmail}
                  onChange={(e) => setPlaybookEmail(e.target.value)}
                  placeholder="Enter your business email"
                  className="px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#25D366] flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#090D16] font-bold text-xs transition-all shrink-0 flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25"
                >
                  <span>Get Free PDF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-[#25D366]/20 border border-[#25D366] text-white text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                <span>
                  Playbook PDF dispatched to <strong>{playbookEmail}</strong>!
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-[#090D16] font-extrabold shadow-md">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                AIT WABA
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              AIT is a specialized agency building done-for-you WhatsApp
              automation, AI chatbots, and CRM workflows exclusively for small
              businesses.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#25D366] font-semibold bg-[#25D366]/10 px-3 py-1.5 rounded-xl border border-[#25D366]/20 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Meta Cloud API Partner</span>
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  AI Lead Qualification
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  Automated Booking
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Catalog & Pay
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  Support & Human Handover
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  98% Open Rate Broadcasts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#simulator"
                  className="hover:text-white transition-colors"
                >
                  Dental & Medical Clinics
                </a>
              </li>
              <li>
                <a
                  href="#simulator"
                  className="hover:text-white transition-colors"
                >
                  Restaurants & Cafes
                </a>
              </li>
              <li>
                <a
                  href="#simulator"
                  className="hover:text-white transition-colors"
                >
                  Real Estate Agencies
                </a>
              </li>
              <li>
                <a
                  href="#simulator"
                  className="hover:text-white transition-colors"
                >
                  E-Commerce & D2C Stores
                </a>
              </li>
              <li>
                <a
                  href="#simulator"
                  className="hover:text-white transition-colors"
                >
                  Home Services & Trades
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onOpenQuiz}
                  className="hover:text-white text-left transition-colors"
                >
                  Free Readiness Quiz
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="hover:text-white text-left transition-colors"
                >
                  Book 15-Min Strategy Call
                </button>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="hover:text-white transition-colors"
                >
                  ROI Calculator
                </a>
              </li>
              <li>
                <a
                  href="#blueprint"
                  className="hover:text-white transition-colors"
                >
                  7-Day Launch Blueprint
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="hover:text-white transition-colors"
                >
                  Case Studies & Proof
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} AIT Automation Agency. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-gray-400 cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-gray-400 cursor-pointer">
              Meta API Compliance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
