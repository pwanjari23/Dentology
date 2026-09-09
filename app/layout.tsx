import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppointmentProvider } from "@/context/AppointmentContext";
import { NavigationProvider } from "@/context/NavigationContext";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import AppointmentModal from "@/components/booking/AppointmentModal";
import FloatingWhatsApp from "@/components/booking/FloatingWhatsApp";
import { clinicData } from "@/data/clinicData";
import { doctorData } from "@/data/doctorData";
import { locationData } from "@/data/locationData";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DENTOLOGY | House of Dentistry and Aesthetics • Dr. Sanika Sharma",
  description:
    "Modern dental clinic in Jaripatka, Nagpur led by Dr. Sanika Sharma. High-resolution 3D intraoral scanning, conservative tooth preservation, and joyful smile aesthetics.",
  keywords: [
    "Dentology Nagpur",
    "Dr. Sanika Sharma",
    "Dentist in Jaripatka",
    "Dental Clinic Jaripatka Nagpur",
    "3D Intraoral Scanning Nagpur",
    "Tooth Preservation Dentist",
    "Dentology House of Dentistry",
    "Kamal Phool Chowk Dentist",
  ],
  authors: [{ name: doctorData.name }],
  creator: clinicData.name,
  metadataBase: new URL("https://dentology.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DENTOLOGY | House of Dentistry & Aesthetics • Nagpur",
    description:
      "A healthier smile starts with seeing it differently. Led by Dr. Sanika Sharma in Jaripatka, Nagpur. Modern 3D intraoral digital dentistry & natural tooth preservation.",
    url: "https://dentology.in",
    siteName: "DENTOLOGY",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/doctor/dr-sanika-sharma.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Sanika Sharma - Dentology Jaripatka Nagpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DENTOLOGY | House of Dentistry and Aesthetics",
    description:
      "Modern dental clinic in Jaripatka, Nagpur led by Dr. Sanika Sharma. 3D intraoral scans & conservative tooth preservation.",
    images: ["/images/doctor/dr-sanika-sharma.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "DENTOLOGY (House of Dentistry and Aesthetics)",
    image: "https://dentology.in/images/doctor/dr-sanika-sharma.jpg",
    telephone: "+91-9561288530",
    url: "https://dentology.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, Pandav Enclave, Opposite Kewalramani Hospital, Kamal Phool Chowk",
      addressLocality: "Jaripatka, Nagpur",
      addressRegion: "Maharashtra",
      postalCode: "440014",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: locationData.coordinates.lat,
      longitude: locationData.coordinates.lng,
    },
    founder: {
      "@type": "Person",
      name: "Dr. Sanika Sharma",
      jobTitle: "Lead Dentist & Founder",
    },
    sameAs: [
      "https://www.instagram.com/dentology_og1",
      "https://www.facebook.com/profile.php?id=61581589685851",
    ],
    priceRange: "$$",
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${dmSerif.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col relative bg-slate-50 text-dentology-navy font-sans antialiased">
        <NavigationProvider>
          <AppointmentProvider>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <AppointmentModal />
            <FloatingWhatsApp />
          </AppointmentProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
