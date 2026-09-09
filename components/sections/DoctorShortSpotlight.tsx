"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, ShieldCheck, GraduationCap, MapPin, UserCheck } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../ui/MagneticButton";
import { doctorData } from "@/data/doctorData";
import { useAppointment } from "@/context/AppointmentContext";
import { useNavigation } from "@/context/NavigationContext";

export default function DoctorShortSpotlight() {
  const { openAppointmentModal } = useAppointment();
  const { setActiveTab } = useNavigation();

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Lead Clinician"
          title="Meet your dentist."
          subtitle="Care begins with the person behind it — dedicated to clinical precision, conservative care, and patient trust."
          badgeColor="teal"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto mt-8 sm:mt-10">
          {/* Left Column: Doctor Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group">
              <Image
                src={doctorData.image}
                alt="Dr. Sanika Sharma - Lead Dentist at Dentology House of Dentistry & Aesthetics"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 460px"
                className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072B1C]/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dentology-gold text-dentology-emerald-dark font-sans text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Medical Registration Verified</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-white leading-tight">
                  {doctorData.name}
                </h3>
                <p className="text-xs text-emerald-100 font-sans mt-0.5">
                  {doctorData.qualification} • {doctorData.experienceYears} Years Experience Overall
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Credentials & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-dentology-emerald text-[11px] font-bold uppercase tracking-wider mb-4 font-sans">
              <Award className="w-3.5 h-3.5 text-dentology-gold" />
              <span>Founder & Lead Dentist</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-dentology-navy font-normal mb-4 leading-snug">
              {doctorData.name} <span className="text-slate-400 text-xl font-sans font-normal">({doctorData.qualification})</span>
            </h3>

            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
              {doctorData.bio}
            </p>

            {/* Verified Clinical Credentials List */}
            <div className="w-full space-y-3 p-4 sm:p-5 rounded-2xl bg-[#FAFBF9] border border-slate-200/80 mb-8">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans">
                <GraduationCap className="w-4 h-4 text-dentology-emerald shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-dentology-navy">Education: </strong>
                  <span>{doctorData.education}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans">
                <Award className="w-4 h-4 text-dentology-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-dentology-navy">Experience: </strong>
                  <span>{doctorData.experienceYears} Years Overall Clinical Practice</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-dentology-navy">Practice: </strong>
                  <span>{doctorData.practiceName}, {doctorData.location}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton
                variant="primary"
                onClick={() => openAppointmentModal("Doctor Consultation")}
              >
                <span>Book Consultation</span>
              </MagneticButton>

              <button
                onClick={() => setActiveTab("doctor")}
                className="px-5 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 font-sans text-xs font-semibold tracking-wide transition-all flex items-center gap-2"
              >
                <span>MEET DR. SANIKA</span>
                <ArrowRight className="w-3.5 h-3.5 text-dentology-emerald" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
