"use client";

import { motion } from "framer-motion";
import { Sparkles, Scan, ShieldCheck, Heart, MapPin } from "lucide-react";

const highlights = [
  { text: "3D Intraoral Scanning", icon: Scan, color: "text-dentology-blue" },
  { text: "Natural Tooth Preservation", icon: ShieldCheck, color: "text-dentology-green" },
  { text: "Joyful Smile Aesthetics", icon: Sparkles, color: "text-dentology-teal" },
  { text: "Conservative Clinical Care", icon: Heart, color: "text-rose-400" },
  { text: "Led by Dr. Sanika Sharma", icon: Sparkles, color: "text-dentology-blue" },
  { text: "Jaripatka, Nagpur", icon: MapPin, color: "text-dentology-terracotta" },
  { text: "Gentle Enamel Protection", icon: ShieldCheck, color: "text-dentology-green" },
];

export default function TrustRibbon() {
  return (
    <section className="relative py-6 bg-slate-100/80 border-y border-slate-200/80 overflow-hidden select-none">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-8">
        {[...highlights, ...highlights, ...highlights].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-sm border border-slate-200/60 transition-transform hover:scale-105"
            >
              <Icon className={`w-4 h-4 ${item.color}`} />
              <span className="text-xs sm:text-sm font-sans font-bold text-dentology-navy tracking-wide whitespace-nowrap">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
