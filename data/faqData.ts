export interface FAQItem {
  question: string;
  answer: string;
  category: "booking" | "clinic" | "technology" | "care";
}

export const faqData: FAQItem[] = [
  {
    question: "How can I book an appointment at Dentology?",
    answer:
      "You can book directly by sending a WhatsApp message to +91 95612 88530 or by using our interactive appointment drawer on this website. You can also DM us on our official Instagram account @dentology_og1.",
    category: "booking",
  },
  {
    question: "Where is Dentology located in Nagpur?",
    answer:
      "We are conveniently situated in Jaripatka, Nagpur at: 1st Floor, H.No 130, Pandav Enclave, Opposite Kewalramani Hospital, Kamal Phool Chowk. Landmark: Just a few turns straight from Hanuman Mandir to your right.",
    category: "clinic",
  },
  {
    question: "What is intraoral 3D scanning and how does it help me?",
    answer:
      "Intraoral scanning uses a comfortable handheld digital wand to take thousands of high-definition optical snapshots inside your mouth, instantly stitching them into a 3D digital model. Unlike messy impression paste, it is fast, comfortable, and allows you to clearly see your teeth and gums on a high-definition monitor while Dr. Sanika Sharma explains your oral health.",
    category: "technology",
  },
  {
    question: "Why is saving natural teeth so emphasized at Dentology?",
    answer:
      "Your natural tooth structure is anatomically unique and superior to any synthetic replacement. Dr. Sanika Sharma focuses on conservative dentistry—early detection, preventing small issues from escalating into major infections, and preserving your authentic tooth structure wherever possible.",
    category: "care",
  },
  {
    question: "How can I contact the clinic for urgent dental queries?",
    answer:
      "You can reach Dr. Sanika Sharma and the Dentology team directly via WhatsApp or phone call at +91 95612 88530. We promptly review your message to coordinate consultation times.",
    category: "clinic",
  },
];
