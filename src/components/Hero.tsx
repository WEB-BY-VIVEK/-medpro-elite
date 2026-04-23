
import { motion } from 'motion/react';
import { Phone, MessageSquare, Calendar, Star, ChevronRight } from 'lucide-react';
import { DOCTOR_DATA, SPECIALTIES } from '../constants';

export default function Hero() {
  const spec = SPECIALTIES[DOCTOR_DATA.specialty] || SPECIALTIES['Cardiologist'];

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-44 md:pb-20 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-[40px] p-8 md:p-12 shadow-sm overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-6">
              ★ {DOCTOR_DATA.rating} ({DOCTOR_DATA.rating === "4.9" ? "500+" : "100+"} Google Reviews)
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
              {DOCTOR_DATA.name}
            </h1>
            <p className="text-lg font-semibold text-blue-600 mb-4">{DOCTOR_DATA.qualification} • Senior {DOCTOR_DATA.specialty}</p>

            <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-lg">
              {DOCTOR_DATA.experience} Years Experience • Trusted {DOCTOR_DATA.specialty} Specialist in {DOCTOR_DATA.city}. 
              Providing compassionate treatment and advanced clinical care at {DOCTOR_DATA.clinicName}.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#book"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md flex items-center justify-center gap-2"
              >
                Book Appointment
              </a>
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/${DOCTOR_DATA.whatsapp}`}
                  className="p-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${DOCTOR_DATA.phone}`}
                  className="p-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all flex items-center justify-center"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-2">
                {spec.services.slice(0,3).map((s, i) => (
                    <span key={i} className="bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase border border-slate-100">{s.title}</span>
                ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-square">
              <img
                src="https://picsum.photos/seed/doctor_clean/800/800"
                alt={DOCTOR_DATA.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
