"use client";

import { motion } from "framer-motion";
import { Calendar, Stethoscope, FileText, ArrowRight, Sparkles } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { useAppointment } from "@/context/AppointmentContext";

const steps = [
  {
    number: "01",
    stepName: "BOOK",
    title: "Simple WhatsApp or Online Request",
    description:
      "Choose a preferred date and time through our fast WhatsApp appointment flow. Our team promptly confirms your consultation slot.",
    icon: Calendar,
    color: "text-dentology-blue",
    bgColor: "bg-dentology-blue/10",
  },
  {
    number: "02",
    stepName: "MEET",
    title: "Unhurried Consultation & 3D Scan",
    description:
      "Dr. Sanika Sharma examines your teeth in our comfortable Jaripatka studio, taking a gentle 3D digital scan so you can view your mouth in real-time.",
    icon: Stethoscope,
    color: "text-dentology-green",
    bgColor: "bg-dentology-green/20",
  },
  {
    number: "03",
    stepName: "PLAN",
    title: "Conservative, Transparent Plan",
    description:
      "Clear, step-by-step guidance focused on natural tooth preservation and proactive care. No surprises, no rushed procedures.",
    icon: FileText,
    color: "text-dentology-teal",
    bgColor: "bg-dentology-teal/15",
  },
];

export default function PatientJourney() {
  const { openAppointmentModal } = useAppointment();

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Patient Journey"
          title="What to expect when you visit Dentology."
          subtitle="A transparent, reassuring, and comfortable 3-step pathway from your first message to complete oral health confidence."
          badgeColor="blue"
          centered
        />

        <div className="relative max-w-5xl mx-auto mt-8 sm:mt-16">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-16 right-16 h-1 bg-gradient-to-r from-dentology-blue via-dentology-green to-dentology-teal -translate-y-12 z-0">
            {/* Animated miniature guide walking along the timeline */}
            <motion.div
              className="absolute -top-6 w-8 h-8 rounded-full bg-white shadow-md border-2 border-dentology-blue flex items-center justify-center text-dentology-blue"
              animate={{
                left: ["0%", "48%", "96%", "48%", "0%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-dentology-teal" />
            </motion.div>
          </div>

          {/* 3 Step Cards Grid: Swipeable Track on Mobile, 3-Column on Desktop */}
          <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-8 relative z-10 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar pb-2">
            {steps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="w-[82vw] max-w-[320px] shrink-0 md:w-auto md:max-w-none snap-center flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/80 shadow-card hover:shadow-glass-hover hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  {/* Step Number & Category Badge (Clean Vertical Separation) */}
                  <div className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-md border border-slate-200/90 mb-5 sm:mb-6 group-hover:scale-105 transition-transform">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-dentology-navy leading-none mb-1 sm:mb-1.5">
                      {step.number}
                    </span>
                    <div
                      className={`px-2 sm:px-2.5 py-0.5 rounded-full ${step.bgColor} text-[9px] sm:text-[10px] font-bold tracking-widest uppercase ${step.color} whitespace-nowrap leading-none`}
                    >
                      {step.stepName}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-lg sm:text-xl text-dentology-navy font-normal mb-2 sm:mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Swipe Hint Dots */}
          <div className="flex md:hidden items-center justify-center gap-1.5 mt-4 text-[11px] text-slate-400 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-dentology-blue" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="ml-1 text-[10px] uppercase font-bold tracking-wider text-slate-400">Swipe steps</span>
          </div>

          {/* Bottom CTA trigger */}
          <div className="mt-8 sm:mt-12 text-center">
            <button
              onClick={() => openAppointmentModal("Patient Journey Step 01")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-dentology-emerald text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-dentology-emerald-dark transition-all shadow-md active:scale-95"
            >
              <span>Begin Your Step 01</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
