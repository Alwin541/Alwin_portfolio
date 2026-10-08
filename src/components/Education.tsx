import React from 'react';
import { content } from '../data/content';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  const { education, certifications } = content;

  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-purple/10 text-accent-purple text-xs sm:text-sm font-semibold mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-navy-600 text-sm sm:text-base max-w-lg">
            Formal foundations in robotics, artificial intelligence, and specialized coursework.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Column 1: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-accent-purple/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent-purple" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy-900">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-white/80 p-6 sm:p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-hover"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-navy-50 text-navy-600">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    {item.score && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                        {item.score}
                      </span>
                    )}
                  </div>

                  <h4 className="font-heading font-bold text-navy-900 text-lg sm:text-xl mb-1">
                    {item.degree}
                  </h4>
                  <p className="font-semibold text-accent-purple text-sm sm:text-base mb-3">
                    {item.institution}
                  </p>

                  {item.details && (
                    <p className="text-sm text-navy-600 leading-relaxed font-normal pt-2 border-t border-navy-50">
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-accent-blue/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent-blue" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy-900">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-white/80 p-5 sm:p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-hover flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-purple/10 to-accent-blue/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy-900 text-base sm:text-lg">
                      {cert.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-navy-500 mt-0.5">
                      Issued by <span className="text-navy-800 font-semibold">{cert.issuer}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
