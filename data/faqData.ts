export interface FAQItem {
  question: string;
  answer: string;
  category: "booking" | "clinic" | "technology" | "care";
}

export const faqData: FAQItem[] = [
  {
    question: "Is dental treatment painful?",
    answer:
      "At Dentology, we prioritize comfortable, gentle care. Dr. Sanika Sharma uses modern conservative techniques, effective local anesthesia, and clear patient communication so you are completely relaxed throughout your visit.",
    category: "care",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can easily book online using our 'Book Appointment' button, or connect directly via WhatsApp at +91 95612 88530. Our team will help you choose a convenient timing at our Jaripatka clinic.",
    category: "booking",
  },
  {
    question: "What happens during the first consultation?",
    answer:
      "Your first visit begins with a thorough, unhurried conversation with Dr. Sanika Sharma. We perform a gentle oral evaluation, discuss any symptoms or goals, and explain your options clearly so you are fully in control of your care plan.",
    category: "clinic",
  },
  {
    question: "Do you offer 3D intraoral scanning?",
    answer:
      "Yes! We use high-definition 3D intraoral scanning. In just a few minutes, a precision digital 3D model of your mouth is generated without any messy impression putty, allowing you to view and discuss your teeth on screen.",
    category: "technology",
  },
  {
    question: "How much does treatment cost?",
    answer:
      "Treatment costs depend on the specific dental care required after your clinical evaluation. We maintain complete transparency with clear explanations and treatment breakdowns before any care begins.",
    category: "care",
  },
  {
    question: "Can I contact the clinic through WhatsApp?",
    answer:
      "Yes, WhatsApp is a fast way to reach us! Simply tap the 'Discuss on WhatsApp' button anywhere on our website or message +91 95612 88530 for consultation inquiries.",
    category: "booking",
  },
];
