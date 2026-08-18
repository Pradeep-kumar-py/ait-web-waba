"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export default function FaqSection({ onOpenBooking }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: "faq-banning",
      question: "Will our existing WhatsApp phone number get banned by Meta?",
      answer:
        "Never. Unofficial third-party scraping tools and Chrome extensions cause number bans. At AIT, we build exclusively on the official Meta WhatsApp Cloud API (WABA) registered under your verified Meta Business Manager. Your number is 100% safe, compliant, and backed by Meta's official green checkmark eligibility.",
    },
    {
      id: "faq-human-handover",
      question: "Can my team still step in and reply manually to customers?",
      answer:
        "Yes, absolutely. We configure a unified multi-agent shared team inbox. Whenever a customer types 'Speak to agent' or asks a question requiring human review, the AI pauses and immediately pings your staff on Slack, email, or your team inbox so they can take over with a single click.",
    },
    {
      id: "faq-crm-sync",
      question: "How does AIT sync with our Google Sheets, Calendly, or CRM?",
      answer:
        "We build real-time two-way webhooks. When a lead gives their name, email, budget, or preferred appointment slot, it is instantly written into your Google Sheet, HubSpot, Notion, Shopify, or Google Calendar without you having to lift a finger.",
    },
    {
      id: "faq-coding",
      question: "Do I need any technical knowledge or coding skills?",
      answer:
        "Zero. AIT is a 100% Done-For-You agency. We write the conversation scripts, configure the AI models, connect the APIs, design the media templates, train your team, and handle ongoing maintenance.",
    },
    {
      id: "faq-timeline",
      question: "How long does it take from our first call to going live?",
      answer:
        "Our standard Done-For-You blueprint takes exactly 7 business days. We handle discovery on Day 1, conversation flow creation on Days 2–3, API integrations on Days 4–5, testing on Day 6, and full live launch on Day 7.",
    },
    {
      id: "faq-updates",
      question: "What if we change our pricing, menu, or business hours later?",
      answer:
        "All our managed plans include continuous updates and prompt optimizations. Simply send us your updated PDF, menu, or pricing sheet, and our automation engineers update the AI knowledge base within 24 hours.",
    },
    {
      id: "faq-guarantee",
      question: "What is your 14-day performance guarantee?",
      answer:
        "If within 14 days of going live you are not thrilled with how smoothly your WhatsApp automation captures and manages leads, we will rework the system for free or refund your setup fee in full. We stand 100% behind our work.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#070B12] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/20 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Frequently Asked{" "}
            <span className="text-gradient-wa">Questions.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Everything you need to know about Meta WABA, number safety, and our
            7-day launch blueprint.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#111A24] border-[#25D366]/40 shadow-xl"
                    : "glass-card border-white/5 hover:border-white/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#25D366] text-[#090D16] rotate-180"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-white/10 text-center space-y-3">
          <h4 className="text-sm font-bold text-white">
            Have a custom question about your specific tech stack?
          </h4>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Book a quick 15-minute discovery call and an AIT automation
            architect will walk through your exact requirements.
          </p>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#090D16] text-xs font-bold transition-all shadow-md"
          >
            Ask Us on a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}
