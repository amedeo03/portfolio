import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioConfig } from '../config/portfolio.config';
import { motion } from 'framer-motion';
import { ExternalLink, Lock, X } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects = () => {
  const { t, getLocalized } = useLanguage();
  const { projects } = portfolioConfig;
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  return (
    <>
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
              className="glass-panel rounded-2xl overflow-hidden shadow-2xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col group cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => openProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openProject(project);
                }
              }}
              aria-label={`${project.title}: ${t('projects.openDetails')}`}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/45" />
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
                        onClick={(event) => event.stopPropagation()}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 font-semibold text-xs border border-cyan-500/30 transition-all"
                      >
                        <span>{t('projects.viewDemo')}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-slate-100 hover:border-slate-600 transition-colors"
                        title={t('projects.viewGithub')}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-400 bg-slate-900/60 border border-slate-800"
                        title={t('projects.privateRepo')}
                      >
                        <Lock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{t('projects.privateRepo')}</span>
                      </span>
                    )}
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="presentation"
          onClick={closeProject}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
            className="glass-panel relative z-10 max-h-[calc(100vh-2rem)] w-full max-w-4xl overflow-y-auto rounded-2xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[2/1] min-h-48 overflow-hidden sm:aspect-[2.4/1]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <button
                type="button"
                onClick={closeProject}
                className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-slate-200 transition-colors hover:bg-black/85 hover:text-white"
                aria-label={t('projects.closeDetails')}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h2 id="project-detail-title" className="mb-4 text-2xl font-bold text-slate-100 sm:text-3xl">
                {selectedProject.title}
              </h2>
              <p className="mb-6 text-sm leading-7 text-slate-300 sm:text-base">
                {getLocalized(selectedProject.description)}
              </p>

              <div className="flex flex-wrap gap-1.5 border-t border-slate-800/60 pt-5">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
};
