import { TestimonialsColumn } from "@/src/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Dr. Vikram is exceptionally patient. He explained the cardiac recovery process in a way that gave me immense confidence.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "Arjun Mehta",
    role: "Patient (Recovery Care)",
  },
  {
    text: "The clinic environment is incredibly professional and hygienic. I highly recommend for anyone seeking senior cardiac consultation.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    name: "Sunita Rao",
    role: "Regular Checkup",
  },
  {
    text: "Booking via WhatsApp was so seamless. I got a response within 10 minutes and a slot for the same afternoon.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    name: "Karan Johar",
    role: "New Patient",
  },
  {
    text: "Advanced equipment and a truly caring doctor. The best cardiac facility I've visited in the city.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
    name: "Priya Singh",
    role: "Consultation",
  },
  {
    text: "My high blood pressure is finally under control thanks to Dr. Vikram's personalized wellness and diet plan.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704h",
    name: "Mohit Kumar",
    role: "Chronic Care",
  },
  {
    text: "Excellent service from the staff. They ensure history is properly recorded and wait time is minimized.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704i",
    name: "Anjali Gupta",
    role: "Patient",
  },
  {
    text: "I was skeptical about finding a good specialist remotely, but the online inquiry led to a life-saving checkup.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704j",
    name: "Rahul Verma",
    role: "Emergency Visit",
  },
  {
    text: "The diagnostic accuracy here is top-notch. They have the latest ECG and Stress Test machines.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704k",
    name: "Suresh Pillai",
    role: "Diagnostic Patient",
  },
  {
    text: "Truly a premium experience. From the waiting area to the consultation room, everything screams quality.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704l",
    name: "Meera Das",
    role: "Executive Checkup",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const AnimatedTestimonials = () => {
  return (
    <section id="reviews" className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-16"
        >
          <div className="flex justify-center">
            <div className="border border-slate-200 py-1 px-4 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest">
              Success Stories
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mt-6 text-center">
            What our patients say
          </h2>
          <p className="text-center mt-5 text-slate-500 font-medium leading-relaxed">
             Join thousands of happy patients who have trusted us with their heart health and well-being.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
        
        <div className="mt-12 text-center relative z-20">
             <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-xl">
                <span className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                </span>
                <span className="font-bold text-xs uppercase tracking-tight text-slate-900">4.9/5 on Google Maps</span>
             </div>
        </div>
      </div>
    </section>
  );
};

function Star(props: any) {
    return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}

export default AnimatedTestimonials;
