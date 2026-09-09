"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause, Sparkles, Instagram, ArrowRight } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

const clinicGalleryImages = [
  { src: "/images/clinic/clinic-interior.jpg", title: "Modern Treatment Suite" },
  { src: "/images/treatments/intraoral-scan.jpg", title: "3D Digital Diagnostic" },
  { src: "/images/treatments/smile-aesthetics.jpg", title: "Aesthetic Studio" },
  { src: "/images/hero/hero-bg.png", title: "Patient Care Environment" },
];

export default function VideoExperience() {
  const [isPlaying, setIsPlaying] = useState(true);
  const { openAppointmentModal } = useAppointment();

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-[#072B1C] text-white overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-dentology-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-dentology-gold border border-white/20 text-[11px] font-bold uppercase tracking-widest mb-3 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinic Environment</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-3 text-white">
            Inside Dentology
          </h2>

          <p className="text-emerald-100/80 font-sans text-sm sm:text-base leading-relaxed">
            An environment designed around modern care — combining high-definition 3D technology, conservative dentistry, and genuine neighborhood warmth in Jaripatka.
          </p>
        </div>

        {/* Main Cinematic Video Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 mb-10"
        >
          <Image
            src="/images/clinic/clinic-interior.jpg"
            alt="Inside Dentology House of Dentistry and Aesthetics, Jaripatka, Nagpur"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#072B1C]/90 via-[#072B1C]/40 to-black/30 pointer-events-none" />

          {/* Overlay Headline */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none">
            <span className="text-dentology-gold text-xs font-bold tracking-widest uppercase mb-2 font-sans">
              DENTOLOGY • JARIPATKA, NAGPUR
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-light max-w-xl leading-snug">
              &ldquo;Your destination for joyful smiles.&rdquo;
            </h3>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause visual preview" : "Play visual preview"}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold font-sans hover:bg-white/25 transition-all"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? "PLAYING PREVIEW" : "PAUSED"}</span>
            </button>

            <button
              onClick={() => openAppointmentModal("Inside Dentology Visit")}
              className="px-4 py-2 rounded-full bg-dentology-gold text-dentology-emerald-dark font-sans font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-md"
            >
              Book a Visit
            </button>
          </div>
        </motion.div>

        {/* Editorial Image Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-8">
          {clinicGalleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-sm group"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-[11px] font-sans font-semibold text-white truncate">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Follow CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/dentology_og1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs font-semibold tracking-wide transition-all"
          >
            <Instagram className="w-4 h-4 text-dentology-gold" />
            <span>FOLLOW DENTOLOGY ON INSTAGRAM</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
