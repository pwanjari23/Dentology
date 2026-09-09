"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "white" | "whatsapp";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const noReducedMotion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsDesktop(finePointer && noReducedMotion);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDesktop || !ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Subtle magnetic attraction limited to 6px
    setPosition({ x: middleX * 0.18, y: middleY * 0.18 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-dentology-emerald text-white shadow-md hover:shadow-lg hover:bg-dentology-emerald-dark border border-dentology-gold/30 px-6 py-3.5 text-sm md:text-base",
    secondary:
      "bg-dentology-emerald-dark text-white hover:bg-emerald-950 border border-dentology-gold/20 px-6 py-3.5 text-sm md:text-base shadow-md",
    outline:
      "border-2 border-dentology-emerald text-dentology-emerald hover:bg-dentology-emerald hover:text-white px-6 py-3.5 text-sm md:text-base font-bold",
    white:
      "bg-white text-dentology-emerald hover:bg-emerald-50 px-6 py-3.5 text-sm md:text-base shadow-md border border-dentology-gold/30 font-bold",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20ba59] shadow-md px-6 py-3.5 text-sm md:text-base",
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.2 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
