
import React from 'react';
import { Package } from '../types';
import { ArrowRight, Zap, Gem } from 'lucide-react';

interface CourseCardProps {
  pkg: Package;
}

const CourseCard: React.FC<CourseCardProps> = ({ pkg }) => {
  const isPremium = pkg.tag.includes("Premium");

  return (
    <div className="glass-card rounded-2xl p-8 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      {/* Gradient Border Overlay on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-2xl transition-colors duration-500 pointer-events-none"></div>

      <div className="flex items-center gap-2 mb-4">
        {isPremium ? <Gem size={16} className="text-gold" /> : <Zap size={16} className="text-gold" />}
        <span className="text-gold text-[0.875rem] font-semibold uppercase tracking-widest">{pkg.tag}</span>
      </div>

      <h3 className="text-3xl font-bold text-white mt-1 group-hover:text-gold transition-colors duration-300">{pkg.title}</h3>
      <p className="text-white/60 mt-4 leading-relaxed text-lg">{pkg.description}</p>

      <div className="bg-white/5 h-[1px] w-full my-6"></div>

      <div className="flex flex-col gap-2">
        <span className="text-white/40 text-sm font-medium uppercase tracking-tight">Features & Delivery</span>
        <div className="text-white/80 font-medium">{pkg.meta}</div>
      </div>

      <div className="mt-8 flex items-baseline gap-2">
        <span className="text-[2.5rem] font-bold text-gold">{pkg.price}</span>
        {pkg.price.startsWith('₹') && <span className="text-white/40 text-sm">/ project</span>}
      </div>

      <button
        className={`w-full mt-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${isPremium
            ? 'bg-gold text-background hover:brightness-110 shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)]'
            : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        aria-label={`Get a free demo for ${pkg.title}`}
      >
        Get Free Demo
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default CourseCard;
