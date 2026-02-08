
import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';
import { CheckCircle2, Award, Users, Rocket, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: "Projects Completed", value: "50+", icon: <Rocket size={20} /> },
    { label: "Happy Clients", value: "40+", icon: <Users size={20} /> },
    { label: "Years Experience", value: "3+", icon: <Award size={20} /> },
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      {/* Hero Area */}
      <section className="pt-20 pb-16 px-4 text-center max-w-[1200px] mx-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">The Face Behind the Code</span>
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] font-bold text-white mb-6 tracking-tight">Meet <span className="text-gold">Prakhar Jain</span></h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-[800px] mx-auto leading-relaxed">
            I craft premium web experiences that blend state-of-the-art design with high-performance engineering.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group perspective-[1000px]"
        >
          <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl group-hover:bg-gold/20 transition-all duration-700 opacity-50"></div>
          <div className="relative glass-card p-3 rounded-3xl border-gold/10 shadow-2xl">
            <LazyImage
              src="/images/photo1.jpg"
              alt="Prakhar Jain - Founder and Developer"
              className="w-full aspect-[4/5] object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-white mb-2 leading-tight">I Build Digital Assets, Not Just Websites</h2>

          <div className="space-y-6">
            <p className="text-xl text-white/70 leading-relaxed">
              My mission is simple: to help businesses transition from "just having a website" to "owning a high-performance digital asset."
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              Every pixel I place and every line of code I write is optimized for one thing: your business growth. I combine the aesthetic standards of Apple with the interaction quality of Stripe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border-white/5 flex flex-col items-center text-center">
                <div className="text-gold mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {["Custom React Development", "High-End UX Design", "Performance Engineering"].map((skill, idx) => (
              <div
                key={idx}
                className="bg-gold/5 border border-gold/20 text-gold text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-[0.15em] flex items-center gap-2"
              >
                <CheckCircle2 size={14} />
                {skill}
              </div>
            ))}
          </div>

          <div className="pt-8">
            <button className="btn-gold group flex items-center gap-3">
              Let's Build Your Vision
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
