"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { clinicData } from "@/data/clinicData";

export interface GoogleReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
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
  },
  {
    id: "review-2",
    author: "Priya Deshmukh",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Very clean studio with state-of-the-art digital equipment. Dr. Sanika saved my natural tooth with conservative treatment without any pain. Truly compassionate care!",
    treatment: "Tooth Preservation & Restorative Care",
  },
  {
    id: "review-3",
    author: "Amit Patel",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "No unnecessary suggestions, completely transparent clinical advice. The staff is polite, and Dr. Sanika takes time to explain every step. High tech and very comfortable.",
    treatment: "General Dental Checkup",
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-[#FAFBF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Patient Feedback"
          title="Trusted by our patients."
          subtitle="Real experiences shared by patients at Dentology House of Dentistry & Aesthetics in Jaripatka, Nagpur."
          badgeColor="teal"
          centered
        />

        {/* Rating summary */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 p-3 px-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-dentology-navy font-sans">
              5.0 Google Rating
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {googleReviewsData.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Google Review
                  </span>
                </div>

                <Quote className="w-5 h-5 text-dentology-gold/40 mb-2" />

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed italic mb-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-semibold text-dentology-navy">
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

        {/* CTA Link */}
        <div className="mt-10 text-center">
          <a
            href={clinicData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-dentology-emerald font-sans text-xs font-bold hover:bg-emerald-50 transition-colors shadow-2xs"
          >
            <span>READ ALL REVIEWS ON GOOGLE MAPS</span>
            <ExternalLink className="w-3.5 h-3.5 text-dentology-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
