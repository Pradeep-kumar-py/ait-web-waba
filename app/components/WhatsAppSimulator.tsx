"use client";

import {
  Bot,
  Calendar,
  CheckCheck,
  ChevronRight,
  Home,
  RotateCcw,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  time: string;
  media?: {
    type: "image" | "card" | "audio" | "booking";
    title?: string;
    subtitle?: string;
    actionText?: string;
  };
  options?: string[];
}

interface IndustryScenario {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  businessName: string;
  badge: string;
  initialMessages: Message[];
  botKnowledge: Record<string, Message>;
}

const scenarios: IndustryScenario[] = [
  {
    id: "clinic",
    name: "Dental & Clinic",
    tagline: "24/7 Appointment & Patient Intake",
    icon: <Stethoscope className="w-4 h-4" />,
    businessName: "Aura Dental Care",
    badge: "Verified Medical WABA",
    initialMessages: [
      {
        id: "c-1",
        sender: "bot",
        text: "👋 Hi Sarah! Welcome to Aura Dental Care. How can our AI assistant help you today?",
        time: "09:41 AM",
        options: [
          "📅 Book Cleaning & Checkup",
          "💰 Pricing & Insurance",
          "🚨 Dental Emergency",
        ],
      },
    ],
    botKnowledge: {
      "📅 Book Cleaning & Checkup": {
        id: "c-2",
        sender: "bot",
        text: "Great! We have 2 slots available with Dr. Miller this week. Which day works best for you?",
        time: "09:41 AM",
        media: {
          type: "booking",
          title: "Standard Dental Cleaning (45 min)",
          subtitle: "Dr. Miller • In-Network with 95% Insurances",
        },
        options: ["Thursday 11:00 AM", "Friday 3:30 PM", "Choose Custom Date"],
      },
      "Thursday 11:00 AM": {
        id: "c-3",
        sender: "bot",
        text: "✅ You're booked for Thursday at 11:00 AM! Calendar invite and intake form sent to your WhatsApp. Automated SMS reminder enabled.",
        time: "09:42 AM",
        media: {
          type: "card",
          title: "Appointment Confirmed #AD-8492",
          subtitle: "108 Metro Blvd, Suite 400 • Free Parking",
          actionText: "Add to Google Calendar",
        },
        options: [
          "Add to Calendar",
          "Reschedule / Cancel",
          "Ask Another Question",
        ],
      },
      "Friday 3:30 PM": {
        id: "c-3b",
        sender: "bot",
        text: "✅ Perfect! Confirmed for Friday at 3:30 PM with Dr. Miller. Your patient portal link has been generated.",
        time: "09:42 AM",
        options: ["Add to Calendar", "Ask Another Question"],
      },
      "💰 Pricing & Insurance": {
        id: "c-4",
        sender: "bot",
        text: "We accept all major PPO insurances including Delta, MetLife, Cigna, and Aetna. Without insurance, standard cleanings are $89 (includes full digital X-Ray).",
        time: "09:41 AM",
        options: ["📅 Book Cleaning & Checkup", "Speak to Receptionist"],
      },
      "🚨 Dental Emergency": {
        id: "c-5",
        sender: "bot",
        text: "⚠️ Emergency triage activated. We have routed your alert to our on-call dentist. If you are experiencing severe swelling, call our direct line below.",
        time: "09:41 AM",
        options: ["Call Clinic Direct", "Book Emergency Slot"],
      },
    },
  },
  {
    id: "restaurant",
    name: "Restaurant & Cafe",
    tagline: "Autonomous Menu, Table & Delivery Bot",
    icon: <UtensilsCrossed className="w-4 h-4" />,
    businessName: "Firewood Bistro",
    badge: "Food & Beverage WABA",
    initialMessages: [
      {
        id: "r-1",
        sender: "bot",
        text: "🍕 Hey Marco! Craving woodfired pizza or looking to reserve a table tonight?",
        time: "07:15 PM",
        options: [
          "📖 View Digital Menu & Order",
          "🍷 Reserve a Table for 2-6",
          "🛵 Track Existing Order",
        ],
      },
    ],
    botKnowledge: {
      "📖 View Digital Menu & Order": {
        id: "r-2",
        sender: "bot",
        text: "Here are today's chef specials! Tap any item to add directly to your WhatsApp cart with instant payment.",
        time: "07:15 PM",
        media: {
          type: "card",
          title: "Truffle Burrata Pizza ($21.00)",
          subtitle: "24h slow ferment dough, San Marzano sauce, fresh burrata",
          actionText: "Quick Order ($21)",
        },
        options: [
          "Add Truffle Pizza ($21)",
          "Add Classic Margherita ($16)",
          "View Full Drink Menu",
        ],
      },
      "Add Truffle Pizza ($21)": {
        id: "r-3",
        sender: "bot",
        text: "🛒 Added to cart! Delivery address: 742 Evergreen Terrace. Total: $24.50 (incl. delivery). Click below to pay via WhatsApp Pay / Apple Pay.",
        time: "07:16 PM",
        options: ["Pay with 1-Click", "Add Drinks First", "Change Address"],
      },
      "🍷 Reserve a Table for 2-6": {
        id: "r-4",
        sender: "bot",
        text: "We have outdoor patio and indoor booth tables open tonight. What time would you prefer?",
        time: "07:15 PM",
        options: ["7:45 PM (Patio)", "8:30 PM (Indoor)", "9:00 PM (Bar)"],
      },
      "7:45 PM (Patio)": {
        id: "r-5",
        sender: "bot",
        text: "🎉 Table for 2 confirmed at 7:45 PM (Patio)! We'll keep your table reserved for 15 minutes. See you soon!",
        time: "07:16 PM",
        options: ["View Directions", "Modify Guests", "Order in Advance"],
      },
      "🛵 Track Existing Order": {
        id: "r-6",
        sender: "bot",
        text: "🛵 Order #FW-309 is out for delivery with rider Alex! Estimated arrival in 11 minutes.",
        time: "07:15 PM",
        options: ["Live GPS Map", "Contact Rider"],
      },
    },
  },
  {
    id: "realestate",
    name: "Real Estate & Broker",
    tagline: "Instant Brochure & Lead Qualification",
    icon: <Home className="w-4 h-4" />,
    businessName: "Skyline Realty Group",
    badge: "Official Real Estate Bot",
    initialMessages: [
      {
        id: "re-1",
        sender: "bot",
        text: "🏢 Welcome to Skyline Realty! Are you looking to buy, rent, or schedule a VIP property tour?",
        time: "02:10 PM",
        options: [
          "🏡 Browse 2-3 BHK Under $750k",
          "📄 Download Brochure (PDF)",
          "📅 Schedule Private Showing",
        ],
      },
    ],
    botKnowledge: {
      "🏡 Browse 2-3 BHK Under $750k": {
        id: "re-2",
        sender: "bot",
        text: "Here is our top-rated modern penthouse matching your criteria with rooftop pool access and zero maintenance for year 1.",
        time: "02:10 PM",
        media: {
          type: "card",
          title: "The Glasshouse Penthouse • $680,000",
          subtitle: "3 Bed • 2 Bath • 1,640 SqFt • Downtown Views",
          actionText: "Download Floor Plan (PDF)",
        },
        options: [
          "Schedule VIP Tour",
          "Check Mortgage Calculator",
          "View Similar Listings",
        ],
      },
      "Schedule VIP Tour": {
        id: "re-3",
        sender: "bot",
        text: "Agent David Miller has been notified and holds the keys. Can we confirm your visit for Saturday at 2:00 PM?",
        time: "02:11 PM",
        options: [
          "Confirm Saturday 2PM",
          "Request Sunday Instead",
          "Talk to Agent David",
        ],
      },
      "Confirm Saturday 2PM": {
        id: "re-3b",
        sender: "bot",
        text: "🎯 Tour locked in! Lead details & budget synced directly to Agent CRM (HubSpot). We have sent gate entry QR code to your WhatsApp.",
        time: "02:11 PM",
        options: ["Download Gate Pass", "Ask About Pricing"],
      },
      "📄 Download Brochure (PDF)": {
        id: "re-4",
        sender: "bot",
        text: "📁 Sent! [Skyline_Grand_Residences_2026.pdf - 4.2MB]. High-res renders, pricing breakdown, and ROI forecasts included.",
        time: "02:10 PM",
        options: ["Schedule VIP Tour", "Inquire About Payment Plan"],
      },
      "📅 Schedule Private Showing": {
        id: "re-5",
        sender: "bot",
        text: "Which project are you most interested in visiting this weekend?",
        time: "02:10 PM",
        options: ["Skyline Penthouse", "The Palms Villa", "Marina Bay Heights"],
      },
    },
  },
  {
    id: "ecommerce",
    name: "E-Commerce & D2C",
    tagline: "Cart Recovery & Automated Support",
    icon: <ShoppingBag className="w-4 h-4" />,
    businessName: "Luxe Glow Organics",
    badge: "Shopify Verified Partner",
    initialMessages: [
      {
        id: "e-1",
        sender: "bot",
        text: "👋 Hey Alex! We noticed you left the Vitamin C Radiance Serum in your cart. Would you like a 10% flash discount to complete your checkout today?",
        time: "11:04 AM",
        options: [
          "🎁 Claim 10% Off & Checkout",
          "❓ Ask About Ingredients",
          "📦 Track Recent Order",
        ],
      },
    ],
    botKnowledge: {
      "🎁 Claim 10% Off & Checkout": {
        id: "e-2",
        sender: "bot",
        text: "🎉 Applied promo code GLOW10! Your total is now $34.20 (Saved $3.80). Click below for instant 1-tap WhatsApp checkout.",
        time: "11:04 AM",
        media: {
          type: "card",
          title: "Vitamin C Serum (30ml) • Discount Applied",
          subtitle: "Free 2-Day Shipping Included",
          actionText: "Complete Order ($34.20)",
        },
        options: [
          "Complete Order Now",
          "Add Night Cream (+$18)",
          "Shipping Policy",
        ],
      },
      "Complete Order Now": {
        id: "e-3",
        sender: "bot",
        text: "💳 Payment confirmed via Apple Pay! Order #LG-9921 is packed and being dispatched. You'll receive real-time tracking updates right here on WhatsApp.",
        time: "11:05 AM",
        options: ["Track Order #LG-9921", "Explore New Arrivals"],
      },
      "❓ Ask About Ingredients": {
        id: "e-4",
        sender: "bot",
        text: "Our Radiance Serum is 100% vegan, cruelty-free, and formulated with 15% pure L-Ascorbic Acid + Hyaluronic Acid. Perfect for sensitive skin!",
        time: "11:04 AM",
        options: ["🎁 Claim 10% Off & Checkout", "Is it Fragrance Free?"],
      },
      "📦 Track Recent Order": {
        id: "e-5",
        sender: "bot",
        text: "Your order #LG-8712 is currently in transit via FedEx. Expected delivery: Tomorrow by 4:00 PM.",
        time: "11:04 AM",
        options: ["Change Delivery Date", "Leave at Front Door"],
      },
    },
  },
  {
    id: "homeservices",
    name: "Home Services",
    tagline: "Instant Quote & Emergency Dispatch",
    icon: <Wrench className="w-4 h-4" />,
    businessName: "Apex Plumbing & HVAC",
    badge: "Licensed Contractor WABA",
    initialMessages: [
      {
        id: "h-1",
        sender: "bot",
        text: "🛠️ Apex Plumbing 24/7 Dispatch. Need an urgent repair, AC service, or a transparent instant quote?",
        time: "04:30 PM",
        options: [
          "⚡ Emergency Leaking / Burst Pipe",
          "❄️ AC & Heating Tune-Up ($79)",
          "📸 Send Photo for Instant Quote",
        ],
      },
    ],
    botKnowledge: {
      "⚡ Emergency Leaking / Burst Pipe": {
        id: "h-2",
        sender: "bot",
        text: "🚨 Emergency technician assigned! Mark is 18 minutes away from your area. Please shut off your main water valve if possible.",
        time: "04:30 PM",
        options: [
          "Confirm Emergency Dispatch",
          "Where is Main Valve?",
          "Call Technician",
        ],
      },
      "Confirm Emergency Dispatch": {
        id: "h-2b",
        sender: "bot",
        text: "✅ Dispatch confirmed for your address! Technician Mark will arrive in 18 minutes with full repair kit.",
        time: "04:31 PM",
        options: ["Track Van Location", "Add Gate Code"],
      },
      "❄️ AC & Heating Tune-Up ($79)": {
        id: "h-3",
        sender: "bot",
        text: "Our 21-point AC inspection includes coil cleaning, refrigerant check, and filter change for $79 flat. Which day suits you?",
        time: "04:30 PM",
        options: [
          "Tomorrow Morning (9-12)",
          "Tomorrow Afternoon (1-5)",
          "Saturday Morning",
        ],
      },
      "Tomorrow Morning (9-12)": {
        id: "h-3b",
        sender: "bot",
        text: "📅 Booked for Tomorrow Morning (9 AM - 12 PM)! You'll receive a WhatsApp ping when technician is 15 mins out.",
        time: "04:31 PM",
        options: ["Add to Calendar", "Reschedule"],
      },
      "📸 Send Photo for Instant Quote": {
        id: "h-4",
        sender: "bot",
        text: "Please snap a quick photo or short video of the issue. Our AI visual analyzer and master plumber will generate an instant price estimate within 60 seconds.",
        time: "04:30 PM",
        options: ["Upload Photo", "Request Phone Call"],
      },
    },
  },
];

