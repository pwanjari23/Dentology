"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scan, ShieldCheck, Sparkles } from "lucide-react";
import SpinningStamp from "./SpinningStamp";
import WaterMistParticles from "./WaterMistParticles";
import AnimatedDentalCrew from "./AnimatedDentalCrew";

export default function DentalSculptVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);

  const { scrollY } = useScroll();
  const scaleOnScroll = useTransform(scrollY, [0, 500], [1, 0.94]);
  const yOnScroll = useTransform(scrollY, [0, 500], [0, 50]);

  useEffect(() => {
    const checkInteractive = () => {
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const noReduced = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsInteractive(fine && noReduced);
    };
    checkInteractive();
    window.addEventListener("resize", checkInteractive);
    return () => window.removeEventListener("resize", checkInteractive);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isInteractive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setMousePos({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ scale: scaleOnScroll, y: yOnScroll }}
      className="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[620px] aspect-[4/4.5] sm:aspect-[4/4.8] lg:aspect-[4/5] mx-auto flex items-center justify-center select-none"
    >
      {/* LAYER 1: Deep organic lighting and fluid backdrops */}
      <motion.div
        animate={{
          x: mousePos.x * -8,
          y: mousePos.y * -8,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        className="absolute inset-2 rounded-[36px] sm:rounded-[48px] bg-gradient-to-tr from-dentology-gold/25 via-emerald-500/20 to-dentology-emerald/30 blur-2xl sm:blur-3xl -z-10"
      />

      {/* Decorative dashed circular accent */}
      <div className="absolute top-4 right-2 w-32 sm:w-48 h-32 sm:h-48 rounded-full border border-dentology-gold/30 pointer-events-none animate-[spin_80s_linear_infinite]" />

      {/* LAYER 2: Main 3D Tooth Sculpture with Miniature Dental Specialists */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: mousePos.x * 10,
          y: mousePos.y * 10,
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.2 },
          scale: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
          x: { type: "spring", damping: 30, stiffness: 180 },
          y: { type: "spring", damping: 30, stiffness: 180 },
        }}
        className="relative w-full h-full rounded-[36px] overflow-hidden group"
        data-cursor="VIEW"
      >
        {/* The high-res 3D Tooth Crew Artwork */}
        <Image
          src="/images/hero/3d-tooth-crew-clean.png"
          alt="Giant 3D tooth sculpture with miniature dental specialists in blue scrubs"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 620px"
          className="object-contain object-bottom sm:object-center group-hover:scale-105 transition-transform duration-700"
        />

        {/* Animated Climbing Specialist, Buffer, Ultrasonic Drill, and Rappeller */}
        <AnimatedDentalCrew />

        {/* Animated Water Mist Particles over the tooth crown */}
        <WaterMistParticles />

        {/* Floating Mini In-Card Badge */}
        <div className="absolute top-3 sm:top-5 right-3 sm:right-5 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-md text-[10px] sm:text-xs font-bold text-dentology-navy">
          <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-dentology-blue" />
          <span>Precision Studio</span>
        </div>
      </motion.div>

      {/* LAYER 3: Rotating Consultation Stamp (Placed lower-left of the tooth) */}
      <motion.div
        animate={{
          x: mousePos.x * 16,
          y: mousePos.y * 16,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-8 z-30"
      >
        <SpinningStamp />
      </motion.div>

      {/* LAYER 4: Floating Verified Pills with Parallax */}

      {/* Pill 1: 3D Intraoral Scanning (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{
          opacity: 1,
          x: mousePos.x * 14,
          y: mousePos.y * 14,
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.5 },
          x: { type: "spring", damping: 25, stiffness: 180 },
          y: { type: "spring", damping: 25, stiffness: 180 },
        }}
        className="absolute top-3 sm:top-8 -left-2 sm:-left-10 z-20"
      >
        <div className="flex items-center gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md shadow-glass border border-dentology-gold/30 hover:scale-105 hover:shadow-glass-hover transition-all">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-dentology-emerald/15 text-dentology-emerald flex items-center justify-center font-bold">
            <Scan className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400">Digital</span>
            <span className="text-[11px] sm:text-xs font-bold text-dentology-emerald">3D Scanning</span>
          </div>
        </div>
      </motion.div>

      {/* Pill 2: Tooth Preservation (Right Center) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{
          opacity: 1,
          x: mousePos.x * 18,
          y: mousePos.y * 18,
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.65 },
          x: { type: "spring", damping: 25, stiffness: 180 },
          y: { type: "spring", damping: 25, stiffness: 180 },
        }}
        className="absolute bottom-16 sm:bottom-20 -right-2 sm:-right-8 z-20"
      >
        <div className="flex items-center gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md shadow-glass border border-dentology-gold/30 hover:scale-105 hover:shadow-glass-hover transition-all">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-dentology-gold/25 text-dentology-emerald flex items-center justify-center font-bold">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400">Philosophy</span>
            <span className="text-[11px] sm:text-xs font-bold text-dentology-emerald">Tooth Saving</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
