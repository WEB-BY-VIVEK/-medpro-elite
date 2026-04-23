import React from "react";
import { 
  ArrowRight, 
  Play, 
  Target, 
  Crown, 
  Star,
  Activity,
  Heart,
  ShieldCheck,
  Stethoscope,
  Microscope,
  Award
} from "lucide-react";
import { DOCTOR_DATA } from "../../constants";

// --- MEDICAL ASSOCIATIONS ---
const PARTNERS = [
  { name: "IMA Member", icon: ShieldCheck },
  { name: "Cardiac Society", icon: Activity },
  { name: "AIIMS Alumnus", icon: Award },
  { name: "ISO Certified", icon: ShieldCheck },
  { name: "Health Council", icon: Heart },
  { name: "Fellow ACC", icon: Crown },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl font-serif">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold sm:text-xs font-sans">{label}</span>
  </div>
);

export default function GlassHero() {
  return (
    <div id="home" className="relative w-full bg-slate-950 text-white overflow-hidden font-sans border-b border-slate-900">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background with Medical Aesthetic */}
      <div 
        className="absolute inset-0 z-0 bg-[url(https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=2070&auto=format&fit=crop)] bg-cover bg-center opacity-20 grayscale"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 md:pt-44 md:pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                  Top Rated {DOCTOR_DATA.specialty} in {DOCTOR_DATA.city}
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                </span>
              </div>
            </div>

            <h1 
              className="animate-fade-in delay-200 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.95] font-serif"
              style={{
                maskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)"
              }}
            >
              Protecting Your<br />
              <span className="bg-gradient-to-br from-white via-white to-primary bg-clip-text text-transparent">
                {DOCTOR_DATA.specialty} Health
              </span><br />
              With Precision
            </h1>

            <p className="animate-fade-in delay-300 max-w-xl text-lg text-slate-400 leading-relaxed font-medium font-sans">
              Join {DOCTOR_DATA.name} and the team at {DOCTOR_DATA.clinicName} for advanced {DOCTOR_DATA.specialty.toLowerCase()} diagnostics and compassionate treatment in {DOCTOR_DATA.city}.
            </p>

            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4">
              <a href="#book" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] shadow-xl shadow-primary/40 font-sans">
                Book Appointment
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a href={`tel:${DOCTOR_DATA.phone}`} className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20 font-sans">
                <Play className="w-4 h-4 fill-current" />
                Clinic Virtual Tour
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 shadow-inner">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white font-serif">10,000+</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-sans">Successful Treatments</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest font-sans">
                    <span className="text-slate-400">Patient Satisfaction</span>
                    <span className="text-white">98%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/50">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-primary to-accent" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                <div className="grid grid-cols-3 gap-2 text-center items-center">
                  <StatItem value={DOCTOR_DATA.experience} label="Years" />
                  <div className="w-px h-10 bg-white/10 mx-auto" />
                  <StatItem value="24/7" label="Support" />
                  <div className="w-px h-10 bg-white/10 mx-auto" />
                  <StatItem value="Top" label="Medical" />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold tracking-widest text-slate-300 uppercase">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Clinic Open
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold tracking-widest text-slate-300 uppercase font-sans">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    Verified Specialist
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 py-8 backdrop-blur-xl">
              <h3 className="mb-6 px-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 font-sans">Trusted By Industry Bodies</h3>
              
              <div 
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                    >
                      <partner.icon className="h-5 w-5 text-white" />
                      <span className="text-sm font-bold text-white tracking-widest uppercase">
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
