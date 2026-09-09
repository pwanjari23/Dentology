"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle, MessageCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { faqData, FAQItem } from "@/data/faqData";
import { getWhatsAppUrl, createGeneralWhatsAppMessage } from "@/lib/whatsapp";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-14 sm:py-24 lg:py-32 bg-slate-50/70 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Help & Information"
          title="Frequently Asked Questions"
          subtitle="Clear, verified answers about visits, intraoral 3D technology, and consultations at Dentology."
          badgeColor="blue"
          centered
        />

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item: FAQItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200 hover:border-dentology-blue/40"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-dentology-blue"
                >
                  <span className="font-serif text-base sm:text-xl text-dentology-navy font-normal">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-dentology-blue text-white rotate-45"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-6 text-xs sm:text-base text-slate-600 font-sans leading-relaxed border-t border-slate-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 font-sans flex items-center justify-center gap-2">
          <span>Have a different question for Dr. Sanika Sharma?</span>
          <a
            href={getWhatsAppUrl(createGeneralWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dentology-blue font-bold hover:underline inline-flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5 text-dentology-green" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
