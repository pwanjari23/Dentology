"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Shield, Heart } from "lucide-react";

export default function AnimatedDentalCrew() {
  const [activeWorker, setActiveWorker] = useState<string | null>(null);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {/* 1. LADDER CLIMBER SPECIALIST (Lower Left Scaffolding) */}
      <motion.div
        className="absolute left-[8%] bottom-[26%] w-11 h-18 pointer-events-auto cursor-pointer"
        onClick={() => setActiveWorker(activeWorker === "climber" ? null : "climber")}
        onMouseEnter={() => setActiveWorker("climber")}
        onMouseLeave={() => setActiveWorker(null)}
        animate={{
          y: [40, 20, 0, -20, -40, -20, 0, 20, 40],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 40 60" className="w-full h-full drop-shadow-lg">
          {/* Cyan Cap */}
          <ellipse cx="20" cy="11" rx="6.5" ry="4.5" fill="#0284C7" />
          {/* Head */}
          <circle cx="20" cy="13" r="4.5" fill="#FBBF24" />
          {/* Blue Scrubs */}
          <path d="M 14 17 L 26 17 L 24 34 L 16 34 Z" fill="#1D4ED8" />
          <rect x="15" y="27" width="10" height="2" fill="#E0E7FF" />

          {/* Left Arm Climbing */}
          <motion.path
            d="M 15 19 Q 8 16 7 10"
            stroke="#1D4ED8"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            animate={{ d: ["M 15 19 Q 8 16 7 10", "M 15 19 Q 9 24 10 26", "M 15 19 Q 8 16 7 10"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="7" cy="10" r="2.2" fill="#FFFFFF" />

          {/* Right Arm Climbing */}
          <motion.path
            d="M 25 19 Q 32 23 31 27"
            stroke="#1D4ED8"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            animate={{ d: ["M 25 19 Q 32 23 31 27", "M 25 19 Q 33 16 32 11", "M 25 19 Q 32 23 31 27"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="31" cy="27" r="2.2" fill="#FFFFFF" />

          {/* Left Leg Step */}
          <motion.path
            d="M 17 33 L 13 44 L 9 46"
            stroke="#1E40AF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            animate={{ d: ["M 17 33 L 13 44 L 9 46", "M 17 33 L 15 48 L 12 51", "M 17 33 L 13 44 L 9 46"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <ellipse cx="9" cy="46" rx="2.5" ry="1.8" fill="#1E293B" />

          {/* Right Leg Step */}
          <motion.path
            d="M 23 33 L 26 47 L 30 50"
            stroke="#1E40AF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            animate={{ d: ["M 23 33 L 26 47 L 30 50", "M 23 33 L 24 43 L 28 45", "M 23 33 L 26 47 L 30 50"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <ellipse cx="30" cy="50" rx="2.5" ry="1.8" fill="#1E293B" />
        </svg>

        {/* Climber Tooltip */}
        <AnimatePresence>
          {activeWorker === "climber" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-12 -left-8 bg-dentology-navy text-white text-[10px] font-sans font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap z-50 pointer-events-none border border-white/20"
            >
              🪜 Climbing to tooth summit!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 2. RAPPELLING CLIMBER ON THE RIGHT TOOTH CUSP */}
      <motion.div
        className="absolute right-[14%] top-[38%] w-10 h-20 pointer-events-auto cursor-pointer"
        onClick={() => setActiveWorker(activeWorker === "rappeller" ? null : "rappeller")}
        onMouseEnter={() => setActiveWorker("rappeller")}
        onMouseLeave={() => setActiveWorker(null)}
        animate={{
          y: [-12, 14, -12],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Safety rope tether hanging down */}
        <svg viewBox="0 0 36 70" className="w-full h-full drop-shadow-md">
          {/* Vertical safety tether rope */}
          <line x1="18" y1="0" x2="18" y2="22" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 2" />
          {/* Cyan Cap */}
          <ellipse cx="18" cy="24" rx="5.5" ry="4" fill="#0284C7" />
          {/* Head */}
          <circle cx="18" cy="26" r="4" fill="#FBBF24" />
          {/* Harness / Torso in Blue Scrubs */}
          <path d="M 13 29 L 23 29 L 21 44 L 15 44 Z" fill="#2563EB" />
          {/* Safety Harness Straps */}
          <line x1="13" y1="29" x2="21" y2="44" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="23" y1="29" x2="15" y2="44" stroke="#F59E0B" strokeWidth="1.5" />

          {/* Left Arm holding rope */}
          <path d="M 14 31 L 18 20" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="18" cy="20" r="2" fill="#FFFFFF" />

          {/* Right Arm holding rope lower */}
          <path d="M 22 32 L 18 24" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="18" cy="24" r="2" fill="#FFFFFF" />

          {/* Rappel Legs braced against tooth slope */}
          <path d="M 15 43 L 10 52 L 7 53" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="7" cy="53" rx="2.5" ry="1.5" fill="#0F172A" />

          <path d="M 21 43 L 19 54 L 16 56" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="16" cy="56" rx="2.5" ry="1.5" fill="#0F172A" />
        </svg>

        {/* Rappeller Tooltip */}
        <AnimatePresence>
          {activeWorker === "rappeller" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-10 -left-16 bg-dentology-navy text-white text-[10px] font-sans font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap z-50 pointer-events-none border border-white/20"
            >
              🧗 Rappelling down the cusp!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 3. ROTATING BUFFING DISC ON THE SIDE WORKER */}
      <div
        className="absolute left-[29%] top-[40%] w-10 h-10 pointer-events-auto cursor-pointer flex items-center justify-center"
        onClick={() => setActiveWorker(activeWorker === "buffer" ? null : "buffer")}
        onMouseEnter={() => setActiveWorker("buffer")}
        onMouseLeave={() => setActiveWorker(null)}
      >
        {/* Spinning polisher head */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          className="w-7 h-7 rounded-full border-2 border-dashed border-amber-300 bg-amber-200/40 backdrop-blur-sm shadow-[0_0_10px_#fcd34d]"
        />

        {/* Sparkle glints emitting from polishing contact */}
        <motion.div
          animate={{
            scale: [0.5, 1.4, 0.5],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute text-yellow-200 pointer-events-none"
        >
          <Sparkles className="w-5 h-5 fill-yellow-200" />
        </motion.div>

        {/* Buffer Tooltip */}
        <AnimatePresence>
          {activeWorker === "buffer" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-10 -left-12 bg-dentology-navy text-white text-[10px] font-sans font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap z-50 pointer-events-none border border-white/20"
            >
              ✨ Buffing enamel to 100% gloss!
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. CENTER DRILL / JACKHAMMER MICRO-VIBRATION PULSE */}
      <div
        className="absolute left-[51%] top-[27%] w-12 h-12 pointer-events-auto cursor-pointer flex items-center justify-center"
        onClick={() => setActiveWorker(activeWorker === "drill" ? null : "drill")}
        onMouseEnter={() => setActiveWorker("drill")}
        onMouseLeave={() => setActiveWorker(null)}
      >
        {/* Concentric high-frequency ultrasonic waves */}
        <motion.div
          animate={{
            scale: [1, 2.3],
            opacity: [0.9, 0],
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeOut" }}
          className="w-5 h-5 rounded-full border border-sky-300 bg-sky-200/40 shadow-[0_0_12px_#38bdf8]"
        />
        <motion.div
          animate={{
            scale: [1, 3],
            opacity: [0.7, 0],
          }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
          className="absolute w-5 h-5 rounded-full border border-white/70"
        />

        {/* Drill Tooltip */}
        <AnimatePresence>
          {activeWorker === "drill" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-12 -left-16 bg-dentology-navy text-white text-[10px] font-sans font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap z-50 pointer-events-none border border-white/20"
            >
              💧 High-precision micro-polishing!
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 5. ENAMEL GLOSS LIGHT STREAK / REFLECTION SWEEP */}
      <motion.div
        className="absolute top-[30%] left-[28%] w-[50%] h-[45%] rounded-full overflow-hidden pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.25) 0%, transparent 70%)",
        }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
          animate={{
            x: ["-150%", "200%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* 6. SWAYING PNEUMATIC HOSE */}
      <svg
        className="absolute top-[28%] right-[4%] w-16 h-72 pointer-events-none opacity-85"
        viewBox="0 0 60 260"
      >
        <motion.path
          d="M 10 0 Q 30 120 18 240"
          stroke="#1E293B"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M 10 0 Q 36 120 18 240",
              "M 10 0 Q 22 120 22 240",
              "M 10 0 Q 36 120 18 240",
            ],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
