import React from 'react';
import { content } from '../data/content';
import { UserCheck, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { profile } = content;

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-purple/10 text-accent-purple text-xs sm:text-sm font-semibold mb-3">
            <UserCheck className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Engineering Intelligent Systems
          </h2>
        </div>

        {/* About Main Card */}
        <div className="relative rounded-3xl sm:rounded-[32px] bg-white border border-white/80 p-8 sm:p-12 md:p-14 shadow-soft hover:shadow-soft-hover transition-all duration-300">
          {/* Subtle Morflax background gradient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-purple/5 to-accent-pink/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 sm:gap-10 items-start">
            {/* Visual highlight box */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-gradient-to-tr from-accent-purple via-accent-blue to-accent-pink p-0.5 shadow-[0_12px_24px_rgba(124,92,255,0.25)] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-accent-purple" />
              </div>
            </div>

            {/* Summary Text */}
            <div className="flex-1">
              <p className="text-base sm:text-xl text-navy-800 leading-relaxed font-normal">
                {profile.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
