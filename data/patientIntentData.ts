export interface IntentOptionData {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  category: string;
  doctorNote: string;
  lead: string;
  recommendation: string;
  highlights: string[];
  whatsappMessage: string;
  primaryCtaLabel: string;
}

export const patientIntentOptions: IntentOptionData[] = [
  {
    id: "smile",
    title: "I want to improve my smile",
    subtitle: "Cosmetic & Aesthetic Dentistry",
    iconName: "Sparkles",
    category: "Smile Enhancement",
    doctorNote: "Personalized Smile Evaluation by Dr. Sanika Sharma",
    lead: "A confident, natural smile starts with understanding your unique facial & tooth harmony.",
    recommendation:
      "We evaluate tooth alignment, enamel shade, and natural contouring using non-invasive digital assessment. We create a customized, conservative treatment roadmap tailored specifically to your aesthetic goals.",
    highlights: [
      "Digital Smile Analysis",
      "Conservative Veneers & Aligners",
      "Painless Shade Matching",
    ],
    whatsappMessage:
      "Hi Dentology! I am interested in improving my smile and would like to learn about your smile consultation.",
    primaryCtaLabel: "Schedule Smile Consultation",
  },
  {
    id: "concern",
    title: "I have a dental concern or pain",
    subtitle: "Urgent Relief & Diagnosis",
    iconName: "AlertCircle",
    category: "Emergency & Relief",
    doctorNote: "Conservative Tooth-Saving Assessment by Dr. Sanika Sharma",
    lead: "Immediate pain management & root cause identification before small issues escalate.",
    recommendation:
      "Please don't suffer through pain or delay care. Dr. Sanika Sharma performs precise clinical evaluation to identify the exact cause of discomfort and formulate a fast, conservative tooth-saving plan.",
    highlights: [
      "Same-Day Priority Slots",
      "Root Cause Identification",
      "Tooth-Preserving Protocol",
    ],
    whatsappMessage:
      "Hi Dentology! I have a dental concern or pain and would like to get it evaluated as soon as possible.",
    primaryCtaLabel: "Book Urgent Evaluation",
  },
  {
    id: "preventive",
    title: "I want routine check-up & preventive care",
    subtitle: "Comprehensive Oral Health",
    iconName: "ShieldCheck",
    category: "Preventive Care",
    doctorNote: "Enamel & Gum Maintenance by Dr. Sanika Sharma",
    lead: "Gentle enamel maintenance, ultrasonic cleaning, and proactive disease prevention.",
    recommendation:
      "Preventive care stops hidden dental issues before symptoms ever begin. Our detailed check-up evaluates enamel thickness, gum health, and brushing mechanics to preserve your natural teeth for life.",
    highlights: [
      "Ultrasonic Gentle Scaling",
      "Micro-Enamel Audit",
      "Custom Hygiene Education",
    ],
    whatsappMessage:
      "Hi Dentology! I would like to schedule a routine dental check-up and preventive care session.",
    primaryCtaLabel: "Schedule Routine Check-Up",
  },
  {
    id: "scanning",
    title: "I want to explore 3D intraoral scanning",
    subtitle: "Digital Dentistry Experience",
    iconName: "Scan",
    category: "3D Visualization",
    doctorNote: "High-Definition 3D Scan Experience",
    lead: "Zero impression putty, no gagging — see your complete mouth rendered in real-time 3D.",
    recommendation:
      "Experience next-generation dental technology. In under 5 minutes, our intraoral scanner creates an intricate 3D digital model of your teeth and gums so you can visualize and discuss your oral health together on screen.",
    highlights: [
      "100% Impression Putty Free",
      "Real-Time 3D Digital Model",
      "Zero Discomfort or Gagging",
    ],
    whatsappMessage:
      "Hi Dentology! I want to try the 3D intraoral scanner and see a digital scan of my teeth.",
    primaryCtaLabel: "Book 3D Scan Session",
  },
  {
    id: "unsure",
    title: "I'm not sure yet — just exploring",
    subtitle: "Welcome & General Guidance",
    iconName: "HelpCircle",
    category: "General Exploration",
    doctorNote: "No-Pressure Consultation with Dr. Sanika Sharma",
    lead: "A warm, welcoming environment where you can take things completely at your own pace.",
    recommendation:
      "Dentology was established as a friendly, community-first dental studio in Jaripatka. We invite you to ask questions, meet Dr. Sanika Sharma, or chat with us on WhatsApp before planning your visit.",
    highlights: [
      "Zero-Pressure Consultation",
      "Meet Dr. Sanika Sharma",
      "Transparent Care Advice",
    ],
    whatsappMessage:
      "Hi Dentology! I am exploring options for dental care and would love to ask a few general questions.",
    primaryCtaLabel: "Talk to Our Team",
  },
];
