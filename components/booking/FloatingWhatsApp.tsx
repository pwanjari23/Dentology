"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";
import { getWhatsAppUrl, createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

export default function FloatingWhatsApp() {
  const { openAppointmentModal } = useAppointment();

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom-Right) */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-40">
        <motion.a
          href={getWhatsAppUrl(createGeneralWhatsAppMessage())}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] transition-all group font-sans border-2 border-white/50"
          aria-label="Chat on WhatsApp with Dentology"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-white text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
          </div>
          <span className="text-xs font-bold tracking-wide uppercase">
            Chat with Dentology
          </span>
        </motion.a>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center gap-3">
        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl(createGeneralWhatsAppMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-full bg-[#25D366] text-white font-sans font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-[#20ba59] active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment Button */}
        <button
          onClick={() => openAppointmentModal("Mobile Sticky Bottom Bar")}
          className="flex-1 py-3 px-4 rounded-full bg-dentology-emerald text-white font-sans font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-dentology-emerald-dark active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Visit</span>
        </button>
      </div>
    </>
  );
}
