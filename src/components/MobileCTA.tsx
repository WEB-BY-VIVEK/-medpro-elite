
import { Phone, MessageSquare, MessageCircle, Calendar } from 'lucide-react';
import { DOCTOR_DATA } from '../constants';

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 pb-6 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
      <div className="flex gap-3 pointer-events-auto max-w-lg mx-auto">
        <a
          href={`tel:${DOCTOR_DATA.phone}`}
          className="flex-1 bg-card text-foreground p-4 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl border border-border active:scale-95 transition-transform"
        >
          <Phone className="w-6 h-6 text-primary" />
          <span className="text-[10px] uppercase font-bold tracking-wider font-sans">Call</span>
        </a>
        <a
          href="#book"
          className="flex-[2] bg-primary text-primary-foreground p-4 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl shadow-primary/20 active:scale-95 transition-transform"
        >
          <Calendar className="w-6 h-6" />
          <span className="text-[10px] uppercase font-bold tracking-wider font-sans">Book Slot</span>
        </a>
        <a
          href={`https://wa.me/${DOCTOR_DATA.whatsapp}?text=Hello, I would like to book an appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl shadow-green-200 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="text-[10px] uppercase font-bold tracking-wider font-sans">Chat</span>
        </a>
      </div>
    </div>
  );
}
