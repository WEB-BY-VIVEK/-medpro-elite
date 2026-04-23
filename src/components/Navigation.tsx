
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, MessageCircle, Calendar, Menu, X } from 'lucide-react';
import { DOCTOR_DATA } from '../constants';
import { cn } from '../lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-4 left-4 right-4 z-50 transition-all duration-300 border border-border rounded-2xl md:max-w-5xl md:mx-auto',
        isScrolled 
          ? 'bg-card/90 backdrop-blur-md py-3 shadow-xl' 
          : 'bg-card py-4 shadow-sm'
      )}
    >
      <div className="px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-inner font-serif">
            +
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base leading-tight text-foreground font-serif">{DOCTOR_DATA.clinicName}</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold font-sans">Premium Medical Care</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors font-sans"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${DOCTOR_DATA.whatsapp}?text=Hello, I would like to book an appointment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white text-[10px] font-bold py-2 px-4 rounded-lg uppercase transition-all hover:opacity-90 shadow-sm font-sans"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" /> WhatsApp
          </a>
          <a
            href={`tel:${DOCTOR_DATA.phone}`}
            className="bg-primary text-primary-foreground text-[10px] font-bold py-2 px-4 rounded-lg uppercase transition-all hover:bg-primary/90 shadow-sm font-sans"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-bold text-foreground font-serif border-b border-border pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href="#book"
                  className="w-full bg-primary text-primary-foreground text-center py-4 rounded-xl font-bold uppercase text-xs tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Appointment
                </a>
                <a
                  href={`https://wa.me/${DOCTOR_DATA.whatsapp}?text=Hello, I would like to book an appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-5 h-5 fill-current" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
