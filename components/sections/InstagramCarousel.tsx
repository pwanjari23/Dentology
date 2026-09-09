"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Play, ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { socialData } from "@/data/socialData";

export default function InstagramCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="instagram" className="relative py-14 sm:py-24 lg:py-32 bg-slate-50/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <SectionHeader
            eyebrow="Social-First Storytelling"
            title="Life at Dentology • @dentology_og1"
            subtitle="Catch educational insights, behind-the-scenes clinic moments in Jaripatka, and Dr. Sanika Sharma's tooth preservation advice."
            badgeColor="blue"
          />

          {/* Follow CTA */}
          <div className="flex items-center gap-3 shrink-0 mb-4 md:mb-16">
            <a
              href={socialData.instagram.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-dentology-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-md active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow {socialData.instagram.handle}</span>
            </a>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 scroll-smooth select-none cursor-grab active:cursor-grabbing -mx-4 px-4 sm:mx-0 sm:px-0"
          data-cursor="DRAG"
        >
          {socialData.instagram.posts.map((post) => (
            <a
              key={post.id}
              href={socialData.instagram.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-[260px] sm:w-[340px] group flex flex-col rounded-2xl sm:rounded-[28px] overflow-hidden bg-white border border-slate-200/80 shadow-card hover:shadow-glass-hover hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Media Container */}
              <div className="relative aspect-square overflow-hidden bg-slate-900" data-cursor="OPEN">
                <Image
                  src={post.image}
                  alt={post.shortCaption}
                  fill
                  sizes="340px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  <span>{post.tag}</span>
                </div>

                {/* Play icon overlay for reels/video posts */}
                {post.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Instagram watermark icon on top right */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-pink-600 flex items-center justify-center shadow-sm">
                  <Instagram className="w-4 h-4" />
                </div>
              </div>

              {/* Caption & Post Details */}
              <div className="p-5 flex flex-col justify-between grow">
                <p className="font-serif text-base text-dentology-navy font-normal mb-2 line-clamp-1">
                  {post.topic}
                </p>
                <p className="text-xs text-slate-600 font-sans line-clamp-3 leading-relaxed mb-4">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] font-sans text-slate-400 font-medium">
                  <span>View on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:text-dentology-blue transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
