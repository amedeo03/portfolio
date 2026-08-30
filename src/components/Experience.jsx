import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioConfig } from '../config/portfolio.config';
import { motion } from 'framer-motion';
import {
  Briefcase, GraduationCap, Code2, Award, Rocket, Star,
  Calendar, MapPin, ChevronRight, Cpu, Globe, FlaskConical
} from 'lucide-react';

// Maps badge.icon string → Lucide component
const ICON_MAP = {
  Briefcase, GraduationCap, Code2, Award, Rocket, Star, Cpu, Globe, FlaskConical
};

// Maps badge.color string → Tailwind classes (bg, text, border, ring, hover)
const COLOR_MAP = {
  cyan:    { bg: 'bg-cyan-500/10',    text: 'text-cyan-400',    border: 'border-cyan-500/20',    ring: 'bg-cyan-500',    hover: 'hover:text-cyan-400',    calIcon: 'text-cyan-400'    },
  violet:  { bg: 'bg-violet-500/10',  text: 'text-violet-400',  border: 'border-violet-500/20',  ring: 'bg-violet-500',  hover: 'hover:text-violet-400',  calIcon: 'text-violet-400'  },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', ring: 'bg-emerald-500', hover: 'hover:text-emerald-400', calIcon: 'text-emerald-400' },
  amber:   { bg: 'bg-amber-500/10',   text: 'text-amber-400',   border: 'border-amber-500/20',   ring: 'bg-amber-500',   hover: 'hover:text-amber-400',   calIcon: 'text-amber-400'   },
  rose:    { bg: 'bg-rose-500/10',    text: 'text-rose-400',    border: 'border-rose-500/20',    ring: 'bg-rose-500',    hover: 'hover:text-rose-400',    calIcon: 'text-rose-400'    },
  sky:     { bg: 'bg-sky-500/10',     text: 'text-sky-400',     border: 'border-sky-500/20',     ring: 'bg-sky-500',     hover: 'hover:text-sky-400',     calIcon: 'text-sky-400'     },
};

export const Experience = () => {
  const { t, getLocalized } = useLanguage();
  const { timeline } = portfolioConfig;

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            {t('sections.experienceTitle')}
          </h2>
        </div>

        {/* Unified Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {timeline.map((entry, index) => {
            const colors = COLOR_MAP[entry.badge.color] ?? COLOR_MAP.cyan;
            const BadgeIcon = ICON_MAP[entry.badge.icon] ?? Briefcase;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 md:pl-10"
              >
                {/* Timeline Node Dot */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ${colors.ring} ring-4 ring-slate-950 flex items-center justify-center`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                </div>

                {/* Card */}
                <div className={`glass-panel p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-xl group hover:border-opacity-40 hover:border-${entry.badge.color}-500/40`}>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
                    <div>
                      {/* Customizable Badge */}
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${colors.bg} ${colors.text} ${colors.border} border mb-2`}>
                        <BadgeIcon className="w-3 h-3" />
                        {getLocalized(entry.badge.label)}
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl sm:text-2xl font-bold text-slate-100 transition-colors ${colors.hover}`}>
                        {getLocalized(entry.title)}
                      </h3>

                      {/* Subtitle + Location */}
                      {(entry.subtitle || entry.location) && (
                        <div className={`flex flex-wrap items-center gap-3 text-sm font-semibold mt-1 ${colors.text}`}>
                          {entry.subtitle && <span>{entry.subtitle}</span>}
                          {entry.subtitle && entry.location && <span className="text-slate-600">•</span>}
                          {entry.location && (
                            <span className="text-slate-400 flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {entry.location}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Period Badge */}
                    {entry.period && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 w-fit shrink-0">
                        <Calendar className={`w-3.5 h-3.5 ${colors.calIcon}`} />
                        <span>{getLocalized(entry.period)}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {entry.description && (
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {getLocalized(entry.description)}
                    </p>
                  )}

                  {/* Achievements List */}
                  {entry.achievements && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        {t('experience.keyAchievements')}
                      </h4>
                      <ul className="space-y-2">
                        {getLocalized(entry.achievements).map((item, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <ChevronRight className={`w-4 h-4 ${colors.text} shrink-0 mt-0.5`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  {entry.techStack && entry.techStack.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800">
                      {entry.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 ${colors.text} ${colors.border} border`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
