import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIT — #1 WhatsApp Automation Agency for Small Businesses",
  description:
    "AIT builds done-for-you WhatsApp AI chatbots, automated appointment booking, 24/7 lead qualification, and CRM workflows for small businesses. Turn WhatsApp into your #1 revenue channel.",
  keywords: [
    "WhatsApp Automation Agency",
    "WhatsApp Business API for Small Business",
    "WhatsApp Chatbot Agency",
    "WABA Automation",
    "WhatsApp Lead Qualification",
    "Automated WhatsApp Appointment Booking",
    "WhatsApp E-Commerce Automation",
    "AIT WhatsApp Agency",
  ],
  authors: [{ name: "AIT Automation Agency" }],
  openGraph: {
    title: "AIT — Done-For-You WhatsApp Automation for Small Businesses",
    description:
      "Stop losing leads to slow replies. Turn WhatsApp into your 24/7 autonomous sales and booking engine.",
    url: "https://aitwaba.agency",
    siteName: "AIT Automation Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIT — WhatsApp Automation Agency for Small Businesses",
    description:
      "24/7 AI Sales Chatbots, Automated Booking & CRM Sync for Small Businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090D16] text-[#F3F4F6] font-sans antialiased selection:bg-[#25D366] selection:text-[#090D16]">
        {children}
      </body>
    </html>
  );
}
