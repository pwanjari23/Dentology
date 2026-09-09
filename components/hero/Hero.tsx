"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Star, Calendar, ShieldCheck, Award } from "lucide-react";
import DentalSculptVisual from "./DentalSculptVisual";
import { clinicData } from "@/data/clinicData";
import { doctorData } from "@/data/doctorData";
import { getWhatsAppUrl, createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

export default function Hero() {
  const { openAppointmentModal } = useAppointment();

  return (
    <section className="relative w-full min-h-[95vh] pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#0B462D] via-[#0E3B27] to-[#072B1C] text-white overflow-hidden flex flex-col justify-between">
      {/* Decorative luxury mesh ambient glows & golden lights */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-dentology-gold/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle luxury geometric grid background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Flagship Headline, Doctor Identity, Subtext, CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            
            {/* Flagship Live Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-dentology-gold/40 text-dentology-gold-light font-sans text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-5 sm:mb-6 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-dentology-gold" />
              <span>Jaripatka, Nagpur • House of Dentistry & Aesthetics</span>
            </motion.div>

            {/* Main Flagship Headline */}
            <div className="relative mb-5 sm:mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
              >
                Precision
                <br />
                Dentistry &
                <br />
                <span className="inline-flex items-center gap-3 flex-wrap">
                  <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-dentology-gold-light">
                    Smile Aesthetics
                  </span>
                  
                  {/* Flagship Gold-Foil Avatar Badge */}
                  <div className="inline-flex items-center -space-x-2 bg-white/10 backdrop-blur-xl p-1 rounded-full border border-dentology-gold/50 align-middle shadow-md">
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-dentology-gold">
                      <Image
                        src="/images/doctor/dr-sanika-sharma.jpg"
                        alt="Dr. Sanika Sharma"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-dentology-gold">
                      <Image
                        src="/images/logo/dentology-logo.png"
                        alt="Dentology Emblem"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-dentology-gold to-amber-200 text-dentology-emerald-dark font-extrabold text-xs flex items-center justify-center shadow-md">
                      +2k
                    </div>
                  </div>
                </span>
              </motion.h1>
            </div>

            {/* Subtitle Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm sm:text-base lg:text-lg text-emerald-100/90 font-sans leading-relaxed max-w-lg mb-8"
            >
              Combining advanced 3D intraoral digital scanning with conservative tooth preservation. 
              Personalized, pain-free dental care led by <strong className="text-white font-semibold">Dr. Sanika Sharma</strong> in Jaripatka.
            </motion.p>

            {/* Flagship CTAs Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8 sm:mb-10"
            >
              <button
                onClick={() => openAppointmentModal("Hero Primary CTA")}
                className="group relative px-7 py-4 rounded-full bg-gradient-to-r from-dentology-gold via-amber-300 to-dentology-gold-light text-dentology-emerald-dark font-sans font-extrabold text-sm shadow-2xl shadow-amber-500/20 hover:brightness-110 transition-all flex items-center justify-center gap-2.5 active:scale-95 border border-amber-100/60"
              >
                <Calendar className="w-4 h-4 text-dentology-emerald-dark" />
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-dentology-emerald-dark group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={getWhatsAppUrl(createGeneralWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-sans font-semibold text-sm transition-all flex items-center justify-center gap-2.5 active:scale-95 shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Instant WhatsApp</span>
              </a>
            </motion.div>

            {/* Flagship Doctor & Trust Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="w-full max-w-lg p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-between shadow-2xl"
            >
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 border-dentology-gold/60 shrink-0 shadow-md">
                  <Image
                    src="/images/doctor/dr-sanika-sharma.jpg"
                    alt="Dr. Sanika Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-base sm:text-lg font-bold text-white leading-none">
                      {doctorData.name}
                    </span>
                    <Award className="w-4 h-4 text-dentology-gold shrink-0" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-dentology-gold-light font-medium mt-1">
                    {doctorData.title} • Jaripatka
                  </span>
                </div>
              </div>

              {/* Verified Rating Badge */}
              <div className="flex flex-col items-end border-l border-white/15 pl-4 shrink-0">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-emerald-100 mt-1">
                  5.0 Google Rated
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Signature 3D Tooth Sculpture & Interactive Crew */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <DentalSculptVisual />
          </div>

        </div>
      </div>

      {/* Flagship Bottom Feature Bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-md py-3 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-around gap-4 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-100/90">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-dentology-gold" />
            <span>Natural Tooth Preservation</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-dentology-gold" />
            <span>3D Intraoral HD Scans</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-dentology-gold" />
            <span>Zero-Gag Digital Care</span>
          </div>
        </div>
      </div>
    </section>
  );
}

