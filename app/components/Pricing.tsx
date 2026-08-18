"use client";

import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";

interface PricingProps {
  onOpenBooking: () => void;
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: "plan-starter",
      name: "Starter Automator",
      badge: "Solo & Small Practice",
      description:
        "Ideal for solo practitioners, local clinics, and consultants who need 24/7 instant replies and booking.",
      setupFee: "$497",
      monthlyFee: isAnnual ? "$119" : "$149",
      billingPeriod: "/ month",
      highlight: false,
      features: [
        "Official Meta Cloud API Setup & Verification",
        "1 Smart Conversation Flow (Lead Gen or Booking)",
        "Google Sheets & Calendar Real-Time Sync",
        "Automated WhatsApp Appointment Reminders",
        "Instant Email & WhatsApp Alert to Owner",
        "Up to 1,000 monthly active conversations",
        "Standard Email Support (24h SLA)",
      ],
      ctaText: "Start with Starter",
    },
    {
      id: "plan-growth",
      name: "Growth Engine",
      badge: "Most Popular • 85% Choose This",
      description:
        "Complete autonomous sales, booking, catalog, and multi-agent handover machine for scaling businesses.",
      setupFee: "$997",
      monthlyFee: isAnnual ? "$239" : "$299",
      billingPeriod: "/ month",
      highlight: true,
      features: [
        "Everything in Starter Automator, plus:",
        "Custom-Trained AI LLM Bot on your business data",
        "Multi-Step Lead Qualification & Scoring Engine",
        "Multi-Agent Team Inbox (All staff on 1 number)",
        "Seamless Human Handover with 1-Click Takeover",
        "CRM Sync (HubSpot, Notion, Zoho, or Shopify)",
        "98% Open-Rate Broadcasts & Re-engagement sequences",
        "Up to 5,000 monthly active conversations",
        "Priority WhatsApp & Slack Support (2h SLA)",
      ],
      ctaText: "Claim Growth Engine",
    },
    {
      id: "plan-enterprise",
      name: "Enterprise Scale",
      badge: "Multi-Location & High Volume",
      description:
        "Bespoke backend integrations, dynamic database queries, and custom webhooks for high-volume operations.",
      setupFee: "$1,897",
      monthlyFee: isAnnual ? "$479" : "$599",
      billingPeriod: "/ month",
      highlight: false,
      features: [
        "Everything in Growth Engine, plus:",
        "Multi-Location & Branch Routing Bot",
        "Custom REST API & Webhook Pipelines (ERP/Database)",
        "In-Chat WhatsApp Pay / Stripe / COD Checkout",
        "Automated 5-Star Google Review Booster Funnel",
        "Unlimited monthly active conversations",
        "Dedicated Automation Engineer & Weekly Optimization",
        "VIP 30-Min Emergency SLA Guarantee",
      ],
      ctaText: "Deploy Enterprise",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/20">
            Simple & Transparent
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Invest in Automation That Pays For Itself in{" "}
            <span className="text-gradient-wa">30 Days.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            No surprise add-ons. 100% done-for-you setup with ongoing
            monitoring, API maintenance, and prompt updates.
          </p>

          {/* Billing Switch */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span
              className={`text-xs font-medium ${!isAnnual ? "text-white" : "text-gray-400"}`}
            >
              Monthly Managed
            </span>
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-white/10 p-1 transition-colors relative"
              aria-label="Toggle Annual Billing"
            >
              <div
                className={`w-4 h-4 rounded-full bg-[#25D366] transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-xs font-medium flex items-center gap-1.5 ${isAnnual ? "text-white" : "text-gray-400"}`}
            >
              <span>Annual Managed</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#132820] via-[#0E1B24] to-[#0A121A] border-2 border-[#25D366] shadow-2xl shadow-[#25D366]/15 lg:-translate-y-2"
                  : "glass-card border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-[#090D16] text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {!plan.highlight && (
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5 inline-block mb-3">
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-xl font-extrabold text-white mt-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-400 mt-2 min-h-[36px] leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="my-6 pt-5 border-t border-white/10 space-y-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      {plan.monthlyFee}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      {plan.billingPeriod}
                    </span>
                  </div>
                  <div className="text-xs text-[#25D366] font-semibold">
                    + {plan.setupFee} one-time 7-day build fee
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] uppercase font-bold text-gray-400 tracking-wider block">
                    What's Included:
                  </span>
                  {plan.features.map((feat) => (
                    <div
                      key={`${plan.id}-${feat}`}
                      className="flex items-start gap-2.5 text-xs text-gray-300"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 group active:scale-95 ${
                    plan.highlight
                      ? "bg-[#25D366] hover:bg-[#20bd5a] text-[#090D16] shadow-xl shadow-[#25D366]/30 font-black"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-[#25D366]/30 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left max-w-3xl mx-auto">
          <ShieldCheck className="w-10 h-10 text-[#25D366] shrink-0" />
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-white">
              100% Risk-Free 14-Day Performance Guarantee
            </h4>
            <p className="text-xs text-gray-400">
              If your WhatsApp automation does not run smoothly or capture leads
              within 14 days of launch, we will rework it for free or refund
              your setup fee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
