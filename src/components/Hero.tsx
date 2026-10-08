import React from 'react';
import { content } from '../data/content';
import { FloatingShapes } from './FloatingShapes';
import { ArrowDownRight, Mail, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export const Hero: React.FC = () => {
  const { profile } = content;

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 3D Shapes Background */}
      <FloatingShapes />

      <div className="relative z-10 max-w-[1100px] w-full mx-auto text-center flex flex-col items-center">
        {/* Playful Morflax Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-white shadow-[0_4px_20px_rgba(124,92,255,0.08)] mb-6 sm:mb-8 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-navy-800 tracking-wide flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
            {profile.tagline}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-navy-900 leading-[1.1] mb-6 max-w-4xl">
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </h1>

        {/* Subtitle / Role */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-navy-700/90 mb-6 max-w-3xl">
          {profile.title}
        </p>

        {/* Short Intro excerpt */}
        <p className="text-base sm:text-lg text-navy-600/90 max-w-2xl leading-relaxed mb-10 font-normal">
          Building end-to-end Machine Learning, Computer Vision & Multimodal RAG systems with modern architectures.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          {/* View Projects */}
          <a
            href="#projects"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple bg-[length:200%_auto] hover:bg-right text-white font-semibold text-sm sm:text-base shadow-[0_12px_28px_rgba(124,92,255,0.35)] hover:shadow-[0_16px_36px_rgba(124,92,255,0.45)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
          >
            <span>View Projects</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-navy-900 font-semibold text-sm sm:text-base border border-navy-100 shadow-[0_6px_20px_rgba(20,18,58,0.06)] hover:shadow-[0_10px_25px_rgba(124,92,255,0.15)] hover:-translate-y-1 active:translate-y-0 hover:border-accent-purple/30 transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-accent-purple" />
            <span>Contact Me</span>
          </a>

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alwin Joseph GitHub profile"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white text-navy-800 font-semibold text-sm sm:text-base border border-navy-100 shadow-[0_6px_20px_rgba(20,18,58,0.06)] hover:shadow-[0_10px_25px_rgba(124,92,255,0.15)] hover:-translate-y-1 active:translate-y-0 hover:text-navy-900 hover:border-accent-purple/30 transition-all duration-300"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
