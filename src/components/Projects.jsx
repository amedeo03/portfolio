import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioConfig } from '../config/portfolio.config';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects = () => {
  const { t, getLocalized } = useLanguage();
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            {t('sections.projectsTitle')}
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel rounded-2xl overflow-hidden shadow-2xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {getLocalized(project.description)}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-slate-800/60">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 font-semibold text-xs border border-cyan-500/30 transition-all"
                      >
                        <span>{t('projects.viewDemo')}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-slate-100 hover:border-slate-600 transition-colors"
                        title={t('projects.viewGithub')}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
