export interface TreatmentItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullExplanation: string;
  highlights: string[];
  intentTag: string;
  image: string;
}

export const treatmentsData: TreatmentItem[] = [
  {
    id: "intraoral-3d-scanning",
    number: "01",
    title: "High-Resolution 3D Intraoral Scanning",
    category: "Diagnostic Technology",
    shortDescription:
      "See what the mirror can't. Detailed, high-resolution 3D digital views of teeth and gums.",
    fullExplanation:
      "Our cutting-edge intraoral scans capture high-resolution digital maps of your teeth and gums. This helps detect micro-concerns early, enables ultra-precise treatment planning, and allows you to clearly understand your mouth on screen. Fast, precise, and comfortable — without messy traditional impressions.",
    highlights: [
      "No messy trays or goop",
      "Instant real-time high-def visualization",
      "Early detection before complications occur",
      "Digital precision treatment records",
    ],
    intentTag: "3d-scanning",
    image: "/images/treatments/intraoral-scan.jpg",
  },
  {
    id: "tooth-preservation",
    number: "02",
    title: "Tooth Preservation & Conservative Dentistry",
    category: "Restorative Care",
    shortDescription:
      "Saving your natural tooth structure first with micro-invasive restorative techniques.",
    fullExplanation:
      "Natural teeth are irreplaceable masterpieces. At Dentology, our philosophy revolves around conservative dentistry: intercepting infections early, saving natural tooth structure, and protecting against avoidable extractions. Timely professional intervention prevents minor reversible conditions from turning into complex procedures.",
    highlights: [
      "Preserving natural tooth integrity",
      "Micro-invasive restorative protocols",
      "Early infection control & tooth saving",
      "Long-term structural longevity",
    ],
    intentTag: "concern",
    image: "/images/treatments/tooth-preservation.jpg",
  },
  {
    id: "preventive-enamel-care",
    number: "03",
    title: "Preventive Enamel Care & Oral Education",
    category: "Preventive Health",
    shortDescription:
      "Gentle, scientifically guided enamel protection, remineralization, and correct brushing mechanics.",
    fullExplanation:
      "Your enamel is remarkably strong, but not indestructible. Brushing harder or aggressively wears down your enamel, causing sensitivity and gum recession. We provide personalized oral hygiene guidance, safe enamel maintenance, and proactive preventive care tailored to your unique oral microbiome.",
    highlights: [
      "Customized brushing & technique evaluation",
      "Enamel wear & sensitivity management",
      "Gum recession prevention",
      "Routine preventive wellness checkups",
    ],
    intentTag: "preventive",
    image: "/images/treatments/enamel-care.jpg",
  },
  {
    id: "smile-aesthetics-restorations",
    number: "04",
    title: "Smile Aesthetics & Joyful Restorations",
    category: "Aesthetic Dentistry",
    shortDescription:
      "Harmonious dental aesthetics designed to bring out your most natural, confident, and joyful smile.",
    fullExplanation:
      "A great smile should feel completely like you. We combine aesthetic discernment with modern restorative materials to enhance smile harmony, repair chipped or worn edges, and restore balanced alignment while upholding structural health and function.",
    highlights: [
      "Natural, individualized smile aesthetics",
      "Bio-compatible restorative materials",
      "Conservative edge & contour refinement",
      "Confidence-building joyful smile outcomes",
    ],
    intentTag: "smile-design",
    image: "/images/treatments/smile-aesthetics.jpg",
  },
];
