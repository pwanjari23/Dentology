"use client";

import { MapPin, Navigation, MessageCircle, Phone, Calendar } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { clinicData } from "@/data/clinicData";
import { locationData } from "@/data/locationData";
import { getWhatsAppUrl, createLocationWhatsAppMessage } from "@/lib/whatsapp";
import { useAppointment } from "@/context/AppointmentContext";

export default function GoogleMapsSection() {
  const { openAppointmentModal } = useAppointment();

  return (
    <section id="location" className="relative py-16 sm:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Location & Access"
          title="Visit Dentology"
          subtitle="Located at Kamal Phool Chowk, opposite Kewalramani Hospital in Jaripatka, Nagpur."
          badgeColor="teal"
          centered
        />

        {/* Split Layout: Information Left, Map Right on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto mt-8 sm:mt-10">
          {/* Left Column: Location Info */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#FAFBF9] border border-slate-200/90 shadow-sm">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-dentology-emerald text-[11px] font-bold uppercase tracking-wider mb-4 font-sans border border-emerald-200/60">
                <MapPin className="w-3.5 h-3.5" />
                <span>Jaripatka Clinic</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-dentology-navy font-normal mb-1">
                {clinicData.name}
              </h3>
              <p className="text-xs font-sans text-dentology-gold font-bold uppercase tracking-wide mb-6">
                {clinicData.subTitle}
              </p>

              {/* Address List */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-sans mb-8">
                <p className="font-semibold text-slate-900">{clinicData.address.line1}</p>
                <p>{clinicData.address.line2}</p>
                <p>
                  {clinicData.address.area}, {clinicData.address.city} - {clinicData.address.pincode}
                </p>
                <div className="pt-2 text-xs text-slate-500 italic flex items-start gap-1.5 border-t border-slate-200/60">
                  <span className="font-bold text-dentology-navy not-italic">Landmark:</span>
                  <span>{clinicData.address.landmark}</span>
                </div>
              </div>

              {/* Phone & Timings */}
              <div className="space-y-2.5 pt-4 border-t border-slate-200/60 text-xs sm:text-sm font-sans mb-8">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-dentology-emerald" /> Contact / WhatsApp:
                  </span>
                  <a
                    href={`tel:${clinicData.phone}`}
                    className="font-bold text-dentology-navy hover:text-dentology-emerald"
                  >
                    {clinicData.displayPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Consultation Timings:</span>
                  <span className="font-semibold text-dentology-emerald">By Appointment</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={locationData.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full px-5 py-3 rounded-xl bg-dentology-emerald hover:bg-[#072B1C] text-white font-sans font-semibold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </button>
              </a>

              <a
                href={getWhatsAppUrl(createLocationWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full px-4 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-sans font-semibold text-xs tracking-wide transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </button>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
            <iframe
              src={clinicData.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location for Dentology House of Dentistry and Aesthetics Jaripatka Nagpur"
              className="w-full h-full absolute inset-0 filter saturate-[0.95]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
