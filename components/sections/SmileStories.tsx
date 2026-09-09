"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MoveHorizontal,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Quote,
  UserCheck,
  Award,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { smileCaseStudies, SmileCaseStudy } from "@/data/smileStoriesData";
import { getWhatsAppUrl, createTreatmentWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

export default function SmileStories() {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { openAppointmentModal } = useAppointment();

  const activeCase: SmileCaseStudy =
    smileCaseStudies[activeCaseIndex] || smileCaseStudies[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  // Keyboard navigation for slider
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <section
      id="stories"
      className="relative py-16 sm:py-24 lg:py-28 bg-[#FAFBF9] overflow-hidden"
    >
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#072B1C_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Aesthetic Excellence"
          title="Smile Stories & Restorative Precision"
          subtitle="Thoughtfully planned restorative care that preserves natural tooth structure while revealing your most authentic, confident smile."
          badgeColor="teal"
          centered
        />

        {/* Case Study Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {smileCaseStudies.map((study, idx) => {
            const isSelected = activeCaseIndex === idx;
            return (
              <button
                key={study.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? "bg-dentology-emerald text-white border-dentology-emerald shadow-md shadow-emerald-950/10 scale-[1.02]"
                    : "bg-white text-slate-700 border-slate-200/90 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <span>Case 0{idx + 1}: {study.title}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial 2-Column Case Study Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* ================= LEFT COLUMN: Case Details & Editorial Copy ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col gap-5"
              >
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-dentology-emerald text-[11px] font-bold tracking-wider uppercase self-start">
                  <Award className="w-3.5 h-3.5 text-dentology-gold" />
                  <span>{activeCase.category}</span>
                </div>

                {/* Case Title */}
                <h3 className="font-serif text-2xl sm:text-3xl text-dentology-navy font-normal leading-snug">
                  {activeCase.title}
                </h3>

                {/* Quote Block */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm relative">
                  <Quote className="w-6 h-6 text-dentology-gold/40 mb-2" />
                  <p className="text-slate-700 font-sans text-xs sm:text-sm italic leading-relaxed">
                    "{activeCase.quote}"
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-dentology-emerald">
                    <UserCheck className="w-3.5 h-3.5 text-dentology-gold" />
                    <span>Dr. Sanika Sharma — Clinical Lead</span>
                  </div>
                </div>

                {/* Clinical Focus & Highlights */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">
                    Clinical Highlights
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-dentology-emerald shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() =>
                      openAppointmentModal(
                        `Smile Story Consultation: ${activeCase.title}`
                      )
                    }
                    className="flex-1 px-5 py-3.5 rounded-xl bg-dentology-emerald hover:bg-[#072B1C] text-white font-sans font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.98]"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      createTreatmentWhatsAppMessage(activeCase.title)
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial"
                  >
                    <button className="w-full px-4 py-3.5 rounded-xl bg-white hover:bg-emerald-50/50 border border-slate-300 text-slate-800 font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]">
                      <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>WhatsApp</span>
                    </button>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= RIGHT COLUMN: Interactive Before/After Visual ================= */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div
              ref={containerRef}
              role="slider"
              tabIndex={0}
              aria-label="Before and after treatment comparison slider"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              onKeyDown={handleKeyDown}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize bg-slate-900 focus:outline-none focus:ring-2 focus:ring-dentology-emerald focus:ring-offset-2"
            >
              {/* After Image (Full background) */}
              <Image
                src={activeCase.afterImage}
                alt={`${activeCase.title} - ${activeCase.afterLabel}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover object-center"
              />
              {/* After Label Badge */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-100 font-sans text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-md">
                {activeCase.afterLabel}
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={activeCase.beforeImage}
                  alt={`${activeCase.title} - ${activeCase.beforeLabel}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover object-center"
                />
                {/* Before Label Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-slate-200 font-sans text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-md">
                  {activeCase.beforeLabel}
                </div>
              </div>

              {/* Draggable Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_16px_rgba(0,0,0,0.6)] z-30"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white shadow-xl flex items-center gap-1.5 text-dentology-emerald border border-slate-200">
                  <MoveHorizontal className="w-4 h-4 text-dentology-emerald" />
                  <span className="hidden sm:inline font-sans text-[10px] font-bold tracking-wider uppercase text-slate-700">
                    DRAG
                  </span>
                </div>
              </div>
            </div>

            {/* Micro Helper Note */}
            <div className="flex items-center justify-between mt-3 px-2 text-xs font-sans text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <Sparkles className="w-3.5 h-3.5 text-dentology-gold shrink-0" />
                Drag slider or use left/right arrow keys to compare.
              </span>
              <span className="text-[11px] text-slate-400 font-normal hidden sm:inline">
                *Clinical case study results
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
