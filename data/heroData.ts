export interface HeroCTA {
  label: string;
  icon?: string;
  variant: "primary" | "secondary";
  action: "appointment" | "whatsapp" | "link";
  url?: string;
}

export interface HeroTrustIndicator {
  icon: string;
  label: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroData {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subtitle: string;
  primaryCTA: HeroCTA;
  secondaryCTA: HeroCTA;
  backgroundImage: string;
  backgroundImageAlt: string;
  trustIndicators: HeroTrustIndicator[];
  stats: HeroStat[];
  doctorName: string;
  doctorTitle: string;
  doctorEducation: string;
  doctorImage: string;
  clinicLocation: string;
}

export const heroData: HeroData = {
  eyebrow: "HOUSE OF DENTISTRY & AESTHETICS • JARIPATKA, NAGPUR",
  headline: "Dentistry, thoughtfully designed",
  headlineAccent: "around you.",
  subtitle:
    "Personalized dental care combining clinical precision, modern technology, and a natural approach to aesthetics with Dr. Sanika Sharma.",

  primaryCTA: {
    label: "BOOK AN APPOINTMENT",
    icon: "Calendar",
    variant: "primary",
    action: "appointment",
  },
  secondaryCTA: {
    label: "EXPLORE TREATMENTS",
    icon: "ArrowRight",
    variant: "secondary",
    action: "link",
    url: "#treatments",
  },

  backgroundImage: "/images/hero/hero-bg.png",
  backgroundImageAlt:
    "Modern dental environment at Dentology House of Dentistry and Aesthetics, Jaripatka, Nagpur",

  trustIndicators: [
    { icon: "ShieldCheck", label: "Verified Medical Registration" },
    { icon: "Award", label: "BDS — Datta Meghe Inst. (2017)" },
    { icon: "Sparkles", label: "9 Years Experience Overall" },
  ],

  stats: [
    { value: "9+", label: "Years Experience" },
    { value: "BDS", label: "Datta Meghe Inst." },
    { value: "Verified", label: "Medical Reg." },
  ],

  doctorName: "Dr. Sanika Sharma",
  doctorTitle: "BDS • Dentist",
  doctorEducation: "9 Years Experience Overall",
  doctorImage: "/images/doctor/dr-sanika-sharma.jpg",
  clinicLocation: "Jaripatka, Nagpur",
};
