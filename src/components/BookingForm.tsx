
import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { DOCTOR_DATA } from '../constants';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    problem: '',
    date: '',
    time: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Construct WhatsApp Message
    const message = `*Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Age:* ${formData.age}%0A*Issue:* ${formData.problem}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}`;
    const waUrl = `https://wa.me/${DOCTOR_DATA.whatsapp}?text=${message}`;

    // Webhook Logic (Simulation - in production use real URL)
    try {
      // await fetch('YOUR_APPS_SCRIPT_WEBHOOK_URL', { method: 'POST', body: JSON.stringify(formData) });
      console.log('Form Submitted to Webhook (Simulation)', formData);
    } catch (e) {
      console.error('Webhook failed', e);
    }

    setLoading(false);
    setSubmitted(true);

    // Redirect to WhatsApp after 1s
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1000);
  };

  return (
    <section id="book" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Book Your Appointment</h2>
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed max-w-lg">
              Take the first step towards better health. Fill out the form and our team will get back to you within 2-4 working hours.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Consultation Fees', value: `₹${DOCTOR_DATA.fees}` },
                { label: 'Avg. Waiting Time', value: '15-20 Mins' },
                { label: 'Emergency Contact', value: DOCTOR_DATA.emergency },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 text-white font-serif">
                     <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm font-medium">{item.label}</p>
                    <p className="text-white font-bold text-xl">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <p className="text-primary-foreground/80 italic font-serif">"Patient care is our top priority. We ensure every appointment is handled with utmost professionalism and safety."</p>
                <p className="text-white font-bold mt-4">— {DOCTOR_DATA.name}</p>
            </div>
          </div>

          <div className="bg-card rounded-[32px] p-8 md:p-10 shadow-2xl border-2 border-primary">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Request Received!</h3>
                <p className="text-muted-foreground mb-8 font-medium">Redirecting you to WhatsApp to confirm your slot...</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-bold uppercase text-xs tracking-widest border-b border-primary"
                >
                  Edit Information
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-foreground">
                <div>
                   <h3 className="text-xl font-bold mb-1 font-serif">Book Visit</h3>
                   <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-6">Fill details to receive WhatsApp confirmation</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter name"
                      className="text-sm border border-border bg-muted p-3 rounded-lg outline-none focus:border-primary focus:bg-background transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="text-sm border border-border bg-muted p-3 rounded-lg outline-none focus:border-primary focus:bg-background transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Appointment Date</label>
                    <input
                      required
                      type="date"
                      className="text-sm border border-border bg-muted p-3 rounded-lg outline-none focus:border-primary focus:bg-background transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Symptom / Choice</label>
                    <select
                      required
                      className="text-sm border border-border bg-muted p-3 rounded-lg outline-none focus:border-primary focus:bg-background transition-all"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option value="">Select Option</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Routine Checkup">Routine Checkup</option>
                      <option value="Follow-up">Follow-up</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Problem / Symptoms</label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe concern..."
                    className="text-sm border border-border bg-muted p-3 rounded-lg outline-none focus:border-primary focus:bg-background transition-all"
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="mt-2 bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors uppercase text-xs tracking-widest disabled:opacity-70"
                >
                  {loading ? 'Processing...' : 'CONFIRM VISIT'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
