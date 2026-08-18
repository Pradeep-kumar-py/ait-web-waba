"use client";

import {
  ArrowRight,
  CheckCircle,
  FileCode,
  Link,
  Rocket,
  ShieldCheck,
  Sliders,
  Sparkles,
} from "lucide-react";

interface ProcessTimelineProps {
  onOpenBooking: () => void;
}

export default function ProcessTimeline({
  onOpenBooking,
}: ProcessTimelineProps) {
  const steps = [
    {
      id: "step-1",
      day: "Day 1",
      title: "Discovery & Conversion Blueprint",
      icon: <FileCode className="w-5 h-5 text-[#25D366]" />,
      desc: "We analyze your top 50 customer questions, current lead channels, pricing, and booking process to craft an airtight conversation tree.",
      deliverable: "Custom WhatsApp Architecture Map",
    },
    {
      id: "step-2",
      day: "Days 2–3",
      title: "AI Flow & Copywriting Engine",
      icon: <Sliders className="w-5 h-5 text-[#38BDF8]" />,
      desc: "We write high-converting, human-like dialogue, program interactive buttons, and train the AI LLM on your unique business knowledge base.",
      deliverable: "Interactive Demo Prototype",
    },
    {
      id: "step-3",
      day: "Days 4–5",
      title: "Meta API & Stack Integration",
      icon: <Link className="w-5 h-5 text-[#A855F7]" />,
      desc: "We connect your official Meta WhatsApp Business account, connect Google Sheets/CRM, Calendly, Stripe, and Shopify webhooks seamlessly.",
      deliverable: "Live End-to-End API Connections",
    },
    {
      id: "step-4",
      day: "Day 6",
      title: "Stress Testing & Staff Onboarding",
      icon: <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />,
      desc: "We simulate 100+ edge cases and show your team how to view chats, monitor leads, and take over conversations in 1 click when needed.",
      deliverable: "15-Min Staff Video Guide + Sandbox Signoff",
    },
    {
      id: "step-5",
      day: "Day 7",
      title: "Official Launch & Optimization",
      icon: <Rocket className="w-5 h-5 text-[#10B981]" />,
      desc: "We switch on your live bot, route your website/Instagram/ad traffic, and monitor the first 500 conversations to ensure perfection.",
      deliverable: "Fully Autonomous 24/7 Machine",
    },
  ];

  return (
    <section id="blueprint" className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/20">
            Zero Tech Headaches
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Our 7-Day <span className="text-gradient-wa">Done-For-You</span>{" "}
            Blueprint.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            You don't need to write code, configure APIs, or learn prompt
            engineering. We deliver a complete, turn-key automation machine in 1
            week.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {steps.map((step) => (
            <div
              key={step.id}
              className="glass-card rounded-2xl p-5 flex flex-col justify-between relative group hover:border-[#25D366]/40 transition-all duration-300"
            >
              <div>
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30">
                    {step.day}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Deliverable Tag */}
              <div className="mt-4 pt-3 border-t border-white/5">
                <span className="text-[10px] uppercase font-bold text-gray-500 block mb-1">
                  Deliverable:
                </span>
                <p className="text-[11px] font-semibold text-[#25D366] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 shrink-0" />
                  <span>{step.deliverable}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl glass-panel border border-[#25D366]/30">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
              <Sparkles className="w-4 h-4 text-[#25D366]" />
              <span>
                We guarantee live launch within 7 business days or your setup
                fee is 100% refunded.
              </span>
            </div>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#090D16] text-xs font-bold transition-all shadow-md flex items-center gap-1.5 shrink-0"
            >
              <span>Reserve Your 7-Day Sprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
