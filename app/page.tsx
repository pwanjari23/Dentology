"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "@/context/NavigationContext";

// Home Page Exclusive Sections (per user instruction)
import Hero from "@/components/hero/Hero";
import TrustRibbon from "@/components/sections/TrustRibbon";
import DoctorShortSpotlight from "@/components/sections/DoctorShortSpotlight";
import PatientIntent from "@/components/sections/PatientIntent";
import SmileStories from "@/components/sections/SmileStories";
import InstagramCarousel from "@/components/sections/InstagramCarousel";
import VideoExperience from "@/components/sections/VideoExperience";
import PatientJourney from "@/components/sections/PatientJourney";
import VerifiedReviews from "@/components/sections/VerifiedReviews";
import GoogleReviewsSection from "@/components/sections/GoogleReviewsSection";
import GoogleMapsSection from "@/components/sections/GoogleMapsSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";

// Dedicated Tab Views (only shown when that tab is clicked)
import DoctorSection from "@/components/sections/DoctorSection";
import ClinicStory from "@/components/sections/ClinicStory";
import ScanningExperience from "@/components/sections/ScanningExperience";
import TreatmentExplorer from "@/components/sections/TreatmentExplorer";

export default function HomePage() {
  const { activeTab } = useNavigation();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {/* ================= 1. HOME VIEW ================= */}
        {activeTab === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col w-full"
          >
            {/* 01. Signature Interactive Hero with 3D Tooth & Climbing Specialists */}
            <Hero />

            {/* 02. Trust Ribbon */}
            <TrustRibbon />

            {/* 03. Flagship Short Doctor Spotlight */}
            <DoctorShortSpotlight />

            {/* 04. Patient Intent Hub ("What brings you here today?") */}
            <PatientIntent />

            {/* 04. Smile Stories & Foundation Comparison */}
            <SmileStories />

            {/* 05. Life at Dentology (Instagram Carousel) */}
            <InstagramCarousel />

            {/* 06. Cinematic Video Experience */}
            <VideoExperience />

            {/* 07. Patient Journey (01 Book, 02 Meet, 03 Plan) */}
            <PatientJourney />

            {/* 08. Verified Google Patient Reviews */}
            <GoogleReviewsSection />

            {/* 09. Google Maps & Studio Location */}
            <GoogleMapsSection />

            {/* 10. Frequently Asked Questions */}
            <FAQAccordion />

            {/* 11. Final CTA with Drawing Smile Line */}
            <FinalCTA />
          </motion.div>
        )}

        {/* ================= 2. DOCTOR TAB VIEW ================= */}
        {activeTab === "doctor" && (
          <motion.div
            key="doctor"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="pt-24 pb-16 min-h-screen bg-white"
          >
            <DoctorSection />
          </motion.div>
        )}

        {/* ================= 3. CLINIC TAB VIEW ================= */}
        {activeTab === "clinic" && (
          <motion.div
            key="clinic"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="pt-24 pb-16 min-h-screen bg-slate-50/60"
          >
            <ClinicStory />
          </motion.div>
        )}

        {/* ================= 4. 3D SCANNING TAB VIEW ================= */}
        {activeTab === "scanning" && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="pt-24 min-h-screen bg-dentology-blue"
          >
            <ScanningExperience />
          </motion.div>
        )}

        {/* ================= 5. TREATMENTS TAB VIEW ================= */}
        {activeTab === "treatments" && (
          <motion.div
            key="treatments"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="pt-24 pb-16 min-h-screen bg-white"
          >
            <TreatmentExplorer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
