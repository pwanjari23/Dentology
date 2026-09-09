"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Star,
  Calendar,
  ShieldCheck,
  Award,
} from "lucide-react";
import { heroData } from "@/data/heroData";
import { doctorData } from "@/data/doctorData";
import { getWhatsAppUrl, createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

export default function Hero() {
  const { openAppointmentModal } = useAppointment();
  const [imgLoaded, setImgLoaded] = useState(false);

  const handlePrimaryCTA = () => {
    if (heroData.primaryCTA.action === "appointment") {
      openAppointmentModal("Hero Primary CTA");
    }
  };

  const getSecondaryCTAHref = () => {
    if (heroData.secondaryCTA.action === "whatsapp") {
      return getWhatsAppUrl(createGeneralWhatsAppMessage());
    }
    return heroData.secondaryCTA.url || "#";
  };

  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-[100vh] flex flex-col overflow-hidden bg-[#051f15]">
      {/* ═══════════════ BACKGROUND LAYER ═══════════════ */}
      <div className="absolute inset-0 z-0">
        {/* Hero background image with loading state */}
        <Image
          src={heroData.backgroundImage}
          alt={heroData.backgroundImageAlt}
          fill
          priority
          sizes="100vw"
          quality={90}
          className={`object-cover object-center transition-opacity duration-1000 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgLoaded(true)}
        />

        {/* Cinematic gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051f15]/95 via-[#051f15]/80 to-[#051f15]/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051f15]/90 via-transparent to-[#051f15]/40 z-10" />

        {/* Subtle gold ambient glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-dentology-gold/8 rounded-full blur-[120px] pointer-events-none z-10" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-400/5 rounded-full blur-[100px] pointer-events-none z-10" />

        {/* Elegant dot grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.04)_1px,transparent_1px)] [background-size:32px_32px] z-10 pointer-events-none" />
      </div>

      {/* ═══════════════ MAIN CONTENT ═══════════════ */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-32 sm:pt-36 lg:pt-40 pb-24 sm:pb-28">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/8 backdrop-blur-xl border border-dentology-gold/25 text-dentology-gold-light font-sans text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase mb-7 sm:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>{heroData.eyebrow}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-[2.5rem] sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem] font-normal text-white leading-[1.08] tracking-tight mb-6 sm:mb-7"
            >
              {heroData.headline}
              <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-dentology-gold-light via-amber-200 to-dentology-gold">
                {heroData.headlineAccent}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[15px] sm:text-base lg:text-lg text-emerald-100/80 font-sans leading-[1.7] max-w-xl mb-10 sm:mb-12"
            >
              {heroData.subtitle}
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12 sm:mb-14"
            >
              {/* Primary CTA */}
              <button
                onClick={handlePrimaryCTA}
                className="group relative px-7 py-4 rounded-full bg-gradient-to-r from-dentology-gold via-amber-300 to-dentology-gold-light text-[#072B1C] font-sans font-bold text-sm tracking-wide shadow-[0_8px_32px_-4px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_40px_-4px_rgba(212,175,55,0.5)] hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.97]"
              >
                <Calendar className="w-4 h-4" />
                <span>{heroData.primaryCTA.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                href={getSecondaryCTAHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-full bg-white/8 hover:bg-white/14 backdrop-blur-xl border border-white/15 text-white font-sans font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.97]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>{heroData.secondaryCTA.label}</span>
              </a>
            </motion.div>

            {/* Doctor Identity + Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
            >
              {/* Doctor Card */}
              <div className="flex items-center gap-3.5 p-3 pr-5 rounded-2xl bg-white/6 backdrop-blur-xl border border-white/10">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-dentology-gold/40 shrink-0">
                  <Image
                    src={heroData.doctorImage}
                    alt={heroData.doctorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-[15px] font-medium text-white leading-none">
                      {heroData.doctorName}
                    </span>
                    <Award className="w-3.5 h-3.5 text-dentology-gold shrink-0" />
                  </div>
                  <span className="text-[11px] text-dentology-gold-light/80 font-sans mt-1 tracking-wide">
                    {heroData.doctorTitle} • {heroData.clinicLocation}
                  </span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-6 sm:gap-8">
                {heroData.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <span className="font-serif text-xl sm:text-2xl font-medium text-white leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-emerald-200/60 font-sans font-medium uppercase tracking-wider mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════ BOTTOM TRUST BAR ═══════════════ */}
      <div className="relative z-20 border-t border-white/8">
        <div className="bg-black/25 backdrop-blur-md py-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-wrap items-center justify-around gap-x-6 gap-y-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-emerald-100/70">
            {heroData.trustIndicators.map((indicator, idx) => {
              const iconMap: Record<string, typeof ShieldCheck> = {
                ShieldCheck,
                Sparkles,
              };
              const Icon = iconMap[indicator.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2 ${
                    idx === 1 ? "hidden sm:flex" : ""
                  }`}
                >
                  <Icon className="w-4 h-4 text-dentology-gold/80" />
                  <span>{indicator.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
