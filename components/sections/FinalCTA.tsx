"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { getWhatsAppUrl, createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

export default function FinalCTA() {
  const { openAppointmentModal } = useAppointment();

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-[#072B1C] text-white overflow-hidden select-none">
      {/* Subtle ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-dentology-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-dentology-gold border border-dentology-gold/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 font-sans">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Dentology • House of Dentistry & Aesthetics</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.15] mb-4 text-white">
          Your next step starts <br />
          <span className="italic text-dentology-gold font-light">with a conversation.</span>
        </h2>

        <p className="text-slate-300 font-sans text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Tell us what you&apos;re looking for and let Dentology help you find the right path forward. Personalized care led by Dr. Sanika Sharma in Jaripatka, Nagpur.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-sm sm:max-w-none mx-auto">
          <button
            onClick={() => openAppointmentModal("Final Consultation CTA")}
            className="px-7 py-4 rounded-full bg-gradient-to-r from-dentology-gold via-amber-300 to-dentology-gold-light text-[#072B1C] font-sans font-bold text-sm tracking-wide shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <span>BOOK AN APPOINTMENT</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppUrl(createGeneralWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-semibold text-sm tracking-wide transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>CHAT ON WHATSAPP</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
