"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause, Sparkles, VolumeX, Volume2 } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { useAppointment } from "@/context/AppointmentContext";

export default function VideoExperience() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const { openAppointmentModal } = useAppointment();

  return (
    <section className="relative py-24 lg:py-32 bg-dentology-navy text-white overflow-hidden">
      {/* Background subtle light cones */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-dentology-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-dentology-teal/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-dentology-teal border border-white/20 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Cinematic Studio Vision
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
            See dentistry differently.
          </h2>

          <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
            Where digital high-definition accuracy meets genuine neighborhood warmth. Experience
            how Dr. Sanika Sharma reimagines dental consultations in Jaripatka.
          </p>
        </div>

        {/* Video Canvas Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto aspect-[16/9] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-900 group"
          data-cursor="VIEW"
        >
          {/* Visual Poster / Frame */}
          <Image
            src="/images/clinic/clinic-interior.jpg"
            alt="Inside Dentology dental clinic Nagpur"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />

          {/* Cinematic overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-dentology-navy/90 via-dentology-navy/40 to-black/30 pointer-events-none" />

          {/* Central Overlay Quote */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none">
            <span className="text-dentology-teal text-xs font-bold tracking-widest uppercase mb-2">
              DENTOLOGY • NAGPUR
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-light max-w-xl leading-snug">
              &ldquo;Your destination for joyful smiles.&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans mt-3 max-w-md">
              Every appointment is a calm, unhurried dialogue centered on your comfort.
            </p>
          </div>

          {/* Interactive Player Controls on Bottom Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause visual" : "Play visual"}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-dentology-navy transition-all"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <span className="text-xs font-mono text-slate-300 tracking-wider">
                {isPlaying ? "PLAYING CINEMATIC PREVIEW" : "PAUSED"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => openAppointmentModal("Video Section Consultation")}
                className="px-4 py-2 rounded-full bg-dentology-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-md"
              >
                Book a Visit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
