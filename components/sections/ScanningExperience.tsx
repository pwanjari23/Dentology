"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Scan, Eye, CheckCircle2, Zap, Shield, ArrowRight } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { useAppointment } from "@/context/AppointmentContext";

export default function ScanningExperience() {
  const { openAppointmentModal } = useAppointment();
  const [interactiveMode, setInteractiveMode] = useState<"standard" | "mesh" | "crossSection">("mesh");

  return (
    <section id="scanning" className="relative py-14 sm:py-24 lg:py-32 bg-dentology-blue text-white overflow-hidden">
      {/* Decorative ambient background rings */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dentology-teal/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-dentology-navy/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Clinical Rationale & Descriptors */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 text-dentology-green">
              <Scan className="w-3.5 h-3.5" />
              Signature Digital Care
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4 sm:mb-6">
              See what the <br />
              <span className="italic font-light text-dentology-teal">mirror can&apos;t.</span>
            </h2>

            <p className="text-blue-100 font-sans text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              Our intraoral scans capture high-resolution, detailed views of your teeth and gums
              helping us detect problems early, plan treatments accurately, and explain your oral
              health clearly.
            </p>

            {/* Verified Three Descriptors */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full mb-6 sm:mb-8">
              <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-dentology-green mx-auto mb-1.5 sm:mb-2" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider block">Fast</span>
                <span className="text-[10px] sm:text-[11px] text-blue-200">No wait</span>
              </div>
              <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-dentology-teal mx-auto mb-1.5 sm:mb-2" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider block">Precise</span>
                <span className="text-[10px] sm:text-[11px] text-blue-200">Micron scale</span>
              </div>
              <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 mx-auto mb-1.5 sm:mb-2" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider block">Comfort</span>
                <span className="text-[10px] sm:text-[11px] text-blue-200">Zero gag</span>
              </div>
            </div>

            {/* Feature Checklist */}
            <ul className="space-y-3 mb-8 text-sm text-blue-100">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-dentology-green shrink-0" />
                <span>Instant 3D digital visualization on an in-operatory display</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-dentology-green shrink-0" />
                <span>Zero messy impression trays or unpleasant molding putty</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-dentology-green shrink-0" />
                <span>Enables early detection and conservative tooth-saving plans</span>
              </li>
            </ul>

            <MagneticButton
              variant="white"
              onClick={() => openAppointmentModal("3D Intraoral Scan Consultation")}
              className="shadow-xl font-bold"
            >
              <span className="text-dentology-navy">Experience a 3D Scan</span>
              <ArrowRight className="w-4 h-4 ml-2 text-dentology-blue" />
            </MagneticButton>
          </div>

          {/* Right Column: Interactive Digital Scan Viewer */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[36px] overflow-hidden bg-dentology-navy/90 border-4 border-white/20 shadow-2xl p-6 sm:p-8">
              {/* Top Viewport Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-dentology-green animate-ping" />
                  <span className="font-mono text-slate-300 tracking-wider">INTRAORAL_HD_FEED</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full text-[11px] font-mono text-dentology-teal">
                  <span>RES: 4K HIGH DENSITY</span>
                </div>
              </div>

              {/* Central Screen Image Visual */}
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/10 group mb-6"
                data-cursor="VIEW"
              >
                <Image
                  src="/images/treatments/intraoral-scan.jpg"
                  alt="High resolution 3D intraoral dental scan display"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Digital Scan Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#69a0ac_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

                {/* Animated scanning bar */}
                <motion.div
                  animate={{ y: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-dentology-teal to-transparent shadow-[0_0_12px_#6ab2a9] pointer-events-none"
                />

                {/* Scan Overlay Markers */}
                <div className="absolute bottom-3 left-3 bg-dentology-navy/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-[11px] font-mono text-white">
                  <span>REAL-TIME COLOR TOPOLOGY</span>
                </div>
              </div>

              {/* Explanatory Caption */}
              <p className="text-xs text-blue-200/90 font-sans leading-relaxed text-center">
                &ldquo;Because when you understand your mouth better, you care for it with
                confidence.&rdquo; — Dr. Sanika Sharma
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
