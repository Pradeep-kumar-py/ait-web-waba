"use client";

import confetti from "canvas-confetti";
import {
  Calendar,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDay, setSelectedDay] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("11:30 AM");
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
  });
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#25D366", "#128C7E", "#38BDF8"],
    });
  };

  const handleClose = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0E1726] border border-[#25D366]/40 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          aria-label="Close Booking Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#25D366]/10 text-[#25D366] text-[10px] font-bold border border-[#25D366]/20">
                <Sparkles className="w-3 h-3" />
                <span>15-Minute Strategy Call</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Book Your WhatsApp Automation Audit
              </h3>
              <p className="text-xs text-gray-400">
                Pick a slot with an AIT Senior Automation Architect. No
                high-pressure sales pitch.
              </p>
            </div>

            {/* Date / Time Slot Picker */}
            <div className="space-y-3 mb-5">
              <div>
                <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block mb-1.5">
                  Select Day:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {["Tomorrow", "In 2 Days", "In 3 Days"].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        selectedDay === day
                          ? "bg-[#25D366]/20 border-[#25D366] text-white"
                          : "bg-white/[0.03] border-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block mb-1.5">
                  Select Time Slot:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "10:00 AM",
                    "11:30 AM",
                    "02:00 PM",
                    "04:30 PM",
                    "06:00 PM",
                    "07:30 PM",
                  ].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-medium border transition-all ${
                        selectedTime === t
                          ? "bg-[#25D366] text-[#090D16] border-[#25D366] font-bold"
                          : "bg-white/[0.03] border-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#25D366]"
                />
                <input
                  type="text"
                  required
                  placeholder="Business Name *"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#25D366]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number *"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#25D366]"
                />
                <input
                  type="email"
                  required
                  placeholder="Work Email *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#25D366]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-[#090D16] font-extrabold text-xs hover:opacity-95 transition-all shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-2 mt-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>
                  Confirm Call for {selectedDay} at {selectedTime}
                </span>
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              <span>
                We never spam. Instant WhatsApp confirmation invite will be
                sent.
              </span>
            </div>
          </div>
        ) : (
          /* Booked Confirmation View */
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border-2 border-[#25D366] flex items-center justify-center text-[#25D366] mx-auto shadow-lg shadow-[#25D366]/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-bold text-white">Call Confirmed!</h4>
              <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                We've locked in your strategy call for{" "}
                <strong>
                  {selectedDay} at {selectedTime}
                </strong>
                . Calendar invite & WhatsApp preparation guide sent to{" "}
                <strong>{formData.phone || "your number"}</strong>.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 max-w-xs mx-auto text-left text-xs space-y-1 text-gray-300">
              <div className="flex items-center gap-2 text-[#25D366] font-bold text-[11px]">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>What to Expect on Call:</span>
              </div>
              <ul className="text-[11px] space-y-1 list-disc pl-4 text-gray-400">
                <li>Review your current WhatsApp volume & bottlenecks</li>
                <li>Live custom workflow architecture demo</li>
                <li>Exact 7-day launch timeline & pricing quotation</li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
