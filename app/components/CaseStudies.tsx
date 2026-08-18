"use client";

import { ArrowRight, TrendingUp } from "lucide-react";

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export default function CaseStudies({ onOpenBooking }: CaseStudiesProps) {
  const caseStudies = [
    {
      id: "case-dental",
      clientName: "Dr. Marcus Vance",
      role: "Owner & Lead Dentist",
      business: "SmileCraft Dental Care (Local Clinic)",
      metric: "+142 New Patients / Month",
      submetric: "85% reduction in missed after-hours calls",
      quote:
        "Before AIT, our receptionists were missing weekend inquiries and taking 4 hours to confirm bookings. Now the WhatsApp bot qualifies insurance, books cleanings directly into Dentrix, and sends reminders automatically. It's like having a 24/7 receptionist for a fraction of the cost.",
      tags: ["Healthcare", "Calendar Booking", "Intake Sync"],
      stats: [
        { label: "Booked Appointments", value: "+340%" },
        { label: "No-Show Rate", value: "Down to 3%" },
      ],
    },
    {
      id: "case-restaurant",
      clientName: "Elena & Marco Rostova",
      role: "Co-Founders",
      business: "Bella Roma Italian Kitchen (F&B)",
      metric: "$18,400 Monthly Direct Orders",
      submetric: "Saved $3,200 in delivery app commissions",
      quote:
        "Third-party delivery apps were taking 30% of our margins. AIT built us a WhatsApp ordering catalog where loyal customers can re-order in 2 taps. On Friday nights, the bot takes 40+ orders simultaneously without a single mistake.",
      tags: ["Restaurant", "Catalog Checkout", "VIP Broadcasts"],
      stats: [
        { label: "Repeat Orders", value: "+62%" },
        { label: "Commission Saved", value: "$3,200/mo" },
      ],
    },
    {
      id: "case-realty",
      clientName: "Julian Chen",
      role: "Principal Broker",
      business: "Apex Peak Realty (Real Estate Agency)",
      metric: "4.1x Faster Lead-to-Tour Rate",
      submetric: "$1.4M property deal closed via bot-qualified lead",
      quote:
        "In real estate, if you don't answer a portal lead in 5 minutes, they contact another broker. AIT's bot instantly sends high-res PDF brochures and books property tours directly onto our agents' Google Calendars.",
      tags: ["Real Estate", "HubSpot Sync", "Brochure AI"],
      stats: [
        { label: "Response Speed", value: "< 2.5 sec" },
        { label: "Qualified Buyer Rate", value: "89%" },
      ],
    },
    {
      id: "case-ecommerce",
      clientName: "Maya Sharma",
      role: "Founder",
      business: "GlowVeda Botanicals (D2C Skincare)",
      metric: "38% Cart Recovery Rate",
      submetric: "$24,500 extra revenue in first 60 days",
      quote:
        "Our email cart recovery was hovering at 7%. When AIT switched us to automated WhatsApp discount triggers via Shopify webhooks, our recovery exploded to 38%. WhatsApp is now our highest ROI channel.",
      tags: ["E-Commerce", "Shopify Webhooks", "Cart Recovery"],
      stats: [
        { label: "Open Rate", value: "98.2%" },
        { label: "Extra Revenue", value: "+$24.5k" },
      ],
    },
  ];

  return (
    <section
      id="case-studies"
      className="py-24 bg-[#070B12] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/20">
            Real Small Business Case Studies
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Tested & Proven with{" "}
            <span className="text-gradient-wa">Real Results.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            See how small business owners across clinics, restaurants, real
            estate, and retail scaled their revenue on autopilot.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-[#25D366]/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Header: Metric & Tags */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-sm font-extrabold text-[#25D366] bg-[#25D366]/15 px-3 py-1 rounded-lg border border-[#25D366]/30 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>{study.metric}</span>
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {study.tags.map((tag) => (
                      <span
                        key={`${study.id}-${tag}`}
                        className="text-[10px] text-gray-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Submetric */}
                <p className="text-xs text-gray-300 font-medium mb-4">
                  {study.submetric}
                </p>

                {/* Quote */}
                <div className="relative pl-4 border-l-2 border-[#25D366]/50 my-5">
                  <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                    "{study.quote}"
                  </p>
                </div>

                {/* Micro Stats Grid */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/5 my-4">
                  {study.stats.map((stat) => (
                    <div
                      key={`${study.id}-${stat.label}`}
                      className="p-2.5 rounded-xl bg-white/[0.02]"
                    >
                      <div className="text-[10px] text-gray-400 font-medium">
                        {stat.label}
                      </div>
                      <div className="text-lg font-bold text-white mt-0.5">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-[#090D16] font-bold text-xs">
                    {study.clientName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {study.clientName}
                    </h4>
                    <p className="text-[11px] text-gray-400">
                      {study.business}
                    </p>
                  </div>
                </div>
                <div className="flex text-[#25D366] text-xs">★★★★★</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-xs transition-all backdrop-blur-sm"
          >
            <span>
              Want similar numbers for your business? Book a free audit
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#25D366]" />
          </button>
        </div>
      </div>
    </section>
  );
}