export default function WhatsAppSimulator() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("clinic");
  const [messages, setMessages] = useState<Message[]>(
    scenarios[0].initialMessages,
  );
  const [isTyping, setIsTyping] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const activeScenario =
    scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  useEffect(() => {
    setMessages(activeScenario.initialMessages);
    setIsTyping(false);
  }, [activeScenario]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleOptionClick = (optionText: string) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: optionText,
      time: timeStr,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botResponse = activeScenario.botKnowledge[optionText];

      if (botResponse) {
        setMessages((prev) => [
          ...prev,
          { ...botResponse, id: `b-${Date.now()}` },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `b-${Date.now()}`,
            sender: "bot",
            text: `✅ Thank you! Our AI has recorded your request for "${optionText}". Our automated system has synced this to your CRM and sent a confirmation alert.`,
            time: timeStr,
            options: ["Book Strategy Call", "Reset Conversation"],
          },
        ]);
      }
    }, 650);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const query = customInput.trim();
    setCustomInput("");

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: query,
      time: timeStr,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let replyText = `🤖 [AIT Smart AI]: Thanks for asking about "${query}". In a live deployment, our custom-trained LLM accesses your real inventory, calendar API, or knowledge base to answer accurately in under 2 seconds!`;
      let opts = [
        "📅 Book Demo Walkthrough",
        "💰 View Pricing Tiers",
        "Try Preset Options",
      ];

      if (
        query.toLowerCase().includes("price") ||
        query.toLowerCase().includes("cost")
      ) {
        replyText =
          "💰 Transparent pricing: Our starter WhatsApp automation starts at $497 one-time setup with zero tech maintenance. Would you like a full quote?";
        opts = ["View Pricing Breakdown", "Talk to Automation Engineer"];
      } else if (
        query.toLowerCase().includes("book") ||
        query.toLowerCase().includes("call") ||
        query.toLowerCase().includes("time")
      ) {
        replyText =
          "📅 We can integrate directly with Calendly, Google Calendar, or custom CRM booking engines. Let's get you set up!";
        opts = ["Schedule 15-Min Call", "Check More Examples"];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          sender: "bot",
          text: replyText,
          time: timeStr,
          options: opts,
        },
      ]);
    }, 800);
  };

  const resetChat = () => {
    setMessages(activeScenario.initialMessages);
    setIsTyping(false);
  };

  return (
    <div className="w-full">
      {/* Industry Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
        {scenarios.map((scenario) => {
          const isActive = scenario.id === activeScenarioId;
          return (
            <button
              type="button"
              key={scenario.id}
              onClick={() => setActiveScenarioId(scenario.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                isActive
                  ? "bg-[#25D366]/15 border-[#25D366] text-[#25D366] shadow-lg shadow-[#25D366]/15"
                  : "bg-white/[0.04] border-white/10 text-gray-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              <span className={isActive ? "text-[#25D366]" : "text-gray-400"}>
                {scenario.icon}
              </span>
              <span>{scenario.name}</span>
            </button>
          );
        })}
      </div>

      {/* Simulator Device Frame */}
      <div className="relative max-w-sm sm:max-w-md mx-auto">
        {/* Glow behind device */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366]/30 via-[#128C7E]/20 to-[#38BDF8]/20 rounded-[40px] blur-xl opacity-75 -z-10" />

        {/* Smartphone Shell */}
        <div className="relative rounded-[36px] bg-[#0E1520] border-[6px] border-[#1F2937] shadow-2xl overflow-hidden flex flex-col h-[580px] sm:h-[620px]">
          {/* Phone Top Notch / Dynamic Island */}
          <div className="bg-[#0B141A] pt-2 px-6 pb-2 flex items-center justify-between border-b border-white/5">
            <span className="text-[11px] font-bold text-gray-300">09:41</span>
            <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-black/60 rounded-full border border-gray-700" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-300">
              <span>5G</span>
              <div className="w-4 h-2 border border-gray-400 rounded-sm p-[1px]">
                <div className="w-full h-full bg-[#25D366] rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* WhatsApp Chat Header */}
          <div className="bg-[#1F2C34] px-4 py-2.5 flex items-center justify-between border-b border-black/30 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#25D366] to-[#075E54] flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {activeScenario.businessName.charAt(0)}
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-[#1F2C34] flex items-center justify-center">
                  <ShieldCheck className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-white tracking-wide">
                    {activeScenario.businessName}
                  </h4>
                  <span className="bg-[#25D366]/20 text-[#25D366] text-[9px] font-bold px-1.5 py-0.2 rounded-full border border-[#25D366]/40">
                    Official WABA
                  </span>
                </div>
                <p className="text-[10px] text-[#25D366] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-ping" />
                  <span>AIT AI Bot • Instant reply</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                title="Reset Simulation"
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 wa-chat-pattern">
            {/* Timestamp chip */}
            <div className="flex justify-center">
              <span className="text-[10px] uppercase font-semibold text-gray-400 bg-[#182229]/80 px-2.5 py-1 rounded-md border border-white/5">
                Today • End-to-End Encrypted AI
              </span>
            </div>

            {messages.map((msg) => {
              const isBot = msg.sender === "bot";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? "items-start" : "items-end"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 shadow-md text-xs relative ${
                      isBot
                        ? "bg-[#202C33] text-gray-100 rounded-tl-sm border border-white/5"
                        : "bg-[#005C4B] text-white rounded-tr-sm border border-[#25D366]/20"
                    }`}
                  >
                    {isBot && (
                      <div className="flex items-center gap-1 text-[10px] text-[#25D366] font-medium mb-1">
                        <Bot className="w-3 h-3" />
                        <span>AIT Autonomous Agent</span>
                      </div>
                    )}

                    <p className="leading-relaxed whitespace-pre-line">
                      {msg.text}
                    </p>

                    {/* Rich Media / Card Preview if available */}
                    {msg.media && (
                      <div className="mt-2.5 p-2.5 rounded-xl bg-black/25 border border-white/10 space-y-1.5">
                        {msg.media.title && (
                          <p className="font-bold text-white text-[11px] flex items-center gap-1.5">
                            {msg.media.type === "booking" && (
                              <Calendar className="w-3.5 h-3.5 text-[#25D366]" />
                            )}
                            {msg.media.title}
                          </p>
                        )}
                        {msg.media.subtitle && (
                          <p className="text-[10px] text-gray-300 leading-snug">
                            {msg.media.subtitle}
                          </p>
                        )}
                        {msg.media.actionText && (
                          <button
                            type="button"
                            onClick={() =>
                              handleOptionClick(msg.media?.actionText || "")
                            }
                            className="w-full mt-1.5 py-1 px-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-[10px] font-bold border border-[#25D366]/40 transition-colors flex items-center justify-center gap-1"
                          >
                            <span>{msg.media.actionText}</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    )}

                    {/* Timestamp & double check */}
                    <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-gray-400">
                      <span>{msg.time}</span>
                      <CheckCheck className="w-3 h-3 text-[#53BDEB]" />
                    </div>
                  </div>

                  {/* Interactive Quick-Reply Option Pills */}
                  {isBot && msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                      {msg.options.map((option) => (
                        <button
                          type="button"
                          key={`${msg.id}-${option}`}
                          onClick={() => handleOptionClick(option)}
                          className="px-2.5 py-1 rounded-full bg-[#182229] hover:bg-[#25D366] text-[#25D366] hover:text-[#090D16] border border-[#25D366]/40 text-[11px] font-medium transition-all duration-150 shadow-sm active:scale-95 text-left"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#202C33] w-20 rounded-tl-sm animate-pulse">
                <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* WhatsApp Interactive Input Bar */}
          <form
            onSubmit={handleCustomSend}
            className="bg-[#1F2C34] p-2.5 flex items-center gap-2 border-t border-white/5"
          >
            <div className="flex-1 flex items-center bg-[#2A3942] rounded-full px-3 py-1.5 border border-white/5 focus-within:border-[#25D366]/50">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Type a message or question..."
                className="w-full bg-transparent text-xs text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={!customInput.trim()}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                customInput.trim()
                  ? "bg-[#25D366] text-[#090D16] shadow-md shadow-[#25D366]/30 hover:scale-105"
                  : "bg-[#2A3942] text-gray-400 cursor-not-allowed"
              }`}
            >
              <Send className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </form>
        </div>

        {/* Live Simulator Tag / Hint */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400 px-2">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Interactive Simulator: Click buttons or type a query</span>
          </span>
          <button
            type="button"
            onClick={resetChat}
            className="text-[#25D366] hover:underline font-semibold"
          >
            Reset flow
          </button>
        </div>
      </div>
    </div>
  );
}
