"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { treatmentsData, TreatmentItem } from "@/data/treatmentsData";
import { getWhatsAppUrl, createTreatmentWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

export default function TreatmentExplorer() {
  const [activeId, setActiveId] = useState<string>(treatmentsData[0].id);
  const { openAppointmentModal } = useAppointment();

  return (
    <section id="treatments" className="relative py-14 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Clinical Focus Areas"
          title="Modern care centered on saving your natural smile."
          subtitle="Explore our verified clinical specializations. We practice conservative dentistry—early detection and micro-invasive care without unnecessary procedures."
          badgeColor="blue"
        />

        {/* Interactive Treatment Explorer Rows */}
        <div className="flex flex-col divide-y divide-slate-200 border-y border-slate-200">
          {treatmentsData.map((item: TreatmentItem) => {
            const isExpanded = activeId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                className={`transition-colors duration-300 ${
                  isExpanded ? "bg-slate-50/80" : "bg-transparent hover:bg-slate-50/40"
                }`}
              >
                {/* Header Row Trigger */}
                <button
                  onClick={() => setActiveId(isExpanded ? "" : item.id)}
                  aria-expanded={isExpanded}
                  className="w-full py-5 px-3 sm:py-8 sm:px-6 flex items-center justify-between text-left group focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-10">
                    <span
                      className={`font-serif text-xl sm:text-3xl font-light transition-all duration-300 ${
                        isExpanded ? "text-dentology-blue scale-110 font-bold" : "text-slate-400"
                      }`}
                    >
                      {item.number}
                    </span>
                    <div>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-dentology-teal block mb-0.5 sm:mb-1">
                        {item.category}
                      </span>
                      <h3
                        className={`font-serif text-lg sm:text-2xl lg:text-3xl transition-colors duration-300 ${
                          isExpanded ? "text-dentology-navy font-normal" : "text-slate-800 group-hover:text-dentology-blue font-light"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ml-2 ${
                      isExpanded
                        ? "bg-dentology-blue text-white rotate-45"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                {/* Expandable Content Area */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Image Preview */}
                        <div
                          className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border-2 border-white"
                          data-cursor="VIEW"
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 450px"
                            className="object-cover"
                          />
                        </div>

                        {/* Text & Checklist */}
                        <div className="lg:col-span-7 flex flex-col items-start">
                          <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed mb-6">
                            {item.fullExplanation}
                          </p>

                          {/* Highlights */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-6">
                            {item.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-sans">
                                <div className="w-4 h-4 rounded-full bg-dentology-green/25 text-dentology-navy flex items-center justify-center shrink-0">
                                  <Check className="w-2.5 h-2.5" />
                                </div>
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>

                          {/* CTAs */}
                          <div className="flex flex-wrap items-center gap-3">
                            <button
                              onClick={() => openAppointmentModal(item.title)}
                              className="px-5 py-2.5 rounded-full bg-dentology-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-sm"
                            >
                              Consult on this Treatment
                            </button>

                            <a
                              href={getWhatsAppUrl(createTreatmentWhatsAppMessage(item.title))}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2.5 rounded-full border border-slate-300 text-dentology-navy text-xs font-semibold hover:border-dentology-green flex items-center gap-1.5 transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5 text-dentology-green" />
                              WhatsApp Inquire
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
