export interface ClinicInfo {
  name: string;
  subTitle: string;
  tagline: string;
  philosophy: string;
  communityVision: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
    fullAddress: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  openingHours: string | null; // strictly null if not officially published
  highlights: string[];
}

export const clinicData: ClinicInfo = {
  name: "DENTOLOGY",
  subTitle: "House of Dentistry and Aesthetics",
  tagline: "Your destination for joyful smiles",
  philosophy:
    "Not every dream needs a fancy address, sometimes it belongs exactly where it started. Dentology was created to bring world-class, modern dental care back home to the community of Jaripatka.",
  communityVision:
    "Bringing quality, comfortable, and modern dentistry to the people, streets, and community that raised us. One stop for every dentistry need.",
  phone: "+919561288530",
  displayPhone: "+91 95612 88530",
  whatsappNumber: "919561288530",
  address: {
    line1: "1st Floor, Pandav Enclave",
    line2: "Opposite Kewalramani Hospital, Kamal Phool Chowk",
    area: "Jaripatka",
    city: "Nagpur",
    state: "Maharashtra",
    pincode: "440014",
    landmark: "Opposite Kewalramani Hospital, Kamal Phool Chowk",
    fullAddress:
      "1st Floor, Pandav Enclave, opposite Kewalramani Hospital, Kamal Phool Chowk, Jaripatka, Nagpur, Maharashtra 440014, India",
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dentology+Jaripatka+Nagpur+Pandav+Enclave+Kamal+Phool+Chowk",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Dentology%20Jaripatka%20Nagpur%20Pandav%20Enclave%20Kamal%20Phool%20Chowk&t=&z=16&ie=UTF8&iwloc=&output=embed",
  openingHours: null, // Verified rule: null if unverified hours
  highlights: [
    "3D Intraoral Scanning",
    "Tooth Preservation",
    "Preventive Enamel Care",
    "Joyful Smile Aesthetics",
    "Conservative Care",
    "Patient-First Dentistry",
  ],
};
