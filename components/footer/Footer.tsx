"use client";

import { Instagram, MessageCircle, MapPin, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import { doctorData } from "@/data/doctorData";
import { socialData } from "@/data/socialData";
import { locationData } from "@/data/locationData";
import { getWhatsAppUrl, createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import { useNavigation, NavTab } from "@/context/NavigationContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { setActiveTab } = useNavigation();

  const handleNav = (tab: NavTab, hash?: string) => {
    setActiveTab(tab);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 sm:pt-20 pb-24 sm:pb-12 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 pb-10 sm:pb-16 border-b border-slate-800/80">
          {/* Brand & Doctor Identity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <button
              onClick={() => handleNav("home")}
              className="flex items-center gap-2.5 mb-4 text-left"
            >
              <div className="w-8 h-8 rounded-full bg-dentology-blue flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                {clinicData.name}
              </span>
            </button>

            <p className="text-xs font-sans text-dentology-teal uppercase tracking-widest font-bold mb-4">
              {clinicData.subTitle}
            </p>

            <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-sm mb-6">
              {clinicData.tagline}. Led by{" "}
              <strong className="text-white font-semibold">{doctorData.name}</strong>, providing
              personalized, comfortable, and modern dental care in Jaripatka, Nagpur.
            </p>

            {/* Social & WhatsApp Badges */}
            <div className="flex items-center gap-3">
              <a
                href={socialData.instagram.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 flex items-center justify-center transition-all hover:rotate-6 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl(createGeneralWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-dentology-green hover:border-dentology-green/50 flex items-center justify-center transition-all hover:scale-105 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={locationData.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-dentology-blue hover:border-dentology-blue/50 flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Desktop/Laptop only, hidden on mobile) */}
          <div className="hidden md:block lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6 font-sans">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <button
                  onClick={() => handleNav("home")}
                  className="hover:text-dentology-teal transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("doctor")}
                  className="hover:text-dentology-teal transition-colors text-left"
                >
                  Meet Dr. Sanika Sharma
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("clinic")}
                  className="hover:text-dentology-teal transition-colors text-left"
                >
                  Inside the Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("scanning")}
                  className="hover:text-dentology-teal transition-colors text-left"
                >
                  3D Intraoral Scanning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("treatments")}
                  className="hover:text-dentology-teal transition-colors text-left"
                >
                  Treatment Focus Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("home", "#stories")}
                  className="hover:text-dentology-teal transition-colors text-left"
                >
                  Smile Stories (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("home", "#instagram")}
                  className="hover:text-dentology-teal transition-colors text-left"
                >
                  Instagram Feed (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("home", "#location")}
                  className="hover:text-dentology-teal transition-colors text-left"
                >
                  Studio Location (Home)
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Clinic Address & NAP (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6 font-sans">
              Verified Studio Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-sans text-slate-400">
              <p className="flex items-start gap-2 text-slate-200">
                <MapPin className="w-4 h-4 text-dentology-terracotta shrink-0 mt-0.5" />
                <span>{clinicData.address.fullAddress}</span>
              </p>
              <p className="pl-6 text-xs text-slate-500 italic">
                Landmark: {clinicData.address.landmark}
              </p>
              <p className="flex items-center gap-2 pt-2 text-slate-200">
                <Phone className="w-4 h-4 text-dentology-blue shrink-0" />
                <a href={`tel:${clinicData.phone}`} className="hover:text-white font-semibold">
                  {clinicData.displayPhone}
                </a>
              </p>
              <p className="pl-6 text-xs text-dentology-green font-medium">
                Consultations by appointment via WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex items-center justify-center text-xs text-slate-400 font-sans text-center">
          <p>
            © {currentYear} {clinicData.name} ({clinicData.subTitle}). Led by {doctorData.name}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
