"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MoveHorizontal } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

export default function SmileStories() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="stories" className="relative py-14 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Aesthetic Excellence"
          title="Smile Stories & Restorative Precision"
          subtitle="Discover the natural balance of restorative dentistry and enamel preservation designed to reveal your most authentic smile."
          badgeColor="teal"
          centered
        />

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl border-2 sm:border-4 border-slate-100 select-none cursor-ew-resize bg-slate-900"
            data-cursor="DRAG"
          >
            {/* After Image (Full background) */}
            <Image
              src="/images/treatments/smile-aesthetics.jpg"
              alt="Healthy joyful smile restoration outcome"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-dentology-blue/90 backdrop-blur-md text-white font-sans text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              JOYFUL SMILE
            </div>

            {/* Before / Clinical Precision Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/images/treatments/enamel-care.jpg"
                alt="Enamel microstructure and dental foundation"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-dentology-navy/90 backdrop-blur-md text-white font-sans text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                ENAMEL CARE
              </div>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] z-30"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-xl flex items-center justify-center text-dentology-blue border-2 border-dentology-blue">
                <MoveHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>

          {/* Slider Caption and Instructions */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-6 text-xs text-slate-500 font-sans px-2">
            <span className="flex items-center gap-1.5 text-dentology-navy font-semibold text-center sm:text-left">
              <Sparkles className="w-4 h-4 text-dentology-teal shrink-0" />
              Drag slider to compare foundation care and joyful aesthetic results.
            </span>
            <span className="text-slate-400 mt-1 sm:mt-0 italic text-[11px] sm:text-xs text-center">
              *Conservative tooth preservation & natural aesthetics.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
