
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-background border-t border-white/5 pt-20 pb-12 px-4 md:px-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center space-x-0 mb-6 group">
            <span className="text-gold font-bold text-2xl tracking-tighter transition-transform group-hover:scale-105">Prakhar Jain</span>
            <span className="text-white/40 font-normal text-xl ml-2 hidden sm:inline">— Visionary Dev</span>
          </Link>
          <p className="text-white/60 text-lg max-w-[350px] leading-relaxed">
            Building the next generation of premium web experiences for businesses that demand nothing but excellence.
          </p>
          <div className="flex gap-4 mt-8">
            {[
              { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
              { icon: <Github size={18} />, href: "#", label: "GitHub" },
              { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-gold hover:bg-gold/10 hover:border-gold/20 border border-transparent transition-all duration-300"
                aria-label={`Follow on ${social.label}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
          <ul className="space-y-4">
            {[
              { name: 'Services', path: '/' },
              { name: 'About Me', path: '/about' },
              { name: 'Work', path: '/' },
              { name: 'Contact', path: '/contact' },
            ].map(link => (
              <li key={link.name}>
                <Link to={link.path} className="text-white/50 hover:text-gold transition-colors flex items-center gap-2 group text-sm">
                  {link.name}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Legal</h4>
          <ul className="space-y-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <li key={item}>
                <Link to="/" className="text-white/50 hover:text-gold transition-colors text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-white/30">
          © {new Date().getFullYear()} Prakhar Jain. Handcrafted with passion and precision.
        </p>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/20">
          <span>DESIGNED IN INDIA</span>
          <span className="w-1 h-1 bg-white/20 rounded-full"></span>
          <span>CODED FOR THE WORLD</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
