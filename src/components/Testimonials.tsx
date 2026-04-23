
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-3 block">Patient Testimonials</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Patient Experiences</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm relative group h-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-slate-900 text-sm leading-tight">{review.name}</h4>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-600 italic leading-relaxed mb-4">
                "{review.text}"
              </p>

              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{review.date}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-lg mx-auto">
            <div className="flex items-center gap-4 mb-4">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" 
                    alt="Google" 
                    className="w-10 h-10"
                />
                <div>
                    <h3 className="font-bold text-gray-900">4.9 Star Google Rating</h3>
                    <p className="text-sm text-gray-500">Based on 500+ patient reviews</p>
                </div>
            </div>
            <a 
                href="#" 
                className="text-blue-600 font-bold hover:underline"
            >
                Read All Reviews on Google Maps
            </a>
        </div>
      </div>
    </section>
  );
}
