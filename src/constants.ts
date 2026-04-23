
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface SpecialtyConfig {
  name: string;
  heroHeadline: string;
  heroSubheadline: string;
  services: Service[];
  seoKeywords: string[];
}

export const DOCTOR_DATA = {
  name: "Dr. Vikram Sharma",
  qualification: "MBBS, MD - Cardiology",
  specialty: "Cardiologist",
  experience: "15+",
  clinicName: "HeartCare Advanced Clinic",
  address: "123, Medical Row, Jubilee Hills, Hyderabad, Telangana 500033",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "contact@heartcarehyd.com",
  fees: "800",
  emergency: "+91 98765 99999",
  rating: "4.9",
  city: "Hyderabad",
  timings: "Mon-Sat: 10:00 AM - 07:00 PM, Sun: By Appointment Only",
};

export const SPECIALTIES: Record<string, SpecialtyConfig> = {
  Cardiologist: {
    name: "Cardiologist",
    heroHeadline: "Protecting Your Heart with Advanced Cardiac Care",
    heroSubheadline: "Expert diagnosis and treatment for all heart conditions using the latest medical technology.",
    services: [
      { title: "ECG & Stress Test", description: "Comprehensive heart rhythm monitoring and cardiac stress evaluation.", icon: "Activity" },
      { title: "BP Management", description: "Personalized plans to maintain healthy blood pressure levels.", icon: "Heart" },
      { title: "Cholesterol Care", description: "Effective management of lipid profiles to prevent heart disease.", icon: "Droplets" },
      { title: "Cardiac Consultation", description: "Detailed checkups for preventive and curative heart health.", icon: "Stethoscope" },
      { title: "Heart Failure Clinic", description: "Specialized care for patients with chronic heart conditions.", icon: "PlusCircle" },
    ],
    seoKeywords: ["best cardiologist in Hyderabad", "heart specialist near me", "top heart doctor Hyderabad"],
  },
  Dentist: {
    name: "Dentist",
    heroHeadline: "Crafting Beautiful, Healthy Smiles Every Day",
    heroSubheadline: "Painless dental treatments with advanced technology for a lifetime of confident smiles.",
    services: [
      { title: "Root Canal Treatment", description: "Specialized pain-free single sitting root canal procedures.", icon: "Zap" },
      { title: "Dental Implants", description: "Permanent solutions for missing teeth with natural look and feel.", icon: "Smile" },
      { title: "Teeth Whitening", description: "Advanced clinical whitening for a bright and radiant smile.", icon: "Sparkles" },
      { title: "Orthodontics", description: "Braces and clear aligners to correct teeth alignment.", icon: "Grid" },
      { title: "Smile Makeover", description: "Comprehensive aesthetic dentistry for your dream smile.", icon: "Star" },
    ],
    seoKeywords: ["best dentist in Hyderabad", "dental clinic near me", "top dental specialist Hyderabad"],
  },
};

export const REVIEWS: Review[] = [
  { name: "Rahul Verma", rating: 5, text: "Excellent experience. The doctor was very patient and explained everything clearly. The clinic is very clean and hygienic.", date: "2 weeks ago" },
  { name: "Priya Reddy", rating: 5, text: "One of the most trusted doctors in the city. The staff is very friendly and the appointment process was seamless.", date: "1 month ago" },
  { name: "Anil Kumar", rating: 5, text: "Very professional approach. Helped me recover quickly from my heart surgery. Highy recommended!", date: "3 weeks ago" },
  { name: "Meera Das", rating: 4, text: "Wait time was a bit more than expected, but the consultation was very detailed. Satisfied with the care.", date: "2 months ago" },
  { name: "Suresh Gupta", rating: 5, text: "Modern equipment and expert diagnosis. I felt I was in safe hands from the moment I entered.", date: "1 month ago" },
  { name: "Sneha Kapoor", rating: 5, text: "Great clinical environment and excellent results. My routine checkups are always smooth.", date: "5 days ago" },
];

export const TRUST_BADGES = [
  { label: "Experience", value: "15+ Years", icon: "Award" },
  { label: "Happy Patients", value: "10,000+", icon: "Users" },
  { label: "Response Time", value: "Same Day", icon: "Clock" },
  { label: "Equipment", value: "Modern Tech", icon: "Microscope" },
];

export const FAQS = [
  { question: "How to book an appointment?", answer: "You can book an appointment via our website form, call us directly, or send us a message on WhatsApp." },
  { question: "What are the consultation charges?", answer: `Our standard consultation fee is ₹${DOCTOR_DATA.fees}. Follow-up charges may vary.` },
  { question: "Do you accept emergency cases?", answer: `Yes, we handle emergency cases. Please call our emergency number ${DOCTOR_DATA.emergency} immediately.` },
  { question: "What are the clinic timings?", answer: `We are open ${DOCTOR_DATA.timings}.` },
  { question: "Where is the clinic located?", answer: `We are located at ${DOCTOR_DATA.address}. Map integration is available below.` },
];
