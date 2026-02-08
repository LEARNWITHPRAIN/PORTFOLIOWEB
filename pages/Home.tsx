
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import LazyImage from '../components/LazyImage';
import { Package, Testimonial } from '../types';
import { ArrowRight, CheckCircle2, Star, Sparkles, Monitor, Smartphone, Zap } from 'lucide-react';

const PACKAGES: Package[] = [
  {
    tag: "Most Popular 🔥",
    title: "One-Page Website",
    description: "Perfect for local businesses to get online fast and start attracting customers.",
    meta: "3-5 Days Delivery • Mobile Optimized • Basic SEO",
    price: "₹7,999"
  },
  {
    tag: "Premium 💎",
    title: "Custom Brand Website",
    description: "Tailored high-end design for businesses looking to dominate their market.",
    meta: "7-10 Days Delivery • Full SEO • Custom Interactions",
    price: "Custom"
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Prakhar built us a clean, modern website that instantly increased customer trust. People now say our brand looks premium.",
    name: "Rohit M.",
    title: "Restaurant Owner"
  },
  {
    quote: "The custom website perfectly matched our startup vision. Fast, responsive, and built exactly for conversion.",
    name: "Neha P.",
    title: "Startup Founder"
  },
  {
    quote: "I needed a personal brand website that looked professional and loaded fast. Prakhar nailed it in one go.",
    name: "Aman K.",
    title: "Content Creator"
  },
  {
    quote: "Our old site was slow and outdated. The new website brought more inquiries within the first week itself.",
    name: "Sanjay R.",
    title: "Local Business Owner"
  }
];

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="bg-background overflow-x-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center w-full z-10">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8 backdrop-blur-md">
              <Sparkles size={14} className="text-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">
                Premium Web Design for Businesses
              </span>
            </div>

            <h1 className="text-[2.75rem] md:text-[5rem] lg:text-[5.5rem] font-bold text-white leading-[1] tracking-tight mb-8">
              Grow Your Business With a <span className="text-gold text-glow">Premium Website</span>
            </h1>

            <p className="text-white/60 text-lg md:text-2xl leading-relaxed max-w-[650px] mb-12">
              We build high-performance websites that don't just look stunning—they turn strangers into loyal customers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <Zap size={20} />, text: "Ultra Fast Performance" },
                { icon: <Smartphone size={20} />, text: "100% Mobile Responsive" },
                { icon: <Monitor size={20} />, text: "SEO Ready Structure" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/50 text-sm font-medium">
                  <div className="text-gold">{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <button className="btn-gold group flex items-center gap-3 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                Get Your Free Website Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline-gold">
                View Recent Work
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[500px] md:h-[650px] hidden lg:flex items-center justify-center perspective-[1000px]"
          >
            <div className="relative w-full max-w-[500px] group">
              <div className="absolute -inset-4 bg-gold/20 rounded-[2.5rem] blur-2xl group-hover:bg-gold/30 transition-all duration-700 opacity-50"></div>
              <div className="relative glass-card p-3 rounded-[2.5rem] border-gold/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transform transition-transform duration-700 hover:rotate-2 hover:scale-[1.02]">
                <LazyImage
                  src="/images/photo1.jpg"
                  alt="Founder Prakhar Jain"
                  className="rounded-[2rem] aspect-[4/5] object-cover"
                  priority={true}
                />

                {/* Floating Elements */}
                <div className="absolute -right-8 top-1/4 glass-card p-4 rounded-2xl flex items-center gap-3 animate-bounce shadow-xl border-gold/10">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <CheckCircle2 size={24} className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Design Ready</div>
                    <div className="text-white/40 text-[10px]">Ready to launch</div>
                  </div>
                </div>

                <div className="absolute -left-12 bottom-1/4 glass-card p-4 rounded-2xl flex items-center gap-3 animate-pulse shadow-xl border-gold/10">
                  <div className="bg-gold/20 p-2 rounded-full">
                    <Star size={24} className="text-gold fill-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">5-Star Quality</div>
                    <div className="text-white/40 text-[10px]">Top Rated Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-white/5 bg-white/[0.01] py-12">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <span className="text-xl font-bold italic tracking-tighter">TRUSTED BY 50+ BUSINESSES</span>
          <span className="text-2xl font-bold">RESTAURANTS</span>
          <span className="text-2xl font-bold">ECHOMERCE</span>
          <span className="text-2xl font-bold">AGENCIES</span>
          <span className="text-2xl font-bold">CREATORS</span>
        </div>
      </div>

      {/* Pricing Section (Packages) */}
      <section className="py-24 md:py-32 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold uppercase tracking-widest text-sm mb-4"
            >
              Pricing & Packages
            </motion.div>
            <h2 className="text-[2.5rem] md:text-[4rem] font-bold text-white mb-6">Choose Your Best Fit</h2>
            <div className="w-20 h-1.5 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <CourseCard pkg={pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#0a0a12]/50 py-24 md:py-32 px-4 md:px-8 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-[600px]">
              <div className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Success Stories</div>
              <h2 className="text-[2.5rem] md:text-[4rem] font-bold text-white leading-tight">What Our Clients Are Saying</h2>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="w-[60px] h-[3px] bg-gold rounded-full"></div>
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-48 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 rounded-full blur-[150px] -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[900px] mx-auto relative z-10 glass-card p-12 md:p-24 rounded-[3rem] border-gold/10"
        >
          <h2 className="text-[2.5rem] md:text-[4.5rem] font-bold text-white mb-8 leading-tight">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-white/60 text-xl md:text-2xl mb-12 max-w-[600px] mx-auto">
            Get a high-end demo website designed specifically for your brand. Completely free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="btn-gold !px-12 !py-6 !text-xl group">
              Claim Your Free Demo
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="text-white/40 text-sm mt-10 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-gold" /> No credit card needed</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-gold" /> Cancel anytime</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
