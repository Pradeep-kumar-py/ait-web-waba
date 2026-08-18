"use client";

import confetti from "canvas-confetti";
import { CheckCircle2, PhoneCall, Sparkles, X } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface AutomationQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AutomationQuizModal({
  isOpen,
  onClose,
}: AutomationQuizModalProps) {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [volume, setVolume] = useState("");
  const [contactData, setContactData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      setStep(4);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 },
        colors: ["#25D366", "#38BDF8", "#F59E0B"],
      });
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ["#25D366", "#128C7E", "#38BDF8"],
    });
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    setIndustry("");
    setBottleneck("");
    setVolume("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0F172A] border border-[#25D366]/40 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          aria-label="Close Quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded border border-[#25D366]/20">
              Free 2-Minute Audit
            </span>
            <span className="text-xs text-gray-400">Step {step} of 4</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {step === 4
              ? "Your Custom Automation Blueprint"
              : "WhatsApp Readiness Assessment"}
          </h3>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-gray-800 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#25D366] to-[#38BDF8] transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Step 1: Industry */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <p className="text-xs font-semibold text-gray-300">
              What type of business are you operating?
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                {
                  id: "ind-clinic",
                  label: "Dental / Medical Clinic",
                  icon: "🩺",
                },
                {
                  id: "ind-food",
                  label: "Restaurant / Cafe / Food",
                  icon: "🍕",
                },
                {
                  id: "ind-realty",
                  label: "Real Estate & Brokerage",
                  icon: "🏢",
                },
                { id: "ind-ecom", label: "E-Commerce / D2C Store", icon: "🛍️" },
                {
                  id: "ind-home",
                  label: "Home Services / Contractor",
                  icon: "🛠️",
                },
                {
                  id: "ind-consult",
                  label: "Consulting / Professional",
                  icon: "💼",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setIndustry(item.label);
                    setStep(2);
                  }}
                  className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center gap-2.5 transition-all ${
                    industry === item.label
                      ? "bg-[#25D366]/20 border-[#25D366] text-white shadow-md shadow-[#25D366]/10"
                      : "bg-white/[0.03] border-white/10 text-gray-300 hover:bg-white/[0.08]"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="leading-snug">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Bottleneck */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <p className="text-xs font-semibold text-gray-300">
              What is your single biggest WhatsApp headache right now?
            </p>
            <div className="space-y-2">
              {[
                {
                  id: "bn-after-hours",
                  label: "Losing hot leads after 5 PM and over weekends",
                },
                {
                  id: "bn-repetition",
                  label:
                    "Staff spending hours copying/pasting the same answers",
                },
                {
                  id: "bn-calendar",
                  label:
                    "No automated calendar booking / double-booking mistakes",
                },
                {
                  id: "bn-broadcast",
                  label:
                    "Low email open rates / Need high-converting WhatsApp broadcasts",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setBottleneck(item.label);
                    setStep(3);
                  }}
                  className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                    bottleneck === item.label
                      ? "bg-[#25D366]/20 border-[#25D366] text-white shadow-md"
                      : "bg-white/[0.03] border-white/10 text-gray-300 hover:bg-white/[0.08]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Volume */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <p className="text-xs font-semibold text-gray-300">
              Estimated incoming WhatsApp conversations per month?
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                {
                  id: "vol-low",
                  label: "Under 150 chats / mo",
                  desc: "Starting out",
                },
                {
                  id: "vol-med",
                  label: "150 – 500 chats / mo",
                  desc: "Steady flow",
                },
                {
                  id: "vol-high",
                  label: "500 – 2,000 chats / mo",
                  desc: "High volume",
                },
                {
                  id: "vol-scale",
                  label: "2,000+ chats / mo",
                  desc: "Scale / Multi-agent",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setVolume(item.label);
                    handleNextStep();
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    volume === item.label
                      ? "bg-[#25D366]/20 border-[#25D366] text-white"
                      : "bg-white/[0.03] border-white/10 text-gray-300 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="text-xs font-bold text-white">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Recommendation & Lead Capture */}
        {step === 4 && !isSubmitted && (
          <div className="space-y-5 animate-in fade-in duration-200">
            {/* Recommendation Box */}
            <div className="p-4 rounded-2xl bg-[#092B1E]/60 border border-[#25D366]/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#25D366]">
                <Sparkles className="w-4 h-4" />
                <span>Recommended: AIT Growth Engine Automation</span>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                For <strong>{industry || "your business"}</strong>, we recommend
                deploying a 24/7 AI qualification flow with automated calendar
                booking and Google Sheets/CRM sync.
              </p>
              <div className="flex items-center gap-3 pt-1 text-[10px] text-emerald-300 font-medium">
                <span>✓ &lt; 3s AI Response Time</span>
                <span>✓ +3.4x Expected Booking Rate</span>
              </div>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleFinalSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  value={contactData.name}
                  onChange={(e) =>
                    setContactData({ ...contactData, name: e.target.value })
                  }
                  placeholder="Your Name *"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#25D366]"
                />
                <input
                  type="text"
                  required
                  value={contactData.businessName}
                  onChange={(e) =>
                    setContactData({
                      ...contactData,
                      businessName: e.target.value,
                    })
                  }
                  placeholder="Business Name *"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#25D366]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="tel"
                  required
                  value={contactData.phone}
                  onChange={(e) =>
                    setContactData({ ...contactData, phone: e.target.value })
                  }
                  placeholder="WhatsApp Number *"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#25D366]"
                />
                <input
                  type="email"
                  required
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                  placeholder="Business Email *"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#25D366]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-[#090D16] font-bold text-xs hover:opacity-95 transition-all shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Get Free Blueprint & Book Strategy Call</span>
              </button>
            </form>
          </div>
        )}

        {/* Success State */}
        {isSubmitted && (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border-2 border-[#25D366] flex items-center justify-center text-[#25D366] mx-auto shadow-lg shadow-[#25D366]/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-white">
                Audit Request Received!
              </h4>
              <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{contactData.name}</strong>. Our WhatsApp
                Automation specialist will send your custom architecture
                blueprint to <strong>{contactData.phone}</strong> within 15
                minutes.
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
