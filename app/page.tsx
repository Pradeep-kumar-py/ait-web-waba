"use client";

import { useState } from "react";
import AutomationQuizModal from "./components/AutomationQuizModal";
import BookingModal from "./components/BookingModal";
import CaseStudies from "./components/CaseStudies";
import FaqSection from "./components/FaqSection";
import FloatingWhatsAppWidget from "./components/FloatingWhatsAppWidget";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PainVsGain from "./components/PainVsGain";
import Pricing from "./components/Pricing";
import ProcessTimeline from "./components/ProcessTimeline";
import RoiCalculator from "./components/RoiCalculator";
import ServicesGrid from "./components/ServicesGrid";

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#090D16] text-[#F3F4F6] relative selection:bg-[#25D366] selection:text-[#090D16]">
      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Hero Section with Interactive Live WhatsApp Phone Emulator */}
      <Hero
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* The Reality: Manual WhatsApp Chaos vs AIT Automation */}
      <PainVsGain onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Core 6 Done-For-You Automation Systems */}
      <ServicesGrid onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Revenue / ROI Calculator with Confetti */}
      <RoiCalculator onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 7-Day Sprint Done-For-You Blueprint */}
      <ProcessTimeline onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Real Small Business Case Studies & Transformations */}
      <CaseStudies onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Transparent Pricing Matrix & Guarantee */}
      <Pricing onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Comprehensive FAQ Section */}
      <FaqSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Footer & Free Playbook Lead Magnet */}
      <Footer
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Interactive Floating WhatsApp Quick Launcher */}
      <FloatingWhatsAppWidget
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Interactive Readiness Quiz Modal */}
      <AutomationQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      {/* 15-Minute Strategy Call Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
