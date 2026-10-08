import React from 'react';
import { content } from '../data/content';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = content;

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-pink/10 text-accent-pink text-xs sm:text-sm font-semibold mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-navy-600 text-sm sm:text-base max-w-lg">
            Internships and roles focused on applied machine learning, platforms, and technical evangelism.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-accent-purple/20 space-y-10 sm:space-y-12 ml-2 sm:ml-6 md:ml-12">
          {experience.map((item, index) => (
            <div key={`${item.role}-${index}`} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-4 border-accent-purple shadow-[0_0_0_4px_rgba(124,92,255,0.15)] group-hover:scale-110 group-hover:border-accent-pink transition-all duration-300" />

              {/* Experience Card */}
              <div className="rounded-3xl sm:rounded-[28px] bg-white border border-white/80 p-6 sm:p-8 md:p-9 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-hover">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-navy-900 text-lg sm:text-xl">
                      {item.role}
                    </h3>
                    <p className="font-semibold text-accent-purple text-sm sm:text-base">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-navy-600">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-navy-50 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-navy-500" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-navy-50 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-navy-500" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mt-4">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-navy-700">
                      <CheckCircle2 className="w-4 h-4 text-accent-purple shrink-0 mt-1" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
