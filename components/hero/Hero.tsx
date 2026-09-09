"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import DentalSculptVisual from "./DentalSculptVisual";
import { clinicData } from "@/data/clinicData";
import { getWhatsAppUrl, createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

export default function Hero() {
  const { openAppointmentModal } = useAppointment();

  return (
    <section className="relative w-full min-h-[92vh] pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#599BE7] text-white overflow-hidden flex items-center justify-center">
      {/* Subtle decorative atmospheric radial glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold White Headline, Inline Avatars, Subtext, CTAs, and Patient Card */}
          <div className="lg:col-span-6 flex flex-col items-start justify-between">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-sans text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6"
            >
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white" />
              <span>{clinicData.name} • {clinicData.subTitle}</span>
            </motion.div>

            {/* Headline with Inline Avatars (Exact Dribbble Reference Match) */}
            <div className="relative mb-4 sm:mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.04]"
              >
                Restore
                <br />
                Your True
                <br />
                <span className="inline-flex items-center gap-3 flex-wrap">
                  <span>Smile</span>
                  {/* Inline Avatar Cluster matching Dribbble Reference */}
                  <div className="inline-flex items-center -space-x-2 bg-white/20 backdrop-blur-md p-1 rounded-full border border-white/30 align-middle">
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white">
                      <Image
                        src="/images/doctor/dr-sanika-sharma.jpg"
                        alt="Dr. Sanika Sharma"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white">
                      <Image
                        src="/images/treatments/smile-aesthetics.jpg"
                        alt="Happy patient smile"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-dentology-blue font-bold text-xs flex items-center justify-center shadow-sm">
                      +2k
                    </div>
                  </div>
                </span>
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm sm:text-base lg:text-lg text-blue-100 font-sans leading-relaxed max-w-md mb-6 sm:mb-8"
            >
              Using advanced 3D intraoral scanning and conservative care, we deliver comprehensive
              treatments designed around your comfort in Jaripatka, Nagpur.
            </motion.p>

            {/* CTAs Row - hidden on mobile view, visible on desktop/laptop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hidden md:flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8"
            >
              <button
                onClick={() => openAppointmentModal("Hero Primary CTA")}
                className="px-7 py-3.5 rounded-full bg-white text-dentology-navy hover:bg-slate-100 font-sans font-bold text-sm shadow-xl transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-dentology-blue" />
              </button>

              <a
                href={getWhatsAppUrl(createGeneralWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-sans font-semibold text-sm transition-all flex items-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-dentology-green" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>

            {/* Celebrating Patient Satisfaction Card (Matching Dribbble Reference) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3.5 p-3 pr-5 rounded-2xl bg-white shadow-xl text-dentology-navy"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-dentology-blue shrink-0">
                <Image
                  src="/images/hero/hero-happy-patient.png"
                  alt="Happy celebrating dental patient in blue sweater"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-lg sm:text-xl font-bold text-dentology-navy leading-none">
                  Tooth Preservation
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-sans mt-1">
                  Gentle, conservative care focused on natural smiles
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Signature 3D Tooth Sculpture & Miniature Dental Specialists */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <DentalSculptVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
