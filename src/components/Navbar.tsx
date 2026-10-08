import React, { useState, useEffect } from 'react';
import { content } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navLinks, profile } = content;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <nav
        aria-label="Main Navigation"
        className={`max-w-[1100px] mx-auto rounded-full px-5 py-3 transition-all duration-300 flex items-center justify-between ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md shadow-[0_10px_30px_-5px_rgba(124,92,255,0.12)] border border-white/80'
            : 'bg-white/60 backdrop-blur-sm border border-white/50'
        }`}
      >
        {/* Logo / Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple rounded-full p-1"
          aria-label={`${profile.name} - Home`}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-accent-purple via-accent-blue to-accent-pink flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_12px_rgba(124,92,255,0.35)] group-hover:scale-105 transition-transform duration-200">
            AJ
          </div>
          <span className="font-heading font-bold text-navy-900 text-base sm:text-lg tracking-tight group-hover:text-accent-purple transition-colors">
            {profile.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-navy-700/80 hover:text-accent-purple px-3.5 py-1.5 rounded-full hover:bg-white/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-full bg-navy-900 text-white hover:bg-accent-purple transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Get in touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-navy-900 rounded-full hover:bg-navy-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-[1100px] mx-auto bg-white/95 backdrop-blur-xl border border-white rounded-3xl p-4 shadow-[0_20px_40px_rgba(20,18,58,0.12)] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-navy-900 font-medium px-4 py-2.5 rounded-xl hover:bg-navy-50 hover:text-accent-purple transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-navy-100 mt-1">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1 text-sm font-semibold py-2.5 rounded-xl bg-navy-900 text-white hover:bg-accent-purple transition-all"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
