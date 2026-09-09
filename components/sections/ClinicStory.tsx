"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Shield, Heart } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { clinicData } from "@/data/clinicData";

export default function ClinicStory() {
  return (
    <section id="clinic" className="relative py-14 sm:py-24 lg:py-32 bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-6">
          <SectionHeader
            eyebrow="Inside the Studio"
            title="A calm, modern haven right in Jaripatka."
            subtitle="Designed to replace dental anxiety with natural warmth, gentle care, and high-definition digital precision."
            badgeColor="teal"
          />

          <div className="flex items-center gap-3 text-xs font-sans text-slate-500 bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm shrink-0 lg:mb-16">
            <div className="w-8 h-8 rounded-full bg-dentology-terracotta/15 text-dentology-terracotta flex items-center justify-center font-bold">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-dentology-navy">Kamal Phool Chowk, Jaripatka</p>
              <p className="text-[11px] text-slate-400">1st Floor, Pandav Enclave, Nagpur</p>
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Main Dominant Image (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative min-h-[260px] sm:min-h-[460px] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-card border-2 sm:border-4 border-white group"
            data-cursor="VIEW"
          >
            <Image
              src="/images/clinic/clinic-interior.jpg"
              alt="Dentology Clinic Interior in Jaripatka Nagpur"
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dentology-navy/80 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white flex items-end justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-dentology-blue text-[10px] uppercase font-bold tracking-wider">
                  The Studio Environment
                </span>
                <h3 className="font-serif text-lg sm:text-2xl font-light mt-1.5 sm:mt-2">Boutique Comfort & Modern Care</h3>
                <p className="text-xs text-slate-300 font-sans mt-1 max-w-md line-clamp-2 sm:line-clamp-none">
                  Pristine ergonomic clinical setting designed for peaceful, stress-free consultations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Secondary Stack (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6 justify-between">
            {/* Top Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative h-[160px] sm:h-[220px] rounded-2xl sm:rounded-[28px] overflow-hidden shadow-card border-2 sm:border-4 border-white group"
              data-cursor="VIEW"
            >
              <Image
                src="/images/treatments/intraoral-scan.jpg"
                alt="3D intraoral digital equipment"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dentology-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest text-dentology-teal">
                  Digital Accuracy
                </p>
                <p className="text-xs sm:text-sm font-semibold font-serif">High-Resolution Intraoral Scanning</p>
              </div>
            </motion.div>

            {/* Floating Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="p-4 sm:p-6 rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/80 shadow-card flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-dentology-green/20 text-dentology-navy flex items-center justify-center">
                  <Shield className="w-5 h-5 text-dentology-navy" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-dentology-navy font-normal">
                    Strict Hygiene & Comfort
                  </h4>
                  <p className="text-xs text-slate-500 font-sans">Every protocol verified and sanitized</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                From our comfortable ergonomic chair to digital intraoral diagnostics, every detail
                is built around transparent explanations and non-invasive patient comfort.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
