
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';
import { DOCTOR_DATA, SPECIALTIES } from '../constants';

export default function Services() {
  const spec = SPECIALTIES[DOCTOR_DATA.specialty] || SPECIALTIES['Cardiologist'];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-[10px] uppercase tracking-widest mb-3 block font-sans">Expert Care</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">Our Services</h2>
          <p className="text-muted-foreground text-sm font-sans">
            Providing comprehensive medical care with a focus on patients' specific health needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spec.services.map((service, idx) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Stethoscope;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary hover:shadow-xl transition-all cursor-default"
              >
                <div className="w-12 h-12 bg-muted text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-serif">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 font-medium font-sans">Looking for a specific treatment or consultation?</p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all font-sans uppercase text-xs tracking-widest"
          >
            View All Services <LucideIcons.ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
