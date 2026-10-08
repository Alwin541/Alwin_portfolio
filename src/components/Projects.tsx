import React from 'react';
import { content } from '../data/content';
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export const Projects: React.FC = () => {
  const { featuredProjects, moreProjects, profile } = content;

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-purple/10 text-accent-purple text-xs sm:text-sm font-semibold mb-3">
            <FolderGit2 className="w-4 h-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Projects & Systems
          </h2>
          <p className="mt-3 text-navy-600 text-sm sm:text-base max-w-lg">
            Practical implementations across multimodal AI, computer vision, and predictive modeling.
          </p>
        </div>

        {/* 3 Featured Large Cards */}
        <div className="space-y-8 sm:space-y-10 mb-16 sm:mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-3xl sm:rounded-[32px] bg-white border border-white/80 p-7 sm:p-10 md:p-12 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-hover flex flex-col justify-between"
            >
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-accent-purple/5 via-accent-blue/5 to-transparent rounded-tr-[32px] pointer-events-none" />

              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-accent-purple/10 text-accent-purple">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured #{index + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-navy-50 text-navy-700">
                      {project.category}
                    </span>
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full bg-navy-900 text-white hover:bg-accent-purple transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-navy-900 text-2xl sm:text-3xl mb-4 group-hover:text-accent-purple transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-navy-700 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              {project.tags && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-navy-50">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-[#F7F5FF] text-navy-800 border border-navy-100/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More Projects Section */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Archive</span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-navy-900">
                More Projects
              </h3>
            </div>

            {/* Link to all GitHub repositories */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-purple hover:text-navy-900 transition-colors group/link"
            >
              <span>Explore all on GitHub</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreProjects.map((project) => (
              <div
                key={project.title}
                className="group rounded-3xl bg-white border border-white/80 p-6 sm:p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-hover flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-semibold text-accent-blue uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h4 className="font-heading font-bold text-navy-900 text-lg mb-3 group-hover:text-accent-purple transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-navy-600 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                {project.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-navy-50">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#F7F5FF] text-navy-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
