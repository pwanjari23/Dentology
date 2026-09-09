"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  AlertCircle,
  ShieldCheck,
  Scan,
  HelpCircle,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  UserCheck,
  ChevronRight,
  Compass,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import {
  patientIntentOptions,
  IntentOptionData,
} from "@/data/patientIntentData";
import { getWhatsAppUrl, createIntentWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

// Icon mapping helper
const ICON_MAP: Record<string, typeof Sparkles> = {
  Sparkles,
  AlertCircle,
  ShieldCheck,
  Scan,
  HelpCircle,
};

export default function PatientIntent() {
  const [selectedId, setSelectedId] = useState<string>("smile");
  const { openAppointmentModal } = useAppointment();

  const activeOption: IntentOptionData =
    patientIntentOptions.find((o) => o.id === selectedId) ||
    patientIntentOptions[0];

  return (
    <section
      id="intent"
      className="relative py-16 sm:py-24 lg:py-28 bg-[#F9FAF8] overflow-hidden"
    >
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#072B1C_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with tight, intentional spacing */}
        <SectionHeader
          eyebrow="Interactive Pathway"
          title="What brings you here today?"
          subtitle="Select your current intention to see how we can best support your dental health."
          badgeColor="teal"
          centered
        />

        {/* Interactive 2-Column Pathway Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch max-w-6xl mx-auto mt-8 sm:mt-10">
          {/* ================= LEFT COLUMN: Pathway Options (5 cards) ================= */}
          <div
            className="lg:col-span-5 flex flex-col gap-3"
            role="tablist"
            aria-label="Patient Intent Pathways"
          >
            {patientIntentOptions.map((opt, index) => {
              const IconComponent = ICON_MAP[opt.iconName] || Compass;
              const isSelected = selectedId === opt.id;

              return (
                <button
                  key={opt.id}
                  id={`tab-${opt.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${opt.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelectedId(opt.id)}
                  className={`w-full text-left p-4 sm:p-4.5 rounded-2xl transition-all duration-250 flex items-center justify-between gap-3.5 border text-slate-800 outline-none focus:ring-2 focus:ring-dentology-emerald focus:ring-offset-2 ${
                    isSelected
                      ? "bg-white border-dentology-emerald shadow-lg shadow-emerald-950/5 ring-1 ring-dentology-emerald/20 translate-x-1"
                      : "bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Icon Box */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-250 ${
                        isSelected
                          ? "bg-dentology-emerald text-dentology-gold"
                          : "bg-emerald-50 text-dentology-emerald"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Text Container */}
                    <div className="flex flex-col min-w-0">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                          isSelected
                            ? "text-dentology-emerald"
                            : "text-slate-400"
                        }`}
                      >
                        Pathway 0{index + 1}
                      </span>
                      <h4
                        className={`text-sm sm:text-[15px] font-sans transition-colors truncate ${
                          isSelected
                            ? "font-bold text-dentology-navy"
                            : "font-medium text-slate-700"
                        }`}
                      >
                        {opt.title}
                      </h4>
                    </div>
                  </div>

                  {/* Radio / Selection Indicator */}
                  <div className="shrink-0 flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        isSelected
                          ? "border-dentology-emerald bg-dentology-emerald text-dentology-gold scale-105"
                          : "border-slate-300 bg-transparent text-transparent"
                      }`}
                    >
                      <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ================= RIGHT COLUMN: Recommendation Panel Card ================= */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOption.id}
                id={`panel-${activeOption.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeOption.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full flex flex-col justify-between p-6 sm:p-8 lg:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden"
              >
                {/* Accent Top Border Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-dentology-emerald via-dentology-gold to-dentology-emerald" />

                <div>
                  {/* Top Badge Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pt-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-dentology-emerald text-[11px] font-bold tracking-wider uppercase font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-dentology-gold animate-pulse" />
                      RECOMMENDED PATHWAY
                    </div>
                    <span className="text-xs font-medium text-slate-500 font-sans px-2.5 py-0.5 rounded-md bg-slate-100">
                      {activeOption.category}
                    </span>
                  </div>

                  {/* Title & Lead */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-dentology-navy font-normal mb-3 leading-snug">
                    {activeOption.title}
                  </h3>

                  <p className="text-slate-600 font-sans text-sm sm:text-base font-medium mb-6 leading-relaxed">
                    {activeOption.lead}
                  </p>

                  {/* Doctor Recommendation & Details Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFBF9] border border-emerald-900/10 mb-6">
                    <div className="flex items-center gap-2 text-dentology-emerald font-sans font-semibold text-xs mb-2.5">
                      <UserCheck className="w-4 h-4 text-dentology-gold shrink-0" />
                      <span>{activeOption.doctorNote}</span>
                    </div>

                    <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed mb-4">
                      {activeOption.recommendation}
                    </p>

                    {/* Key Highlights / Features */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/60">
                      {activeOption.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-dentology-emerald shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <button
                    onClick={() =>
                      openAppointmentModal(`Pathway: ${activeOption.title}`)
                    }
                    className="flex-1 px-6 py-3.5 rounded-xl bg-dentology-emerald hover:bg-[#072B1C] text-white font-sans font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.98]"
                  >
                    <span>{activeOption.primaryCtaLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      createIntentWhatsAppMessage(activeOption.whatsappMessage)
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial"
                  >
                    <button className="w-full px-5 py-3.5 rounded-xl bg-white hover:bg-emerald-50/50 border border-slate-300 text-slate-800 font-sans font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-[0.98]">
                      <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Discuss on WhatsApp</span>
                    </button>
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
