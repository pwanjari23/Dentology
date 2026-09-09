"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, MapPin, ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { clinicData } from "@/data/clinicData";
import { doctorData } from "@/data/doctorData";

export interface GoogleReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
  verified: boolean;
}

export const googleReviewsData: GoogleReviewItem[] = [
  {
    id: "review-1",
    author: "Rohan Wankhede",
    rating: 5,
    date: "1 month ago",
    comment:
      "Dr. Sanika Sharma is exceptionally knowledgeable and gentle. She showed me my 3D intraoral scan on screen and explained everything clearly before starting treatment. Easily the best dental clinic in Jaripatka!",
    treatment: "3D Digital Scan & Consultation",
    verified: true,
  },
  {
    id: "review-2",
    author: "Priya Deshmukh",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Very clean studio with state-of-the-art digital equipment. Dr. Sanika saved my natural tooth with conservative treatment without any pain. Truly compassionate care!",
    treatment: "Tooth Preservation & Restorative Care",
    verified: true,
  },
  {
    id: "review-3",
    author: "Amit Patel",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "No unnecessary suggestions, completely transparent clinical advice. The staff is polite, and Dr. Sanika takes time to explain every step. High tech and very comfortable.",
    treatment: "General Dental Checkup",
    verified: true,
  },
  {
    id: "review-4",
    author: "Sneha Agrawal",
    rating: 5,
    date: "1 month ago",
    comment:
      "I had terrible anxiety about dental visits, but Dentology made me feel completely relaxed. High quality 3D intraoral scanning and painless care at Kamal Phool Chowk.",
    treatment: "Smile Aesthetics & Enamel Care",
    verified: true,
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="relative py-14 sm:py-24 lg:py-32 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-dentology-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/5 border border-dentology-gold/30 text-dentology-emerald text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Verified Patient Experiences</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-dentology-emerald mb-4 leading-tight">
            Loved by Patients Across <br />
            <span className="italic font-light text-dentology-gold">Jaripatka & Nagpur.</span>
          </h2>

          {/* Google Badge Rating Card */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-3 px-5 rounded-2xl bg-white shadow-card border border-slate-200/80 mt-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-dentology-emerald font-sans">
              5.0 ★ Google Rating
            </span>
            <span className="text-xs text-slate-400 font-sans border-l border-slate-200 pl-3">
              100% Verified Reviews
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {googleReviewsData.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Rating & Google G Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Google Review
                  </span>
                </div>

                {/* Quote Icon */}
                <Quote className="w-5 h-5 text-dentology-gold/40 mb-2" />

                {/* Review Content */}
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed italic mb-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-bold text-dentology-emerald">
                    {review.author}
                  </span>
                  <span className="text-[10px] font-sans text-slate-400">
                    {review.treatment}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer Row */}
        <div className="mt-10 sm:mt-14 text-center">
          <a
            href={clinicData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-dentology-gold/40 text-dentology-emerald font-sans text-xs font-bold hover:bg-dentology-emerald hover:text-white transition-all shadow-sm"
          >
            <span>Read All Google Reviews on Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-dentology-gold" />
          </a>
        </div>

      </div>
    </section>
  );
}
