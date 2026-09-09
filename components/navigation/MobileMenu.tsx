"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, MessageCircle, MapPin } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { socialData } from "@/data/socialData";
import { getWhatsAppUrl, createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";
import { useNavigation, NavTab } from "@/context/NavigationContext";
import { navItems } from "./Navbar";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openAppointmentModal } = useAppointment();
  const { activeTab, setActiveTab } = useNavigation();

  const handleTabClick = (tab: NavTab) => {
    setActiveTab(tab);
    onClose();
  };

  const handleBookClick = () => {
    onClose();
    openAppointmentModal("Mobile Navigation Booking");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-dentology-navy text-white flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-slate-700/60 pb-5">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-wider text-white">
                {clinicData.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-dentology-teal font-sans">
                {clinicData.subTitle}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links list */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            className="flex flex-col gap-4 py-8"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.tab;
              return (
                <motion.button
                  key={item.tab}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  onClick={() => handleTabClick(item.tab)}
                  className={`text-left font-serif text-3xl font-light transition-colors flex items-center justify-between group py-2 ${
                    isActive ? "text-dentology-teal font-normal" : "hover:text-dentology-aqua text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-dentology-aqua group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.button>
              );
            })}
          </motion.nav>

          {/* Bottom CTAs & Verified NAP */}
          <div className="border-t border-slate-700/60 pt-6 flex flex-col gap-4">
            <button
              onClick={handleBookClick}
              className="w-full py-4 rounded-xl bg-dentology-emerald text-white font-sans font-bold text-center shadow-lg hover:bg-dentology-emerald-dark transition-all text-base"
            >
              Book an Appointment
            </button>

            <a
              href={getWhatsAppUrl(createGeneralWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl border border-slate-700 bg-slate-800/80 text-white font-sans font-semibold text-center flex items-center justify-center gap-2 text-sm hover:border-dentology-green"
            >
              <MessageCircle className="w-4 h-4 text-dentology-green" />
              WhatsApp Us (+91 95612 88530)
            </a>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2 text-center flex-wrap">
              <a
                href={socialData.facebook.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-dentology-gold transition-colors font-medium"
              >
                Facebook Profile
              </a>
              <span>•</span>
              <a
                href={socialData.instagram.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-dentology-gold transition-colors font-medium"
              >
                Instagram: {socialData.instagram.handle}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
