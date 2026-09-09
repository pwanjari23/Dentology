"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, MapPin, Quote } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../ui/MagneticButton";
import { doctorData } from "@/data/doctorData";
import { clinicData } from "@/data/clinicData";
import { getWhatsAppUrl, createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

export default function DoctorSection() {
  const { openAppointmentModal } = useAppointment();

  return (
    <section id="doctor" className="relative py-14 sm:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-dentology-aqua/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Personal Doctor Brand"
          title="Meet Dr. Sanika Sharma"
          subtitle="A passionate clinician dedicated to saving natural teeth, advancing digital dentistry, and caring for the community that raised her."
          badgeColor="blue"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Animated Doctor Portrait with Clip Reveal */}
          <motion.div
            initial={{ clipPath: "inset(10% 10% 10% 10% round 32px)", opacity: 0.7, scale: 1.04 }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 32px)", opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none w-full rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl border-4 border-slate-50 group"
            data-cursor="VIEW"
          >
            <Image
              src={doctorData.image}
              alt="Dr. Sanika Sharma - Lead Dentist at Dentology"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-dentology-navy/70 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-none">
              <span className="text-[10px] font-bold tracking-widest uppercase text-dentology-teal">
                Lead Dentist
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light">{doctorData.name}</h3>
              <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5 sm:mt-1">
                <MapPin className="w-3.5 h-3.5 text-dentology-green" />
                Jaripatka, Nagpur
              </p>
            </div>
          </motion.div>

          {/* Right: Editorial Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Animated drawing accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-24 h-1 bg-gradient-to-r from-dentology-blue to-dentology-teal rounded-full origin-left mb-6"
            />

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-dentology-navy font-normal mb-6 leading-snug">
              &ldquo;Dentology was never just about opening a clinic. It was about bringing modern
              care back home.&rdquo;
            </h3>

            {/* Verified clinic story quote box */}
            <div className="relative pl-6 border-l-2 border-dentology-green/60 mb-6 bg-slate-50/70 p-5 rounded-r-2xl">
              <Quote className="w-6 h-6 text-dentology-teal/40 absolute -top-2 -left-3" />
              <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed italic">
                {doctorData.clinicStory}
              </p>
            </div>

            <p className="text-slate-600 font-sans text-base leading-relaxed mb-6">
              {doctorData.quote}
            </p>

            {/* Verified Focus Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-dentology-blue/10 text-dentology-blue flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dentology-navy uppercase tracking-wider">
                    Conservative Dentistry
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Prioritizing natural tooth preservation with early diagnosis.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-dentology-green/20 text-dentology-navy flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dentology-navy uppercase tracking-wider">
                    Digital Transparency
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    High-def 3D intraoral scans so you see exactly what we see.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                variant="primary"
                onClick={() => openAppointmentModal("Doctor Section Consultation")}
              >
                Book a Consultation
              </MagneticButton>

              <a
                href={getWhatsAppUrl(createGeneralWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2 text-dentology-green" />
                  Ask Dr. Sanika on WhatsApp
                </MagneticButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
