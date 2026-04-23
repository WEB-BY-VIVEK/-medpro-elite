
import { DOCTOR_DATA } from '../constants';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-serif font-bold text-xl text-white">
                +
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight font-serif text-card">{DOCTOR_DATA.clinicName}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold font-sans">Modern Healthcare</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm font-sans font-medium leading-relaxed mb-8">
              Providing premium medical care with compassion and modern technology in {DOCTOR_DATA.city}. Trusted health partner for you and your family.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center transition-all border border-white/10 group">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-widest font-sans">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground font-medium font-sans text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Specialties</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Doctor</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#book" className="hover:text-primary transition-colors">Book Slot</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-widest font-sans">Medical Expertise</h4>
            <ul className="space-y-4 text-muted-foreground font-medium font-sans text-sm">
              <li>{DOCTOR_DATA.specialty}</li>
              <li>Consultation</li>
              <li>Emergency Care</li>
              <li>Modern Diagnostics</li>
              <li>Regular Checkups</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-widest font-sans">Contact Info</h4>
            <ul className="space-y-4 text-muted-foreground font-medium font-sans text-sm">
              <li className="flex gap-3">
                <Heart className="w-5 h-5 text-primary shrink-0" />
                <span>{DOCTOR_DATA.address}</span>
              </li>
              <li className="flex gap-3">
                <Heart className="w-5 h-5 text-primary shrink-0" />
                <span>{DOCTOR_DATA.phone}</span>
              </li>
              <li className="flex gap-3">
                <Heart className="w-5 h-5 text-primary shrink-0" />
                <span>{DOCTOR_DATA.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest font-sans">
            © {currentYear} {DOCTOR_DATA.clinicName}. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-muted-foreground font-bold uppercase tracking-tight font-sans">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Patient Rights</a>
            <span className="text-primary/50">Powered by MedPro Elite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
