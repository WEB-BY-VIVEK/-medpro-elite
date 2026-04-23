
import { MapPin, Phone, MessageSquare, Mail, Play, Check } from 'lucide-react';
import { DOCTOR_DATA } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-3 block font-sans">Get in Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 font-serif transition-colors">Visit Our Clinic</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-primary shrink-0 border border-border">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1 font-serif">Our Location</h4>
                  <p className="text-muted-foreground leading-relaxed font-medium font-sans">{DOCTOR_DATA.address}</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DOCTOR_DATA.address)}`} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-primary font-bold hover:underline font-sans text-xs tracking-widest uppercase">Get Directions</a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-primary shrink-0 border border-border">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1 font-serif">Call Us</h4>
                  <p className="text-muted-foreground font-medium font-sans">{DOCTOR_DATA.phone}</p>
                  <p className="text-muted-foreground/60 text-sm italic mt-1 font-medium font-sans">Available during clinic hours</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-[#25D366] shrink-0 border border-border">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1 font-serif">WhatsApp Us</h4>
                  <p className="text-muted-foreground font-medium font-sans">Connect for quick queries</p>
                  <a href={`https://wa.me/${DOCTOR_DATA.whatsapp}?text=Hello, I have a query.`} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-[#25D366] font-bold hover:underline font-sans text-xs tracking-widest uppercase">Chat on WhatsApp</a>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted rounded-3xl border border-border">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 font-serif">
                <Check className="w-5 h-5 text-primary" /> Clinic Timings
              </h4>
              <div className="grid grid-cols-2 gap-4 font-sans">
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Mon - Sat</p>
                  <p className="font-bold text-foreground">10 AM - 7 PM</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Sunday</p>
                  <p className="font-bold text-foreground">By Appt Only</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group min-h-[400px]">
             <div className="w-full h-full bg-muted rounded-[32px] overflow-hidden border border-border shadow-sm relative">
                <iframe
                    title="Clinic Location"
                    className="w-full h-full min-h-[400px] grayscale contrast-125 opacity-70 transition-all group-hover:grayscale-0 group-hover:opacity-100"
                    src={`https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_ACTUAL_KEY&q=${encodeURIComponent(DOCTOR_DATA.address)}`}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    srcDoc={`<style>body{margin:0;overflow:hidden}.map-container{width:100%;height:100%;filter:grayscale(1);transition:all 0.5s ease}.map-container:hover{filter:grayscale(0)}</style>
                      <div class="map-container">
                        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=${encodeURIComponent(DOCTOR_DATA.address)}&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                      </div>`}
                ></iframe>
                
                <div className="absolute top-6 left-6 p-4 bg-card/90 backdrop-blur rounded-2xl border border-border shadow-xl max-w-[240px] pointer-events-none">
                    <p className="font-bold text-foreground text-sm font-serif">{DOCTOR_DATA.clinicName}</p>
                    <p className="text-[10px] text-muted-foreground mt-1 font-medium font-sans">{DOCTOR_DATA.address}</p>
                    <p className="text-[10px] font-bold text-primary mt-2 uppercase tracking-wider font-sans">Location Verified ✓</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
