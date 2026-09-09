"use client";

import { ShieldCheck, Award, MapPin, UserCheck, Sparkles } from "lucide-react";

const trustItems = [
  { text: "Verified Medical Registration", icon: UserCheck, color: "text-dentology-emerald" },
  { text: "9 Years Experience Overall", icon: Sparkles, color: "text-dentology-gold" },
  { text: "BDS Qualified Dentist", icon: Award, color: "text-dentology-emerald" },
  { text: "Dentology House of Dentistry & Aesthetics", icon: ShieldCheck, color: "text-dentology-emerald" },
  { text: "Jaripatka, Nagpur", icon: MapPin, color: "text-amber-700" },
];

export default function TrustRibbon() {
  return (
    <section className="relative py-4 sm:py-5 bg-[#F9FAF8] border-y border-slate-200/80 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-around gap-x-6 gap-y-3 text-xs sm:text-sm font-semibold font-sans text-slate-700">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs"
              >
                <Icon className={`w-4 h-4 ${item.color} shrink-0`} />
                <span className="whitespace-nowrap tracking-wide">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
