
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/' },
    { name: 'Testimonials', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-[72px] z-50 transition-all duration-500 flex items-center px-4 md:px-8 ${isScrolled
          ? 'bg-background/70 backdrop-blur-2xl border-b border-gold/10'
          : 'bg-transparent'
        }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center space-x-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
          aria-label="Prakhar Jain Portfolio Home"
        >
          <span className="text-gold font-bold text-xl tracking-tight group-hover:scale-105 transition-transform duration-300">Prakhar Jain</span>
          <span className="text-white/60 font-normal text-lg ml-2 hidden sm:inline">— Web Design</span>
        </Link>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-[32px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-all duration-300 hover:text-gold relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold px-1 rounded-sm ${location.pathname === link.path ? 'text-gold' : 'text-white/70'
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''
                }`}></span>
            </Link>
          ))}
        </div>

        {/* Right: CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="btn-gold !text-sm !py-2.5 !px-6 flex items-center gap-2 group"
            aria-label="Get a free demo website"
          >
            Get Free Demo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Glassmorphic Overlay) */}
      <div
        className={`fixed inset-0 top-[72px] bg-background/95 backdrop-blur-3xl z-40 transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col p-8 gap-8 items-center text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-bold text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            className="btn-gold w-full mt-4 flex items-center justify-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Free Demo
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
