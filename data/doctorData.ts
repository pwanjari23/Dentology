export interface DoctorInfo {
  name: string;
  title: string;
  role: string;
  bio: string;
  quote: string;
  clinicStory: string;
  qualifications: string | null;
  experienceYears: number | null;
  certifications: string[] | null;
  image: string;
}

export const doctorData: DoctorInfo = {
  name: "Dr. Sanika Sharma",
  title: "Founder & Lead Dentist",
  role: "Led by Dr. Sanika Sharma",
  bio: "Dr. Sanika Sharma founded Dentology with a passionate mission: to bring advanced, compassionate, and precise dental care home to Jaripatka. Dedicated to preserving your natural smile and demystifying dental health through modern digital technology.",
  quote:
    "As a dentist, my highest priority is saving your natural teeth and making sure you truly understand your oral health. When you can see and understand your mouth, you can care for it with confidence.",
  clinicStory:
    "Dentology was never just about opening a clinic. It was about bringing quality dental care back home, to the people, streets, and community that raised me — Jaripatka deserved better access to modern dental care. So instead of chasing a 'posh' address, we built a modern dental haven right where it matters most.",
  qualifications: null, // Strictly null per data safety rule
  experienceYears: null, // Strictly null per data safety rule
  certifications: null, // Strictly null per data safety rule
  image: "/images/doctor/dr-sanika-sharma.jpg",
};
