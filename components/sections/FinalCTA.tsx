"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { clinicData } from "@/data/clinicData";
import { getWhatsAppUrl, createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

export default function FinalCTA() {
  const { openAppointmentModal } = useAppointment();

  return (
    <section className="relative py-14 sm:py-28 lg:py-36 bg-dentology-navy text-white overflow-hidden select-none">
      {/* Dynamic ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-dentology-blue/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-dentology-teal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 text-dentology-teal border border-white/20 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Dentology • Jaripatka, Nagpur</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-4 sm:mb-6">
          Your smile story
          <br />
          <span className="italic text-dentology-teal font-light">starts here.</span>
        </h2>

        {/* Self-drawing curved smile line SVG */}
        <div className="max-w-xs sm:max-w-md mx-auto mb-6 sm:mb-8">
          <svg
            viewBox="0 0 400 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12"
          >
            <motion.path
              d="M 20 20 Q 200 65 380 20"
              stroke="#6AB2A9"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
            />
          </svg>
        </div>

        <p className="text-slate-300 font-sans text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Experience personal, high-definition dentistry led by Dr. Sanika Sharma. We welcome you to
          our modern studio at Kamal Phool Chowk.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
          <MagneticButton
            variant="primary"
            onClick={() => openAppointmentModal("Final CTA Section")}
            className="w-full sm:w-auto shadow-2xl shadow-dentology-blue/40 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-base justify-center"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </MagneticButton>

          <a
            href={getWhatsAppUrl(createGeneralWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <MagneticButton
              variant="whatsapp"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-base justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>WhatsApp Dentology</span>
            </MagneticButton>
          </a>
        </div>
      </div>
    </section>
  );
}
