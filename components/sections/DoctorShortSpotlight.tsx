"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Award, ShieldCheck, Heart, CheckCircle2, MessageCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../ui/MagneticButton";
import { doctorData } from "@/data/doctorData";
import { getWhatsAppUrl, createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";
import { useNavigation } from "@/context/NavigationContext";

export default function DoctorShortSpotlight() {
  const { openAppointmentModal } = useAppointment();
  const { setActiveTab } = useNavigation();

  return (
    <section className="relative py-14 sm:py-24 lg:py-28 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-slate-50 overflow-hidden">
      {/* Subtle luxury ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-dentology-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Premium Doctor Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[3/4] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src={doctorData.image}
                alt="Dr. Sanika Sharma - Lead Dentist at Dentology"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Luxury dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#072B1C]/90 via-transparent to-transparent pointer-events-none" />

              {/* Floating Verified Clinician Badge */}
              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dentology-gold/90 text-dentology-emerald-dark font-sans text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-2 shadow-md">
                  <Award className="w-3.5 h-3.5" />
                  <span>Founder & Lead Dentist</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white leading-tight">
                  {doctorData.name}
                </h3>
                <p className="text-xs text-emerald-100 font-sans mt-1">
                  Jaripatka, Nagpur • Dedicated to Saving Natural Teeth
                </p>
              </div>
            </div>

            {/* Decorative Gold Leaf Foil Outer Ring Accent */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-3xl bg-dentology-gold/20 -z-10 blur-xl" />
          </motion.div>

          {/* Right Column: Short Flagship Doctor Story & 3 Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dentology-emerald/10 border border-dentology-emerald/20 text-dentology-emerald text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-dentology-gold" />
              <span>Meet Your Lead Clinician</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dentology-emerald font-normal mb-4 leading-tight">
              A Clinician Dedicated to <br />
              <span className="italic font-light text-dentology-gold">Saving Your Natural Smile.</span>
            </h2>

            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
              {doctorData.bio}
            </p>

            {/* 3 Short Flagship Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
              <div className="p-3.5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm flex flex-col gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-dentology-emerald/10 text-dentology-emerald flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4 text-dentology-gold" />
                </div>
                <h4 className="text-xs font-bold text-dentology-emerald uppercase tracking-wider">
                  Conservative Care
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Preserving natural teeth with early diagnosis.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm flex flex-col gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-dentology-emerald/10 text-dentology-emerald flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4 text-dentology-gold" />
                </div>
                <h4 className="text-xs font-bold text-dentology-emerald uppercase tracking-wider">
                  3D Transparency
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  High-def intraoral scans so you see what we see.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm flex flex-col gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-dentology-emerald/10 text-dentology-emerald flex items-center justify-center font-bold">
                  <Heart className="w-4 h-4 text-dentology-gold" />
                </div>
                <h4 className="text-xs font-bold text-dentology-emerald uppercase tracking-wider">
                  Painless Comfort
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Gentle, stress-free treatments in Jaripatka.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton
                variant="primary"
                onClick={() => openAppointmentModal("Doctor Short Spotlight Consultation")}
              >
                <span>Book Consultation with Dr. Sanika</span>
              </MagneticButton>

              <button
                onClick={() => setActiveTab("doctor")}
                className="px-5 py-3 rounded-full border border-dentology-emerald/30 text-dentology-emerald hover:bg-dentology-emerald hover:text-white font-sans text-xs font-bold tracking-wide transition-all flex items-center gap-2"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
