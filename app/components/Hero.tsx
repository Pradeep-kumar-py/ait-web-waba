"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock,
  PhoneCall,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import WhatsAppSimulator from "./WhatsAppSimulator";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export default function Hero({ onOpenBooking, onOpenQuiz }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#25D366]/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#128C7E]/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#25D366]/30 text-xs font-semibold backdrop-blur-sm shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
              </span>
              <span className="text-gray-300">
                #1 WhatsApp Automation Agency for Small Businesses
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Stop Losing Leads to Slow Replies. Turn WhatsApp Into Your{" "}
              <span className="text-gradient-wa">24/7 Sales Engine.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-white font-semibold">AIT</strong> builds,
              integrates, and manages custom AI WhatsApp chatbots, automated
              calendar booking, and CRM pipelines for small businesses.{" "}
              <span className="text-[#25D366] font-medium">
                100% Done-For-You in 7 Days.
              </span>
            </p>

            {/* Key Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-gray-300 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Instant &lt; 3-second responses 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Auto-sync with Google Sheets & CRMs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Official Meta Cloud API (Zero Bans)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Seamless Human Handover anytime</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-[#090D16] font-bold text-sm hover:opacity-95 transition-all shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 flex items-center justify-center gap-2 group active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book 15-Min Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onOpenQuiz}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Zap className="w-4 h-4 text-[#25D366]" />
                <span>Take 2-Min Audit Quiz</span>
              </button>
            </div>

            {/* Social Proof & Guarantees */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 border-2 border-[#090D16] flex items-center justify-center text-[10px] text-white font-bold">
                    DR
                  </div>
                  <div className="w-7 h-7 rounded-full bg-cyan-700 border-2 border-[#090D16] flex items-center justify-center text-[10px] text-white font-bold">
                    MK
                  </div>
                  <div className="w-7 h-7 rounded-full bg-indigo-700 border-2 border-[#090D16] flex items-center justify-center text-[10px] text-white font-bold">
                    SL
                  </div>
                </div>
                <div>
                  <div className="flex text-[#25D366] text-[10px]">★★★★★</div>
                  <span className="font-medium text-gray-300">
                    Trusted by 85+ Small Businesses
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>100% Risk-Free 14-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive WhatsApp Simulator */}
          <div className="lg:col-span-6" id="simulator">
            <div className="text-center lg:text-left mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-md border border-[#25D366]/20">
                Interactive Live Preview
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Experience AIT Automation in Action
              </h3>
              <p className="text-xs text-gray-400">
                Switch industries below and test live AI conversation flows:
              </p>
            </div>
            <WhatsAppSimulator />
          </div>
        </div>

        {/* Floating Ticker / Key Numbers Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl glass-panel border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0 border border-[#25D366]/30">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white">98%</div>
              <div className="text-xs text-gray-400">Message Open Rate</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/15 flex items-center justify-center text-[#38BDF8] shrink-0 border border-[#38BDF8]/30">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white">&lt; 3s</div>
              <div className="text-xs text-gray-400">Avg. Response Time</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-xl bg-[#A855F7]/15 flex items-center justify-center text-[#A855F7] shrink-0 border border-[#A855F7]/30">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white">3.8x</div>
              <div className="text-xs text-gray-400">More Bookings / Leads</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 flex items-center justify-center text-[#F59E0B] shrink-0 border border-[#F59E0B]/30">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white">68%</div>
              <div className="text-xs text-gray-400">Staff Workload Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
