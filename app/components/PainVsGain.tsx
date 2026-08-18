"use client";

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingDown,
  TrendingUp,
  XCircle,
} from "lucide-react";

interface PainVsGainProps {
  onOpenBooking: () => void;
}

export default function PainVsGain({ onOpenBooking }: PainVsGainProps) {
  const painPoints = [
    {
      id: "pain-after-hours",
      title: "Lost Leads After 5:00 PM & Weekends",
      desc: "Prospects message when you are closed. When you reply 12 hours later, they've already booked your competitor.",
    },
    {
      id: "pain-repetitive-typing",
      title: "Staff Drowning in Repetitive Questions",
      desc: "Answering 'What is your price?', 'Where are you located?', and 'Are you open?' 80 times a day drains productivity.",
    },
    {
      id: "pain-no-crm-sync",
      title: "Zero CRM Sync & Disorganized Chats",
      desc: "Customer numbers and lead statuses trapped on one receptionist's phone with no automated tracking or follow-up pipeline.",
    },
    {
      id: "pain-unopened-email",
      title: "Unopened Emails & Missed Follow-ups",
      desc: "Email marketing open rates are under 18%, while manual WhatsApp broadcasting gets phone numbers banned without official API.",
    },
  ];

  const gainPoints = [
    {
      id: "gain-instant-qualification",
      title: "Sub-3-Second AI Qualification 24/7/365",
      desc: "Instant friendly greetings, smart question answering, and automated lead scoring day or night without human intervention.",
    },
    {
      id: "gain-calendar-booking",
      title: "Direct Calendar Booking & Intake Sync",
      desc: "Bot checks real-time slot availability, collects patient/client details, and books appointments directly onto Google Calendar/Calendly.",
    },
    {
      id: "gain-crm-sync",
      title: "Instant Live CRM & Google Sheets Sync",
      desc: "Every contact name, budget, phone number, and conversation summary is automatically logged into your CRM in real time.",
    },
    {
      id: "gain-broadcast-roi",
      title: "98% Open-Rate Broadcasts & Follow-ups",
      desc: "Send personalized seasonal offers, abandoned cart reminders, and review requests safely via official Meta Cloud API.",
    },
  ];

  return (
    <section className="py-20 bg-[#070B12] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#25D366]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/20">
            The Reality of Small Business WhatsApp
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Manual Chatting is Costing You{" "}
            <span className="text-red-400">Thousands in Lost Revenue.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            See how shifting from chaotic manual messaging to AIT WhatsApp
            automation transforms your bottom line.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Pain Column */}
          <div className="rounded-3xl p-6 sm:p-8 bg-red-950/20 border border-red-500/20 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-red-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Manual WhatsApp Chaos
                    </h3>
                    <p className="text-xs text-red-400 font-medium">
                      The Slow & Costly Way
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                  -35% Lost Leads
                </span>
              </div>

              <div className="space-y-5 pt-6">
                {painPoints.map((item) => (
                  <div key={item.id} className="flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-200">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-red-500/20 bg-red-950/40 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 rounded-b-3xl">
              <div className="flex items-center gap-2 text-xs text-red-300 font-medium">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>
                  Result: Exhausted team, slow growth, and lost customers to
                  faster competitors.
                </span>
              </div>
            </div>
          </div>

          {/* Gain Column */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#111C24] border border-[#25D366]/30 flex flex-col justify-between shadow-2xl relative">
            {/* Best Choice Tag */}
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-[#090D16] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>AIT Automated System</span>
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#25D366]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      AIT WhatsApp Autopilot
                    </h3>
                    <p className="text-xs text-[#25D366] font-medium">
                      24/7 Autonomous Sales Machine
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40">
                  +340% Conversions
                </span>
              </div>

              <div className="space-y-5 pt-6">
                {gainPoints.map((item) => (
                  <div key={item.id} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#25D366]/20 bg-[#0F2922]/50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#25D366] font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>
                  Result: Uncapped lead capture, delighted customers, zero
                  manual typing.
                </span>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-[#090D16] text-xs font-bold transition-all shrink-0 flex items-center justify-center gap-1.5 shadow-md shadow-[#25D366]/20"
              >
                <span>Automate Now</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
