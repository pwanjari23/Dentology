"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view" | "drag" | "open">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    // Only enable on desktop pointer devices without reduced motion
    const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasPointer || prefersReducedMotion) {
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        if (type === "VIEW" || type === "DRAG" || type === "OPEN") {
          setCursorType(type.toLowerCase() as any);
          setCursorText(type);
          return;
        }
      }

      const interactive = target.closest("a, button, input, textarea, select, [role='button']");
      if (interactive) {
        setCursorType("hover");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isLabelCursor = cursorType === "view" || cursorType === "drag" || cursorType === "open";

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower Ring / Label Box */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-colors duration-200 ${
          isLabelCursor
            ? "bg-dentology-blue text-white font-sans text-[11px] font-bold tracking-wider px-3 shadow-lg"
            : cursorType === "hover"
            ? "border-2 border-dentology-blue bg-dentology-blue/10"
            : "border border-dentology-blue/40"
        }`}
        animate={{
          x: isLabelCursor ? mousePosition.x - 32 : mousePosition.x - (cursorType === "hover" ? 22 : 14),
          y: isLabelCursor ? mousePosition.y - 18 : mousePosition.y - (cursorType === "hover" ? 22 : 14),
          width: isLabelCursor ? 64 : cursorType === "hover" ? 44 : 28,
          height: isLabelCursor ? 36 : cursorType === "hover" ? 44 : 28,
          scale: 1,
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        {isLabelCursor && <span>{cursorText}</span>}
      </motion.div>

      {/* Inner Dot */}
      {!isLabelCursor && (
        <motion.div
          className={`fixed top-0 left-0 w-2 h-2 rounded-full ${
            cursorType === "hover" ? "bg-dentology-blue" : "bg-dentology-navy"
          }`}
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
          }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 700,
            mass: 0.1,
          }}
        />
      )}
    </div>
  );
}
