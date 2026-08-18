"use client";

import {
  ArrowRight,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface FloatingWhatsAppWidgetProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export default function FloatingWhatsAppWidget({
  onOpenBooking,
  onOpenQuiz,
}: FloatingWhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissedTeaser, setDismissedTeaser] = useState(false);

  const handleScrollToSimulator = () => {
    setIsOpen(false);
    const el = document.getElementById("simulator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Teaser Bubble (visible if not open & not dismissed) */}
      {!isOpen && !dismissedTeaser && (
        <div className="mb-3 max-w-xs p-3.5 rounded-2xl bg-[#0F172A]/95 border border-[#25D366]/40 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300 relative group">
          <button
            type="button"
            onClick={() => setDismissedTeaser(true)}
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-gray-800 border border-gray-600 text-gray-300 hover:text-white flex items-center justify-center text-[10px]"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs text-white font-semibold leading-tight">
                Want to see WhatsApp AI for your business?
              </p>
              <p className="text-[11px] text-gray-400 mt-1 leading-snug">
                Take our 2-min readiness audit or test the live simulator!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Quick Launcher Modal */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-3xl bg-[#0F172A] border border-[#25D366]/40 p-4 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-200 space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-[#090D16] font-bold">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">AIT Assistant</h4>
                <span className="text-[10px] text-[#25D366] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-ping" />
                  <span>Online 24/7</span>
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-white"
              aria-label="Close Assistant Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed">
            How would you like to explore WhatsApp automation today?
          </p>

          {/* Quick Action Buttons */}
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenQuiz();
              }}
              className="w-full p-2.5 rounded-xl bg-white/[0.05] hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366] text-left transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#25D366]" />
                <span className="text-xs font-semibold text-white">
                  Free 2-Min Readiness Audit
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#090D16] text-left transition-all flex items-center justify-between font-bold shadow-md shadow-[#25D366]/20"
            >
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span className="text-xs">Book 15-Min Strategy Call</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleScrollToSimulator}
              className="w-full p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-left transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-xs font-semibold text-white">
                  Try Live Chat Simulator
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-center gap-1.5 text-[9px] text-gray-500">
            <ShieldCheck className="w-3 h-3 text-[#25D366]" />
            <span>Official Meta Cloud API Partner</span>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300 relative group"
        aria-label="Toggle WhatsApp Agent"
      >
        <MessageSquare className="w-6 h-6 text-[#090D16]" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-[9px] font-black rounded-full flex items-center justify-center border-2 border-[#090D16] text-white">
          1
        </span>
      </button>
    </div>
  );
}
