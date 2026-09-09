export interface SmileCaseStudy {
  id: string;
  title: string;
  category: string;
  treatmentFocus: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  doctorNote: string;
  highlights: string[];
  quote: string;
}

export const smileCaseStudies: SmileCaseStudy[] = [
  {
    id: "natural-harmony",
    title: "Natural Smile Harmony & Alignment",
    category: "Restorative & Aesthetic Care",
    treatmentFocus: "Enamel Preservation & Shade Harmony",
    beforeImage: "/images/treatments/smile-before-1.png",
    afterImage: "/images/treatments/smile-after-1.png",
    beforeLabel: "BEFORE TREATMENT",
    afterLabel: "AFTER RESTORATION",
    doctorNote: "Minimally invasive enamel preservation with custom shade harmony.",
    highlights: [
      "Zero Enamel Reduction",
      "Digital Smile Mapping",
      "Natural Shade Balance",
    ],
    quote:
      "Our priority was preserving 100% of the patient's healthy natural enamel while achieving optimal symmetry.",
  },
  {
    id: "enamel-preservation",
    title: "Micro-Enamel Conservation & Strength",
    category: "Preventive & Restorative",
    treatmentFocus: "Tooth Structure Preservation",
    beforeImage: "/images/treatments/smile-before-2.png",
    afterImage: "/images/treatments/smile-after-2.png",
    beforeLabel: "INITIAL EVALUATION",
    afterLabel: "PRESERVED SMILE",
    doctorNote: "Gentle micro-scaling and protective enamel remineralization.",
    highlights: [
      "Ultrasonic Scaling",
      "Enamel Remineralization",
      "Sensitivity Relief",
    ],
    quote:
      "Early conservative intervention eliminated sensitivity and reinforced natural enamel structural integrity.",
  },
  {
    id: "3d-digital-restoration",
    title: "3D Guided Precision Restoration",
    category: "Digital Dentistry",
    treatmentFocus: "3D Intraoral Scan Guided Fit",
    beforeImage: "/images/treatments/smile-before-3.png",
    afterImage: "/images/treatments/smile-after-3.png",
    beforeLabel: "3D DIGITAL SCAN",
    afterLabel: "FINAL RESTORATION",
    doctorNote: "100% impression putty-free intraoral scanning & sub-millimeter fit.",
    highlights: [
      "Putty-Free Scanning",
      "Sub-Millimeter Precision",
      "Real-Time 3D Fitting",
    ],
    quote:
      "High-definition 3D intraoral scanning allowed us to preview and sculpt every microscopic contour before placement.",
  },
];
