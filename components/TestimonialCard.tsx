
import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="min-w-[350px] md:min-w-[400px] glass-card rounded-2xl p-8 flex-shrink-0 snap-center transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.05] group">
      <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
        <Quote size={20} className="text-gold fill-gold/20" />
      </div>

      <blockquote className="text-white/80 italic leading-relaxed text-lg mb-8 relative">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center gap-4 border-t border-white/5 pt-6">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="text-white font-bold tracking-tight text-lg">{testimonial.name}</div>
          <div className="text-gold/80 text-sm font-medium uppercase tracking-wider">{testimonial.title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
