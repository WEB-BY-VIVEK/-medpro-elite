
import * as LucideIcons from 'lucide-react';
import { TRUST_BADGES } from '../constants';

export default function TrustBadges() {
  return (
    <section className="py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-foreground text-card rounded-3xl p-8 md:p-10 grid grid-cols-2 md:md:grid-cols-4 gap-8 shadow-xl">
          {TRUST_BADGES.map((badge, idx) => {
            return (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold mb-1 font-serif">{badge.value}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold font-sans">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
