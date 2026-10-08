import React from 'react';
import { content } from '../data/content';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile, footer } = content;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-t border-navy-100/60 bg-transparent">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Left Side: Name and Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="font-heading font-bold text-navy-900 text-sm">
            {profile.name}
          </span>
          <span className="hidden sm:inline text-navy-300">•</span>
          <p className="text-xs sm:text-sm text-navy-500">
            {footer.copyright}
          </p>
        </div>

        {/* Right Side: Note and Back to top */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-navy-400 hidden md:inline">
            {footer.note}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-navy-100 text-navy-700 hover:text-accent-purple hover:border-accent-purple/30 shadow-sm hover:shadow transition-all"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
