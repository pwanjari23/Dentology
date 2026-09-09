"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  X,
  ChevronRight,
  ShieldCheck,
  Award,
} from "lucide-react";
import {
  treatmentsData,
  treatmentCategoriesList,
  TreatmentItem,
} from "@/data/treatmentsData";
import { getWhatsAppUrl, createTreatmentWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

export default function TreatmentsCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeDetailTreatment, setActiveDetailTreatment] =
    useState<TreatmentItem | null>(null);
  const { openAppointmentModal } = useAppointment();

  // Filter logic
  const filteredTreatments = useMemo(() => {
    return treatmentsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.some((k) =>
          k.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Related treatments helper for detail modal
  const getRelatedTreatments = (current: TreatmentItem) => {
    return treatmentsData
      .filter(
        (t) => t.categorySlug === current.categorySlug && t.id !== current.id
      )
      .slice(0, 3);
  };

  return (
    <section className="relative min-h-screen bg-[#FAFBF9] pb-24 text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <div className="bg-[#072B1C] text-white pt-16 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-dentology-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-dentology-gold border border-white/20 text-[11px] font-bold uppercase tracking-widest mb-4 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DENTOLOGY TREATMENTS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-4 text-white">
            Thoughtful care for every smile.
          </h1>

          <p className="text-slate-300 font-sans text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our complete dental treatment catalog, from aesthetic and restorative care to specialized solutions for pain, sleep, and oral health.
          </p>
        </div>
      </div>

      {/* ================= FILTER & SEARCH BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
            {treatmentCategoriesList.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`shrink-0 px-4 py-2 rounded-full font-sans text-xs font-semibold transition-all border whitespace-nowrap ${
                    isSelected
                      ? "bg-dentology-emerald text-white border-dentology-emerald shadow-sm"
                      : "bg-[#FAFBF9] text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FAFBF9] border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-dentology-emerald/30 focus:bg-white transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ================= CATALOG GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        {filteredTreatments.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-white border border-slate-200/80 max-w-md mx-auto">
            <p className="text-slate-600 font-sans text-sm mb-4">
              No treatments found matching your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-full bg-dentology-emerald text-white font-sans text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Number Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[10px] font-bold font-sans uppercase tracking-wider text-dentology-emerald bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      {treatment.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {treatment.number}
                    </span>
                  </div>

                  {/* Thumbnail Image */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-100 shadow-2xs mb-4">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl text-dentology-navy font-normal mb-2 leading-snug">
                    {treatment.title}
                  </h3>

                  <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {treatment.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {treatment.highlights.slice(0, 2).map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold text-slate-600 bg-[#FAFBF9] px-2.5 py-1 rounded-lg border border-slate-200/70"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Action Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveDetailTreatment(treatment)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-dentology-emerald hover:text-[#072B1C] transition-colors"
                  >
                    <span>Explore Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      createTreatmentWhatsAppMessage(treatment.title)
                    )}
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
        )}
      </div>

      {/* ================= TREATMENT DETAIL MODAL / DRAWER ================= */}
      <AnimatePresence>
        {activeDetailTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-slate-200 p-6 sm:p-9 text-slate-800"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDetailTreatment(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-xs font-sans text-slate-400 mb-4">
                <span>Home</span>
                <ChevronRight className="w-3 h-3" />
                <span>Treatments</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-dentology-emerald font-semibold">
                  {activeDetailTreatment.title}
                </span>
              </div>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-dentology-emerald text-[11px] font-bold tracking-wider uppercase mb-3 font-sans">
                <span>{activeDetailTreatment.category}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-dentology-navy font-normal mb-3 leading-snug">
                {activeDetailTreatment.title}
              </h2>

              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                {activeDetailTreatment.fullDescription}
              </p>

              {/* Image Banner */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 mb-8">
                <Image
                  src={activeDetailTreatment.image}
                  alt={activeDetailTreatment.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* What is this treatment? */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFBF9] border border-slate-200/80 mb-6">
                <h4 className="font-serif text-lg font-medium text-dentology-navy mb-2">
                  What is this treatment?
                </h4>
                <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed">
                  {activeDetailTreatment.whatIsIt}
                </p>
              </div>

              {/* Who May Benefit */}
              <div className="mb-6">
                <h4 className="font-serif text-lg font-medium text-dentology-navy mb-3">
                  Who May Benefit
                </h4>
                <div className="space-y-2">
                  {activeDetailTreatment.whoMayBenefit.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-dentology-emerald shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect Timeline */}
              <div className="mb-8">
                <h4 className="font-serif text-lg font-medium text-dentology-navy mb-3">
                  What to Expect
                </h4>
                <div className="space-y-2.5">
                  {activeDetailTreatment.whatToExpect.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans p-3 rounded-xl bg-[#FAFBF9] border border-slate-200/60"
                    >
                      <span className="w-5 h-5 rounded-full bg-dentology-emerald text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tag */}
              <div className="flex items-center gap-2 text-xs font-semibold text-dentology-emerald bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200/60 mb-8">
                <Award className="w-4 h-4 text-dentology-gold shrink-0" />
                <span>Technology Used: {activeDetailTreatment.technology}</span>
              </div>

              {/* Related Treatments */}
              {getRelatedTreatments(activeDetailTreatment).length > 0 && (
                <div className="mb-8 pt-6 border-t border-slate-200/80">
                  <h4 className="font-serif text-base font-medium text-dentology-navy mb-3">
                    Related Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {getRelatedTreatments(activeDetailTreatment).map((rel) => (
                      <button
                        key={rel.id}
                        onClick={() => setActiveDetailTreatment(rel)}
                        className="text-xs font-semibold font-sans text-slate-700 bg-[#FAFBF9] hover:bg-emerald-50 hover:text-dentology-emerald px-3 py-1.5 rounded-xl border border-slate-200 transition-colors"
                      >
                        {rel.title} →
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Final CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    const title = activeDetailTreatment.title;
                    setActiveDetailTreatment(null);
                    openAppointmentModal(title);
                  }}
                  className="flex-1 px-6 py-3.5 rounded-xl bg-dentology-emerald hover:bg-[#072B1C] text-white font-sans font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>BOOK AN APPOINTMENT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl(
                    createTreatmentWhatsAppMessage(activeDetailTreatment.title)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial"
                >
                  <button className="w-full px-5 py-3.5 rounded-xl bg-white hover:bg-emerald-50/50 border border-slate-300 text-slate-800 font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>CHAT ON WHATSAPP</span>
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
