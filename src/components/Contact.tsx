import React from 'react';
import { content } from '../data/content';
import { Mail, Send, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  const { profile } = content;

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Contact Container Card */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-white border border-white/80 p-8 sm:p-12 md:p-16 shadow-soft text-center overflow-hidden">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-accent-purple/10 via-accent-blue/10 to-accent-pink/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-purple/10 text-accent-purple text-xs sm:text-sm font-semibold mb-4">
              <MessageCircle className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
              Let's build something <span className="gradient-text">exceptional</span> together
            </h2>

            <p className="text-base sm:text-lg text-navy-600 mb-10 leading-relaxed font-normal">
              Whether you are looking to collaborate on applied AI projects, discuss multimodal RAG architectures, or explore new opportunities, my inbox is always open.
            </p>

            {/* Action Buttons: Email, LinkedIn, GitHub */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              {/* Email Button */}
              <a
                href={`mailto:${profile.email}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-navy-900 text-white font-semibold text-sm sm:text-base hover:bg-accent-purple shadow-soft hover:shadow-soft-hover hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-accent-pink" />
                <span>{profile.email}</span>
                <Send className="w-4 h-4" />
              </a>

              {/* LinkedIn Button */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#F7F5FF] text-navy-900 font-semibold text-sm sm:text-base border border-navy-100 hover:border-accent-blue hover:bg-white hover:text-accent-blue shadow-sm hover:shadow-md hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Button */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#F7F5FF] text-navy-900 font-semibold text-sm sm:text-base border border-navy-100 hover:border-accent-purple hover:bg-white hover:text-accent-purple shadow-sm hover:shadow-md hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4 text-navy-900" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
