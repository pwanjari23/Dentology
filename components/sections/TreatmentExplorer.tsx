"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import {
  treatmentsData,
  treatmentCategoriesList,
  TreatmentItem,
} from "@/data/treatmentsData";
import { getWhatsAppUrl, createTreatmentWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";
import { useNavigation } from "@/context/NavigationContext";

export default function TreatmentExplorer() {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>("all");
  const { openAppointmentModal } = useAppointment();
  const { setActiveTab } = useNavigation();

  // Filter featured items based on category selection
  const featuredTreatments = treatmentsData.filter((item) => item.featured);

  const displayedTreatments =
    selectedCategorySlug === "all"
      ? featuredTreatments
      : featuredTreatments.filter((item) => item.categorySlug === selectedCategorySlug);

  const heroFeatured = displayedTreatments[0] || featuredTreatments[0];
  const supportingFeatured = displayedTreatments.slice(1, 3);

  return (
    <section
      id="treatments"
      className="relative py-16 sm:py-24 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Curated Specializations"
          title="Care for every stage of your smile."
          subtitle="From aesthetic enhancements to restorative and specialized care, explore a selection of treatments designed around your individual needs."
          badgeColor="teal"
          centered
        />

        {/* Category Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {treatmentCategoriesList.map((cat) => {
            const isSelected = selectedCategorySlug === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategorySlug(cat.slug)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? "bg-dentology-emerald text-white border-dentology-emerald shadow-md shadow-emerald-950/10 scale-[1.02]"
                    : "bg-[#FAFBF9] text-slate-700 border-slate-200/90 hover:bg-white hover:border-slate-300"
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Layout: Hero Featured Left (60%) + 2 Supporting Right (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto mb-10">
          {/* Main Large Featured Treatment (7 Cols) */}
          {heroFeatured && (
            <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#FAFBF9] border border-slate-200/90 shadow-sm relative overflow-hidden group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-bold font-sans uppercase tracking-wider text-dentology-emerald bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                    {heroFeatured.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    FEATURED {heroFeatured.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-dentology-navy font-normal mb-3 leading-snug">
                  {heroFeatured.title}
                </h3>

                <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                  {heroFeatured.shortDescription}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {heroFeatured.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white px-3 py-1 rounded-xl border border-slate-200/80 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-dentology-emerald shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Preview */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-6">
                <Image
                  src={heroFeatured.image}
                  alt={heroFeatured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openAppointmentModal(heroFeatured.title)}
                  className="px-5 py-3 rounded-xl bg-dentology-emerald hover:bg-[#072B1C] text-white font-sans font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center gap-2"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl(createTreatmentWhatsAppMessage(heroFeatured.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-3 rounded-xl bg-white hover:bg-emerald-50/50 border border-slate-300 text-slate-800 font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp</span>
                  </button>
                </a>
              </div>
            </div>
          )}

          {/* 2 Supporting Featured Treatments Right (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {supportingFeatured.map((item) => (
              <div
                key={item.id}
                className="flex-1 p-6 rounded-3xl bg-[#FAFBF9] border border-slate-200/90 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[10px] font-bold font-sans uppercase tracking-wider text-dentology-emerald bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{item.number}</span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl text-dentology-navy font-normal mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-200/60">
                  <button
                    onClick={() => openAppointmentModal(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-dentology-emerald hover:text-[#072B1C] transition-colors"
                  >
                    <span>Explore Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppUrl(createTreatmentWhatsAppMessage(item.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Treatments CTA */}
        <div className="text-center">
          <button
            onClick={() => setActiveTab("treatments")}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-dentology-emerald hover:bg-[#072B1C] text-white font-sans font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg shadow-emerald-950/10 transition-all group active:scale-[0.98]"
          >
            <span>VIEW ALL CLINICAL TREATMENTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-dentology-gold" />
          </button>
        </div>
      </div>
    </section>
  );
}
