export interface DoctorInfo {
  name: string;
  title: string;
  role: string;
  qualification: string;
  education: string;
  experienceYears: number;
  registrationVerified: boolean;
  practiceName: string;
  location: string;
  bio: string;
  quote: string;
  clinicStory: string;
  image: string;
}

export const doctorData: DoctorInfo = {
  name: "Dr. Sanika Sharma",
  title: "Founder & Lead Dentist",
  role: "Led by Dr. Sanika Sharma",
  qualification: "BDS",
  education: "BDS from Datta Meghe Institute of Higher Education & Research, 2017",
  experienceYears: 9,
  registrationVerified: true,
  practiceName: "Dentology House Of Dentistry and Aesthetics",
  location: "Jaripatka, Nagpur",
  bio: "Dr. Sanika Sharma founded Dentology with a passionate mission: to bring advanced, compassionate, and precise dental care home to Jaripatka. Dedicated to preserving your natural smile and demystifying dental health through modern digital technology.",
  quote:
    "As a dentist, my highest priority is saving your natural teeth and making sure you truly understand your oral health. When you can see and understand your mouth, you can care for it with confidence.",
  clinicStory:
    "Dentology was never just about opening a clinic. It was about bringing quality dental care back home, to the people, streets, and community that raised me — Jaripatka deserved better access to modern dental care. So instead of chasing a 'posh' address, we built a modern dental haven right where it matters most.",
  image: "/images/doctor/dr-sanika-sharma.jpg",
};
