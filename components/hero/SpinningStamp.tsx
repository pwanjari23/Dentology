"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

interface SpinningStampProps {
  className?: string;
  text?: string;
}

export default function SpinningStamp({
  className = "",
  text = "BOOK YOUR CONSULTATION • DENTOLOGY • ",
}: SpinningStampProps) {
  const { openAppointmentModal } = useAppointment();

  return (
    <div
      onClick={() => openAppointmentModal("Spinning Consultation Stamp")}
      className={`relative w-24 h-24 sm:w-36 sm:h-36 rounded-full cursor-pointer select-none group z-30 ${className}`}
      data-cursor="OPEN"
    >
      {/* Background glowing circle */}
      <div className="absolute inset-0 rounded-full bg-[#E5F364] shadow-xl group-hover:scale-105 group-active:scale-95 transition-transform duration-300" />

      {/* Rotating Circular Text SVG */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
      >
        <svg viewBox="0 0 140 140" className="w-full h-full">
          <defs>
            <path
              id="stampPath"
              d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
            />
          </defs>
          <text
            fontSize="10"
            fontWeight="bold"
            letterSpacing="2.2"
            fill="#273146"
            className="font-sans uppercase"
          >
            <textPath href="#stampPath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center Arrow Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-dentology-navy text-white flex items-center justify-center group-hover:bg-dentology-blue group-hover:rotate-45 transition-all duration-300 shadow-md">
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5F364] group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
}
