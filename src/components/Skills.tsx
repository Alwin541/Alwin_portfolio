import React from 'react';
import { content } from '../data/content';
import {
  Brain,
  Eye,
  MessageSquare,
  BarChart3,
  Globe,
  Terminal,
  Cpu,
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Machine Learning & Deep Learning': <Brain className="w-5 h-5 text-accent-purple" />,
  'Computer Vision': <Eye className="w-5 h-5 text-accent-blue" />,
  'NLP': <MessageSquare className="w-5 h-5 text-accent-pink" />,
  'Data Analysis': <BarChart3 className="w-5 h-5 text-emerald-500" />,
  'Web Development': <Globe className="w-5 h-5 text-indigo-500" />,
  'Languages & Tools': <Terminal className="w-5 h-5 text-amber-500" />,
};

export const Skills: React.FC = () => {
  const { skills } = content;

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs sm:text-sm font-semibold mb-3">
            <Cpu className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="mt-3 text-navy-600 text-sm sm:text-base max-w-lg">
            Core technologies and toolchains applied across the machine learning and software lifecycle.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((group) => {
            const icon = categoryIcons[group.category] || <Cpu className="w-5 h-5 text-accent-purple" />;
            return (
              <div
                key={group.category}
                className="group rounded-3xl bg-white border border-white/80 p-6 sm:p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-navy-50/80 border border-navy-100/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      {icon}
                    </div>
                    <h3 className="font-heading font-bold text-navy-900 text-base sm:text-lg">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#F7F5FF] text-navy-800 border border-navy-100/70 hover:border-accent-purple/40 hover:bg-white hover:text-accent-purple transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
