"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, ShieldCheck, Eye, MapPin } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const clinicPillars = [
  {
    icon: Eye,
    title: "Seeing Exactly What the Doctor Sees",
    description:
      "Patients love the instant high-definition 3D intraoral scans that display their teeth clearly on screen, removing the mystery of traditional dental exams.",
    tag: "Transparency",
  },
  {
    icon: ShieldCheck,
    title: "Prioritizing Tooth Preservation",
    description:
      "A compassionate focus on saving natural teeth and intercepting small concerns early, without pushing aggressive or unnecessary treatments.",
    tag: "Conservative Care",
  },
  {
    icon: Heart,
    title: "Unhurried, Friendly Atmosphere",
    description:
      "A boutique, welcoming clinic environment in Jaripatka where Dr. Sanika Sharma takes time to listen, explain, and ensure complete comfort.",
    tag: "Comfort First",
  },
];

export default function VerifiedReviews() {
  return (
    <section className="relative py-14 sm:py-24 lg:py-32 bg-slate-50/60 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Clinic Values & Feedback"
          title="What patients appreciate at Dentology."
          subtitle="Grounded in real clinic commitments: honest clinical communication, gentle chairside care, and modern digital diagnostics."
          badgeColor="teal"
          centered
        />

        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 sm:gap-8 max-w-5xl mx-auto -mx-4 px-4 md:mx-auto md:px-0 no-scrollbar pb-2">
          {clinicPillars.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="w-[84vw] max-w-[320px] shrink-0 md:w-auto md:max-w-none snap-center p-6 sm:p-8 rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/80 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold tracking-widest uppercase text-dentology-blue mb-4 sm:mb-6">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.tag}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-dentology-navy font-normal mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-sans text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-dentology-terracotta" />
                    Jaripatka, Nagpur
                  </span>
                  <span className="text-dentology-teal font-semibold">Dentology Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-4 text-[11px] text-slate-400 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-dentology-teal" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="ml-1 text-[10px] uppercase font-bold tracking-wider text-slate-400">Swipe values</span>
        </div>
      </div>
    </section>
  );
}
