"use client";

import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  Headphones,
  Send,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import { useState } from "react";

interface ServicesGridProps {
  onOpenBooking: () => void;
}

export default function ServicesGrid({ onOpenBooking }: ServicesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const services = [
    {
      id: "lead-bot",
      category: "sales",
      icon: <Bot className="w-6 h-6 text-[#25D366]" />,
      title: "24/7 AI Lead Qualifier & Instant Closer",
      tagline: "Never let another hot prospect wait more than 3 seconds.",
      metric: "+340% Higher Lead-to-Sale Conversion",
      features: [
        "Instant greeting & tailored questionnaire",
        "Smart lead budget & intent qualification",
        "Auto-tags hot vs cold leads in your CRM",
        "Automatic email & WhatsApp alert to sales rep",
      ],
      integrations: ["Meta Cloud API", "Google Sheets", "HubSpot", "Zapier"],
    },
    {
      id: "appointment-engine",
      category: "booking",
      icon: <Calendar className="w-6 h-6 text-[#38BDF8]" />,
      title: "Autonomous Appointment Booking System",
      tagline: "Fill your clinic, salon, or agency calendar on autopilot.",
      metric: "Zero Double-Bookings & -85% No-Shows",
      features: [
        "Direct slot lookup via Google Calendar/Calendly",
        "Pre-appointment intake form collection",
        "Automated WhatsApp reminder 24h & 2h before",
        "1-click reschedule or cancellation flow",
      ],
      integrations: ["Google Calendar", "Calendly", "Acuity", "Notion"],
    },
    {
      id: "whatsapp-commerce",
      category: "sales",
      icon: <ShoppingBag className="w-6 h-6 text-[#F59E0B]" />,
      title: "WhatsApp Catalog & 1-Tap Ordering",
      tagline: "Turn chat conversations into high-converting storefronts.",
      metric: "+42% Higher Average Order Value",
      features: [
        "Interactive product catalog with photos & price",
        "In-chat cart building & custom modifiers",
        "WhatsApp Pay / Stripe / Razorpay link checkout",
        "Instant order confirmation & tracking link",
      ],
      integrations: ["Shopify", "WooCommerce", "Stripe", "WhatsApp Pay"],
    },
    {
      id: "support-handover",
      category: "support",
      icon: <Headphones className="w-6 h-6 text-[#A855F7]" />,
      title: "AI Support & Multi-Agent Human Handover",
      tagline: "Solve 70% of common queries while empowering your team.",
      metric: "68% Drop in Support Ticket Volume",
      features: [
        "AI answers policies, hours, FAQs, and pricing",
        "Seamless transfer to live staff when requested",
        "Multi-agent team inbox on a single phone number",
        "Sentiment analysis & escalation triggers",
      ],
      integrations: ["Zendesk", "Intercom", "Slack", "Live Team Inbox"],
    },
    {
      id: "broadcast-sequences",
      category: "growth",
      icon: <Send className="w-6 h-6 text-[#10B981]" />,
      title: "98% Open-Rate Broadcasts & Cart Recovery",
      tagline: "Replace low-converting email with targeted WhatsApp blasts.",
      metric: "98% Open Rate vs 18% Email Average",
      features: [
        "Meta-approved template creation & approval",
        "Abandoned cart & lapsed customer re-activation",
        "VIP customer segmentation by purchase history",
        "Built-in opt-out mechanism to protect reputation",
      ],
      integrations: ["Meta Marketing API", "Klaviyo Sync", "Shopify"],
    },
    {
      id: "review-referral",
      category: "growth",
      icon: <Star className="w-6 h-6 text-[#EC4899]" />,
      title: "Automated 5-Star Google Reviews & Referrals",
      tagline: "Turn happy clients into your best marketing channel.",
      metric: "+250% Growth in 5-Star Reviews",
      features: [
        "Triggers automatically post-service / delivery",
        "Filters positive feedback directly to Google Maps",
        "Private internal routing for constructive feedback",
        "Automated 'Refer-a-Friend' reward tracking",
      ],
      integrations: ["Google Business Profile", "Trustpilot", "SMS & WABA"],
    },
  ];

  const categories = [
    { id: "all", label: "All Automation Systems" },
    { id: "sales", label: "Lead Gen & Sales" },
    { id: "booking", label: "Bookings & Intake" },
    { id: "support", label: "Support & Handover" },
    { id: "growth", label: "Broadcasts & Reviews" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <section id="solutions" className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/20">
            Done-For-You Systems
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Everything Your Small Business Needs on{" "}
            <span className="text-gradient-wa">Autopilot.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            We don’t just give you software. AIT designs the flows, writes
            high-converting copy, connects your tools, and maintains your entire
            WhatsApp machine.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#25D366] text-[#090D16] shadow-lg shadow-[#25D366]/20 font-bold"
                  : "bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#25D366]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header with Icon & Metric Badge */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-md border border-[#25D366]/30">
                    {service.metric}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#25D366] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  {service.tagline}
                </p>

                {/* Feature Bullet List */}
                <div className="space-y-2.5 my-6 pt-2 border-t border-white/5">
                  {service.features.map((feat) => (
                    <div
                      key={`${service.id}-${feat}`}
                      className="flex items-start gap-2.5 text-xs text-gray-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Integrations & Action CTA */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block mb-1.5">
                    Syncs With Your Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.integrations.map((tool) => (
                      <span
                        key={`${service.id}-${tool}`}
                        className="text-[10px] font-medium text-gray-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-[#25D366] text-gray-300 hover:text-[#090D16] text-xs font-bold border border-white/10 hover:border-[#25D366] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Deploy This Flow</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#128C7E]/20 via-[#0B1A24] to-[#25D366]/10 border border-[#25D366]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#25D366]" />
              Need a Custom Workflow for Your Specific Industry?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              We build custom webhooks, ERP integrations, and bespoke AI logic
              tailored to your exact business operations.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#090D16] font-extrabold text-xs transition-all shrink-0 shadow-lg shadow-[#25D366]/30 flex items-center gap-2"
          >
            <span>Request Custom Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
