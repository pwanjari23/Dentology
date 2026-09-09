import { clinicData } from "@/data/clinicData";

const BASE_WHATSAPP_URL = "https://wa.me/";

export function getWhatsAppUrl(message: string): string {
  const cleanNumber = clinicData.whatsappNumber.replace(/[^0-9]/g, "");
  return `${BASE_WHATSAPP_URL}${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function createGeneralWhatsAppMessage(): string {
  return "Hi Dr. Sanika & Dentology team, I discovered Dentology online and would like to inquire about booking a consultation.";
}

export function createTreatmentWhatsAppMessage(treatmentName: string): string {
  return `Hi Dr. Sanika & Dentology team, I would like to know more about ${treatmentName} and schedule an initial consultation.`;
}

export function createIntentWhatsAppMessage(intentTitle: string): string {
  return `Hi Dr. Sanika & Dentology team, I'm visiting your website. My focus today is: "${intentTitle}". I would like to discuss this and explore consultation options.`;
}

export function createLocationWhatsAppMessage(): string {
  return "Hi Dentology team, I am planning a visit to your Jaripatka clinic (Kamal Phool Chowk) and would like to confirm available consultation timings.";
}

export interface AppointmentFormState {
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
}

export function createAppointmentWhatsAppMessage(data: AppointmentFormState): string {
  const lines = [
    "Hello Dr. Sanika & Dentology Team,",
    "",
    "I would like to request an appointment consultation:",
    `• Patient Name: ${data.name || "Not provided"}`,
    `• Phone: ${data.phone || "Not provided"}`,
    `• Preferred Date: ${data.preferredDate || "Flexible"}`,
    `• Preferred Time: ${data.preferredTime || "Flexible"}`,
    `• Reason for Visit: ${data.reason || "General Consultation"}`,
    "",
    "Could you please confirm the available slot at your Jaripatka clinic?",
  ];

  return lines.join("\n");
}
