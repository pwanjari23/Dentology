"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { clinicData } from "@/data/clinicData";
import { getWhatsAppUrl, createAppointmentWhatsAppMessage, AppointmentFormState } from "@/lib/whatsapp";

export default function AppointmentModal() {
  const { isOpen, initialReason, closeAppointmentModal } = useAppointment();

  const [formData, setFormData] = useState<AppointmentFormState>({
    name: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    reason: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen && initialReason) {
      setFormData((prev) => ({ ...prev, reason: initialReason }));
    }
  }, [isOpen, initialReason]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeAppointmentModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeAppointmentModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please provide your name and phone number.");
      return;
    }

    setError("");
    const message = createAppointmentWhatsAppMessage(formData);
    const whatsappUrl = getWhatsAppUrl(message);

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    closeAppointmentModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAppointmentModal}
            className="fixed inset-0 bg-emerald-950/70 backdrop-blur-sm"
          />

          {/* Drawer / Bottom-Sheet Container */}
          <motion.div
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative w-full sm:max-w-lg bg-white h-full max-h-[92vh] sm:max-h-screen overflow-y-auto shadow-2xl p-6 sm:p-8 flex flex-col justify-between z-10 rounded-t-[32px] sm:rounded-l-[32px] sm:rounded-t-none"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald-900/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-dentology-gold/40 shadow-sm shrink-0">
                    <Image
                      src="/images/logo/dentology-logo.png"
                      alt="Dentology Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-dentology-gold">
                      Dentology • Jaripatka
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-dentology-emerald">
                      Request Appointment
                    </h3>
                  </div>
                </div>
                <button
                  onClick={closeAppointmentModal}
                  aria-label="Close appointment drawer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-sans">
                    {error}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-dentology-navy uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-dentology-blue focus:ring-2 focus:ring-dentology-blue/20 text-sm font-sans transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-dentology-navy uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-dentology-blue focus:ring-2 focus:ring-dentology-blue/20 text-sm font-sans transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Preferred Date & Time row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-dentology-navy uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-dentology-blue focus:ring-2 focus:ring-dentology-blue/20 text-sm font-sans transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dentology-navy uppercase tracking-wider mb-1.5">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-dentology-blue focus:ring-2 focus:ring-dentology-blue/20 text-sm font-sans transition-all outline-none text-slate-700"
                      >
                        <option value="">Select a slot</option>
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10 AM - 1 PM)</option>
                        <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1 PM - 5 PM)</option>
                        <option value="Evening (5:00 PM - 8:00 PM)">Evening (5 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Reason for Visit */}
                <div>
                  <label className="block text-xs font-bold text-dentology-navy uppercase tracking-wider mb-1.5">
                    Reason for Visit / Concern
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <textarea
                      rows={3}
                      placeholder="e.g. 3D scan consultation, routine check-up, tooth sensitivity..."
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-dentology-blue focus:ring-2 focus:ring-dentology-blue/20 text-sm font-sans transition-all outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-dentology-emerald text-white font-sans font-bold text-center shadow-lg hover:bg-dentology-emerald-dark transition-all flex items-center justify-center gap-2 mt-4 active:scale-[0.98]"
                >
                  <span>Continue on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Micro Privacy & Location Assurance */}
            <div className="pt-6 border-t border-slate-100 mt-6 text-[11px] text-slate-500 font-sans flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-dentology-green shrink-0" />
              <span>
                Your request is sent directly to Dr. Sanika Sharma&apos;s verified clinic line (+91 95612 88530).
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
