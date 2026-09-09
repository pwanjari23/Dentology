"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
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
              ? "bg-white/95 backdrop-blur-md shadow-glass border border-dentology-gold/20 py-2 px-5 sm:px-6"
              : "bg-white/85 backdrop-blur-sm shadow-sm border border-emerald-900/10 py-2.5 px-3 sm:px-5"
            }`}
        >
          {/* Logo / Clinic Brand */}
          <button
            onClick={() => setActiveTab("home")}
            className="flex items-center gap-3 group focus:outline-none rounded-full px-1.5 py-1 text-left"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-dentology-gold/40 shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/images/logo/dentology-logo.png"
                alt="Dentology Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-dentology-emerald leading-none">
                {clinicData.name}
              </span>
              <span className="text-[9px] font-sans font-bold tracking-widest text-dentology-gold uppercase mt-0.5">
                Dentistry & Aesthetics
              </span>
            </div>
          </button>

          {/* Desktop Nav Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-emerald-950/5 p-1.5 rounded-full border border-emerald-900/10">
            {navItems.map((item) => {
              const isActive = activeTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => setActiveTab(item.tab)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${isActive
                      ? "text-dentology-emerald"
                      : "text-slate-600 hover:text-dentology-emerald"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-white shadow-sm rounded-full -z-10 border border-dentology-gold/30"
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
              className="px-5 py-2.5 rounded-full bg-dentology-emerald text-white text-xs font-bold tracking-wider uppercase hover:bg-dentology-emerald-dark hover:shadow-lg border border-dentology-gold/30 transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => openAppointmentModal("Mobile Top Bar CTA")}
              className="px-3.5 py-1.5 rounded-full bg-dentology-emerald text-white text-xs font-semibold hover:bg-dentology-emerald-dark shadow-sm border border-dentology-gold/30"
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
