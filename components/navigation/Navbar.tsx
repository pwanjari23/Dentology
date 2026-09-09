"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { clinicData } from "@/data/clinicData";
import { useAppointment } from "@/context/AppointmentContext";
import { useNavigation, NavTab } from "@/context/NavigationContext";

export const navItems: { name: string; tab: NavTab }[] = [
  { name: "Home", tab: "home" },
  { name: "Doctor", tab: "doctor" },
  { name: "Clinic", tab: "clinic" },
  { name: "3D Scanning", tab: "scanning" },
  { name: "Treatments", tab: "treatments" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { openAppointmentModal } = useAppointment();
  const { activeTab, setActiveTab } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`max-w-7xl mx-auto flex items-center justify-between pointer-events-auto rounded-full transition-all duration-500 ${isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-glass border border-slate-200/80 py-2.5 px-5 sm:px-6"
              : "bg-white/80 backdrop-blur-sm shadow-sm border border-slate-200/60 py-3 px-3 sm:px-5"
            }`}
        >
          {/* Logo / Clinic Brand */}
          <button
            onClick={() => setActiveTab("home")}
            className="flex items-center gap-2.5 group focus:outline-none rounded-full px-2 py-1 text-left"
          >
            <div className="w-8 h-8 rounded-full bg-dentology-blue flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-dentology-navy leading-none">
              {clinicData.name}
            </span>
          </button>

          {/* Desktop Nav Tabs (Stories, Instagram, Location removed as requested) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
            {navItems.map((item) => {
              const isActive = activeTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => setActiveTab(item.tab)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${isActive
                      ? "text-dentology-blue"
                      : "text-slate-600 hover:text-dentology-navy"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openAppointmentModal("Navbar CTA")}
              className="px-5 py-2.5 rounded-full bg-dentology-blue text-white text-xs font-bold tracking-wider uppercase hover:bg-blue-600 hover:shadow-glow transition-all active:scale-95"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => openAppointmentModal("Mobile Top Bar CTA")}
              className="px-3.5 py-1.5 rounded-full bg-dentology-blue text-white text-xs font-semibold hover:bg-blue-600 shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
              className="p-2 rounded-full bg-white/90 border border-slate-200 shadow-sm text-dentology-navy hover:text-dentology-blue transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
