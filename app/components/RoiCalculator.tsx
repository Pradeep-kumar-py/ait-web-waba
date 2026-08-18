"use client";

import confetti from "canvas-confetti";
import {
  ArrowRight,
  Calculator,
  Clock,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export default function RoiCalculator({ onOpenBooking }: RoiCalculatorProps) {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(350);
  const [dealValue, setDealValue] = useState<number>(180);
  const [currentConversion, setCurrentConversion] = useState<number>(8); // 8%

  // Calculations:
  // With AIT sub-3s automation, conversion typically increases by +2.2x
  const newConversionRate = Math.min(Math.round(currentConversion * 2.2), 40);
  const currentMonthlyRevenue =
    monthlyLeads * (currentConversion / 100) * dealValue;
  const newMonthlyRevenue =
    monthlyLeads * (newConversionRate / 100) * dealValue;
  const extraMonthlyRevenue = Math.max(
    0,
    Math.round(newMonthlyRevenue - currentMonthlyRevenue),
  );
  const extraAnnualRevenue = extraMonthlyRevenue * 12;

  // Staff hours saved: ~4.5 minutes per repetitive chat lead handling
  const monthlyHoursSaved = Math.round((monthlyLeads * 4.5) / 60);

  const handleCelebrate = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#25D366", "#128C7E", "#38BDF8", "#F59E0B"],
    });
  };

  return (
    <section
      id="calculator"
      className="py-24 bg-[#080D17] relative overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#25D366]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/20 inline-flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Estimator</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Calculate Your WhatsApp{" "}
            <span className="text-gradient-wa">Revenue Potential.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            See how much additional revenue your business could generate by
            replying in under 3 seconds and automating follow-ups.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Controls / Sliders */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 glass-panel border border-white/10 space-y-7 shadow-2xl">
            {/* Slider 1: Monthly Leads */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="leads-range"
                  className="text-xs sm:text-sm font-semibold text-gray-200"
                >
                  Monthly Inbound WhatsApp Leads / Chats
                </label>
                <span className="text-base font-bold text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-lg border border-[#25D366]/30">
                  {monthlyLeads.toLocaleString()} chats
                </span>
              </div>
              <input
                id="leads-range"
                type="range"
                min="50"
                max="3000"
                step="25"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#25D366]"
              />
              <div className="flex justify-between text-[11px] text-gray-500">
                <span>50 / month</span>
                <span>1,500 / month</span>
                <span>3,000+ / month</span>
              </div>
            </div>

            {/* Slider 2: Average Deal Value */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="deal-value-range"
                  className="text-xs sm:text-sm font-semibold text-gray-200"
                >
                  Average Order / Appointment / Deal Value ($)
                </label>
                <span className="text-base font-bold text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-lg border border-[#38BDF8]/30">
                  ${dealValue.toLocaleString()}
                </span>
              </div>
              <input
                id="deal-value-range"
                type="range"
                min="20"
                max="2500"
                step="10"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#38BDF8]"
              />
              <div className="flex justify-between text-[11px] text-gray-500">
                <span>$20 (Retail/Food)</span>
                <span>$500 (Clinic/Services)</span>
                <span>$2,500+ (High-Ticket)</span>
              </div>
            </div>

            {/* Slider 3: Current Manual Conversion */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="conversion-range"
                  className="text-xs sm:text-sm font-semibold text-gray-200"
                >
                  Current Manual Lead-to-Sale Conversion (%)
                </label>
                <span className="text-base font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/30">
                  {currentConversion}%
                </span>
              </div>
              <input
                id="conversion-range"
                type="range"
                min="2"
                max="25"
                step="1"
                value={currentConversion}
                onChange={(e) => setCurrentConversion(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-gray-500">
                <span>2% (Slow replies)</span>
                <span>10% (Average)</span>
                <span>25% (High)</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-gray-400 flex items-center gap-2 border-t border-white/5">
              <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>
                Based on audited benchmark data across 85+ active small business
                client deployments.
              </span>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#11241C] via-[#0E1A22] to-[#0A1118] border-2 border-[#25D366]/40 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Corner Badge */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/15 px-2.5 py-1 rounded-md border border-[#25D366]/30">
                Projected Impact
              </span>
              <button
                type="button"
                onClick={handleCelebrate}
                className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg hover:bg-white/20 transition-colors"
                title="Celebrate ROI"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Celebrate</span>
              </button>
            </div>

            {/* Big Revenue Stat */}
            <div className="space-y-1">
              <span className="text-xs text-gray-400 font-medium">
                Estimated Extra Monthly Revenue:
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-baseline gap-1">
                <span className="text-[#25D366]">
                  +${extraMonthlyRevenue.toLocaleString()}
                </span>
                <span className="text-xs font-normal text-gray-400">/ mo</span>
              </div>
              <p className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>
                  +${extraAnnualRevenue.toLocaleString()} extra in annual profit
                </span>
              </p>
            </div>

            {/* Secondary Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Time Saved</span>
                </div>
                <div className="text-xl font-bold text-white">
                  {monthlyHoursSaved} hrs{" "}
                  <span className="text-xs font-normal text-gray-400">
                    / mo
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Conversion</span>
                </div>
                <div className="text-xl font-bold text-white">
                  {currentConversion}% →{" "}
                  <span className="text-[#25D366]">{newConversionRate}%</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={() => {
                handleCelebrate();
                setTimeout(() => onOpenBooking(), 400);
              }}
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-[#090D16] font-extrabold text-sm hover:opacity-95 transition-all shadow-xl shadow-[#25D366]/30 flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>Claim This ROI For Your Business</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
