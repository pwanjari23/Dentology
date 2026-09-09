"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, AlertCircle, ShieldCheck, Scan, HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../ui/MagneticButton";
import { getWhatsAppUrl, createIntentWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

interface IntentOption {
  id: string;
  title: string;
  icon: any;
  lead: string;
  recommendation: string;
  color: string;
}

const intentOptions: IntentOption[] = [
  {
    id: "smile",
    title: "I want to improve my smile",
    icon: Sparkles,
    lead: "A confident smile starts with understanding your unique facial and dental harmony.",
    recommendation:
      "We recommend a personalized smile consultation with Dr. Sanika Sharma. We examine tooth alignment, contouring, and natural tooth aesthetics using non-invasive evaluation.",
    color: "from-blue-500/10 to-teal-500/10 border-dentology-blue",
  },
  {
    id: "concern",
    title: "I have a dental concern or pain",
    icon: AlertCircle,
    lead: "Delaying treatment turns small, reversible dental issues into complex infections.",
    recommendation:
      "Please don't wait for pain to worsen or rely on unverified advice. Dr. Sanika Sharma can examine the tooth clinically, identify the root cause, and formulate a conservative tooth-saving plan.",
    color: "from-rose-500/10 to-amber-500/10 border-dentology-terracotta",
  },
  {
    id: "preventive",
    title: "I want a routine check-up & preventive care",
    icon: ShieldCheck,
    lead: "Gentle enamel maintenance and personalized oral hygiene education.",
    recommendation:
      "Our comprehensive check-up evaluates enamel thickness, gum health, and brushing mechanics to prevent sensitivity and decay before symptoms even begin.",
    color: "from-emerald-500/10 to-teal-500/10 border-dentology-green",
  },
  {
    id: "scanning",
    title: "I want to explore 3D intraoral scanning",
    icon: Scan,
    lead: "Experience real-time high-definition digital visualization of your teeth and gums.",
    recommendation:
      "No gagging, no messy impression putty. In just a few minutes, we create a precision 3D digital model of your mouth that you can see and discuss together on screen.",
    color: "from-cyan-500/10 to-blue-500/10 border-dentology-aqua",
  },
  {
    id: "unsure",
    title: "I'm not sure yet — just exploring",
    icon: HelpCircle,
    lead: "We welcome you to visit, meet Dr. Sanika Sharma, and take things at your own pace.",
    recommendation:
      "Dentology was built as a warm, welcoming neighborhood studio in Jaripatka. Feel free to message us on WhatsApp with any general questions before planning a visit.",
    color: "from-slate-500/10 to-slate-400/10 border-slate-300",
  },
];

export default function PatientIntent() {
  const [selectedId, setSelectedId] = useState<string>("smile");
  const { openAppointmentModal } = useAppointment();

  const activeOption = intentOptions.find((o) => o.id === selectedId) || intentOptions[0];

  return (
    <section id="intent" className="relative py-14 sm:py-24 lg:py-32 bg-slate-50/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Interactive Pathway"
          title="What brings you here today?"
          subtitle="Select your current intention to see how we can best support your dental health. (Informational guide, not a medical diagnosis)."
          badgeColor="green"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          {/* Intent Selector: Horizontal Scrollable Chips on Mobile, Vertical Stack on Desktop */}
          <div className="lg:col-span-5 flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar gap-2.5 pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
            {intentOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedId === opt.id;

              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedId(opt.id)}
                  className={`shrink-0 lg:shrink p-3 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 flex items-center gap-2.5 sm:gap-4 border whitespace-nowrap lg:whitespace-normal ${
                    isSelected
                      ? "bg-white shadow-card border-dentology-blue scale-[1.02] ring-2 ring-dentology-blue/20"
                      : "bg-white/60 border-slate-200/80 hover:bg-white opacity-85 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-dentology-blue text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`text-xs sm:text-sm font-semibold font-sans transition-colors ${
                        isSelected ? "text-dentology-navy font-bold" : "text-slate-700"
                      }`}
                    >
                      {opt.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Pathway Content Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOption.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[32px] bg-white border-2 shadow-card ${activeOption.color}`}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-dentology-navy mb-3 sm:mb-4">
                  Recommended Pathway
                </div>

                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-dentology-navy font-normal mb-3 sm:mb-4">
                  {activeOption.title}
                </h3>

                <p className="text-slate-700 font-sans text-sm sm:text-base font-medium mb-4 leading-relaxed">
                  {activeOption.lead}
                </p>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/70 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {activeOption.recommendation}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <MagneticButton
                    variant="primary"
                    onClick={() => openAppointmentModal(`Intent: ${activeOption.title}`)}
                    className="w-full sm:w-auto text-center justify-center text-xs sm:text-sm py-3 sm:py-3.5"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </MagneticButton>

                  <a
                    href={getWhatsAppUrl(createIntentWhatsAppMessage(activeOption.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <MagneticButton variant="outline" className="w-full text-center justify-center text-xs sm:text-sm py-3 sm:py-3.5">
                      <MessageCircle className="w-4 h-4 mr-2 text-dentology-green" />
                      Discuss on WhatsApp
                    </MagneticButton>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
