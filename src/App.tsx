
import Navigation from './components/Navigation';
import GlassHero from './components/ui/glassmorphism-trust-hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import { Calendar } from './components/ui/calendar';
import { ContainerScroll } from './components/ui/container-scroll-animation';
import AnimatedTestimonials from './components/AnimatedTestimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import { DOCTOR_DATA } from './constants';
import { motion, useScroll, useSpring } from 'motion/react';
import { Check, ShieldCheck, Clock, UserCheck, MessageSquare, MessageCircle } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative font-sans selection:bg-primary/20 selection:text-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navigation />
      
      <main>
        <GlassHero />
        <TrustBadges />
        
        {/* About Section */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-video lg:aspect-[4/5]">
                            <img 
                                src="https://picsum.photos/seed/doctor_about/800/1000" 
                                alt="About Doctor" 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-card p-8 rounded-3xl shadow-2xl border border-border hidden md:block max-w-xs">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-foreground leading-tight font-serif">Patient First Philosophy</h4>
                            </div>
                            <p className="text-sm text-muted-foreground font-medium leading-relaxed font-sans">
                                "We treat people, not just symptoms. Every patient receives a personalized care plan."
                            </p>
                        </div>
                    </div>
                    
                    <div>
                        <span className="text-primary font-bold text-sm uppercase tracking-widest mb-3 block font-sans">About the Doctor</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight font-serif">
                            Dedicated to Excellence in {DOCTOR_DATA.specialty}
                        </h2>
                        
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10 font-sans">
                            <p>
                                {DOCTOR_DATA.name} is a renowned {DOCTOR_DATA.specialty} with over {DOCTOR_DATA.experience} years of clinical experience. 
                                Holding degrees from top medical institutions ({DOCTOR_DATA.qualification}), he has dedicated his career to advancing 
                                healthcare outcomes through innovation and compassionate care.
                            </p>
                            <p>
                                At {DOCTOR_DATA.clinicName}, we believe in a holistic approach to patient wellness. Our clinic is equipped 
                                with the latest diagnostic technology to ensure accurate assessments and effective treatments.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {[
                                { icon: UserCheck, label: 'Board Certified', desc: 'Verified Specialist' },
                                { icon: Clock, label: 'Minimal Wait', desc: 'Respect for Your Time' },
                                { icon: Check, label: 'Modern Clinic', desc: 'Hygienic & Advanced' },
                                { icon: ShieldCheck, label: 'Safety Protocols', desc: 'ISO Certified Care' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-muted p-4 rounded-xl border border-border">
                                    <div className="w-8 h-8 bg-accent text-primary rounded-lg flex items-center justify-center shrink-0">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-xs truncate font-sans">{item.label}</h4>
                                        <p className="text-[10px] text-muted-foreground font-bold tracking-tight uppercase font-sans">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a 
                            href="#book" 
                            className="inline-flex items-center gap-2 bg-foreground text-card px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-all group font-sans uppercase text-xs tracking-widest border border-foreground"
                        >
                            Learn More About Treatments
                            <Check className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <Services />

        {/* Gallery Scroll Animation */}
        <section className="bg-muted overflow-hidden relative -mt-20 md:-mt-40">
           <ContainerScroll
             titleComponent={
               <div className="max-w-2xl mx-auto px-4 translate-y-12 md:translate-y-24">
                 <span className="text-primary font-bold text-[10px] uppercase tracking-widest mb-3 block font-sans">Perspective</span>
                 <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">
                    Experience Healthcare <br />
                    <span className="text-primary">Like Never Before</span>
                 </h2>
                 <p className="text-muted-foreground text-sm font-medium leading-relaxed font-sans">
                    A closer look at {DOCTOR_DATA.clinicName}'s state-of-the-art facilities and patient-centric approach.
                 </p>
               </div>
             }
           >
             <img
               src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
               alt="Healthcare Facility"
               className="mx-auto rounded-2xl object-cover h-full w-full"
               referrerPolicy="no-referrer"
               draggable={false}
             />
           </ContainerScroll>
        </section>

        {/* Availability & Booking Grid */}
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Calendar />
                    <div className="bg-foreground rounded-[32px] p-8 md:p-12 text-card flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <span className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4 block font-sans">Quick Consultation</span>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-serif">Can't find a preferred slot?</h3>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-medium font-sans">
                            Our team handles emergency requests and walk-ins daily. Message us directly on WhatsApp for an express appointment.
                        </p>
                        <a 
                            href={`https://wa.me/${DOCTOR_DATA.whatsapp}?text=Hello, I need an express appointment.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:opacity-90 text-white font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-3 w-fit group shadow-xl font-sans"
                        >
                            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" />
                            WHATSAPP US NOW
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-24 bg-muted overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-3 block font-sans">Why Choose Us</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">Exceptional Care You Can Trust</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: 'Experienced Team', desc: 'Led by one of the city\'s most trusted medical professionals with deep expertise.' },
                        { title: 'Affordable Rates', desc: 'Premium healthcare doesn\'t have to be expensive. We offer transparent pricing.' },
                        { title: 'Hygienic Environment', desc: 'Strict sterilization protocols and a clean, comfortable clinic space.' },
                        { title: 'Easy Communication', desc: 'Reach us via WhatsApp, Phone, or Website. We respond within minutes.' },
                        { title: 'Modern Equipment', desc: 'Utilizing state-of-the-art diagnostic and treatment tools for better results.' },
                        { title: 'Emergency Contact', desc: '24/7 emergency support for established patients in critical need.' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-card p-8 rounded-3xl border border-border hover:shadow-xl transition-all">
                            <div className="w-12 h-12 bg-accent text-primary rounded-xl flex items-center justify-center mb-6">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-foreground mb-2 font-serif">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed font-medium font-sans">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <AnimatedTestimonials />
        <BookingForm />
        <Contact />
      </main>

      <Footer />
      <MobileCTA />

      {/* Floating WhatsApp Button for Desktop */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col gap-4">
        <a
          href={`https://wa.me/${DOCTOR_DATA.whatsapp}?text=Hello, I would like to book an appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative"
        >
          {/* Official-looking icon sizing and style */}
          <MessageCircle className="w-9 h-9 fill-current" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-card text-foreground px-4 py-2 rounded-xl text-xs font-bold shadow-xl border border-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest font-sans">
            WhatsApp Us
          </span>

          {/* Pulse Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 -z-10 h-full w-full"></span>
        </a>
      </div>
    </div>
  );
}
