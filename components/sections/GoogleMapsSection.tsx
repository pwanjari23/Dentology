"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, MessageCircle, Clock, ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../ui/MagneticButton";
import { clinicData } from "@/data/clinicData";
import { locationData } from "@/data/locationData";
import { getWhatsAppUrl, createLocationWhatsAppMessage } from "@/lib/whatsapp";

export default function GoogleMapsSection() {
  return (
    <section id="location" className="relative py-14 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Visit the Studio"
          title="Find your way to Dentology."
          subtitle="Located at Kamal Phool Chowk in Jaripatka, Nagpur. Modern dental care right in the heart of the community."
          badgeColor="blue"
        />

        {/* Premium Map Container with Floating Location Card */}
        <div className="relative rounded-2xl sm:rounded-[36px] overflow-hidden shadow-2xl border-2 sm:border-4 border-slate-100 min-h-[440px] sm:min-h-[500px] lg:min-h-[580px] bg-slate-100 flex items-center">
          {/* Real Google Maps Embed Iframe */}
          <iframe
            src={clinicData.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "440px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location for Dentology Jaripatka Nagpur"
            className="w-full h-full absolute inset-0 filter saturate-[0.9] contrast-[1.05]"
          />

          {/* Floating Location Card Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 m-3 sm:m-8 max-w-md w-full p-5 sm:p-8 rounded-2xl sm:rounded-[30px] bg-white/95 backdrop-blur-md shadow-2xl border border-slate-200"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dentology-blue/10 text-dentology-blue text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Verified Location</span>
            </div>

            <h3 className="font-serif text-2xl text-dentology-navy font-normal mb-1">
              {clinicData.name}
            </h3>
            <p className="text-xs font-sans text-dentology-teal font-semibold tracking-wide uppercase mb-4">
              {clinicData.subTitle}
            </p>

            {/* Address */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-sans mb-6">
              <p className="font-medium text-slate-900">{clinicData.address.line1}</p>
              <p>{clinicData.address.line2}</p>
              <p>
                {clinicData.address.area}, {clinicData.address.city} - {clinicData.address.pincode}
              </p>
              <div className="pt-2 text-xs text-slate-500 italic flex items-start gap-1.5">
                <span className="font-bold text-dentology-navy not-italic">Landmark:</span>
                <span>{clinicData.address.landmark}</span>
              </div>
            </div>

            {/* Phone and Hours Notes */}
            <div className="pt-4 border-t border-slate-200/80 mb-6 space-y-2">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-slate-500">Contact / WhatsApp:</span>
                <a
                  href={`tel:${clinicData.phone}`}
                  className="font-bold text-dentology-navy hover:text-dentology-blue"
                >
                  {clinicData.displayPhone}
                </a>
              </div>
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-slate-500">Consultations:</span>
                <span className="font-semibold text-dentology-green">By Appointment</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={locationData.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto grow"
              >
                <MagneticButton variant="primary" className="w-full text-xs py-3">
                  <Navigation className="w-3.5 h-3.5 mr-1.5" />
                  <span>Get Directions</span>
                </MagneticButton>
              </a>

              <a
                href={getWhatsAppUrl(createLocationWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <MagneticButton variant="outline" className="w-full text-xs py-3">
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5 text-dentology-green" />
                  <span>WhatsApp</span>
                </MagneticButton>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
