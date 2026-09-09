"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  badgeColor?: "blue" | "green" | "aqua" | "teal" | "terracotta" | "emerald";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  dark = false,
  badgeColor = "blue",
}: SectionHeaderProps) {
  const badgeStyles = {
    blue: "bg-dentology-blue/10 text-dentology-blue border-dentology-blue/20",
    green: "bg-dentology-green/15 text-dentology-navy border-dentology-green/30",
    aqua: "bg-dentology-aqua/15 text-dentology-navy border-dentology-aqua/30",
    teal: "bg-dentology-teal/15 text-dentology-navy border-dentology-teal/30",
    terracotta: "bg-dentology-terracotta/15 text-dentology-terracotta border-dentology-terracotta/30",
    emerald: "bg-dentology-emerald/10 text-dentology-emerald border-dentology-emerald/20",
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`max-w-3xl mb-10 sm:mb-14 lg:mb-16 ${centered ? "mx-auto text-center" : ""}`}
    >
      {/* Eyebrow */}
      <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4 border ${badgeStyles[badgeColor]}`}>
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-current animate-pulse" />
        {eyebrow}
      </div>

      {/* Headline */}
      <h2
        className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] sm:leading-[1.15] tracking-tight ${
          dark ? "text-white" : "text-dentology-navy"
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-2.5 sm:mt-4 text-xs sm:text-base lg:text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600"
          } font-sans`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
