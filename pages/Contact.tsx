
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-24 items-center">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">Get In Touch</span>
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] font-bold text-white mb-8 leading-tight tracking-tight">Let's Create <span className="text-glow text-gold">Something Great</span></h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Ready to elevate your business with a premium website? I'm currently accepting new projects. Let's talk about your vision.
          </p>

          <div className="space-y-8">
            {[
              { icon: <Mail className="text-gold" />, label: "Email Me", val: "prakharjain2731@gmail.com", href: "mailto:prakharjain2731@gmail.com" },
              { icon: <MapPin className="text-gold" />, label: "Location", val: "Available Worldwide", href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-6 group focus:outline-none"
              >
                <div className="bg-white/5 w-14 h-14 rounded-full flex items-center justify-center border border-white/10 group-hover:border-gold/30 group-hover:bg-gold/5 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-white text-lg font-bold group-hover:text-gold transition-colors">{item.val}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] border-white/5 shadow-3xl"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="John Doe"
                  required
                  aria-label="Full Name"
                />
              </div>
              <div className="space-y-3">
                <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="john@example.com"
                  required
                  aria-label="Email Address"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest ml-1">Project Message</label>
              <textarea
                className="input-field min-h-[160px] resize-none"
                placeholder="Tell me about your business and website goals..."
                required
                aria-label="Project Message"
              />
            </div>
            <button className="btn-gold w-full flex items-center justify-center gap-3 text-lg py-5 group shadow-[0_0_40px_rgba(212,175,55,0.1)]">
              Send Message
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/40 text-xs font-medium">Typical response time: <span className="text-white">Under 24 hours</span></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
