import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioConfig } from '../config/portfolio.config';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero = () => {
  const { t, getLocalized } = useLanguage();
  const { personal } = portfolioConfig;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 light:bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-violet-500/10 light:bg-violet-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 light:text-slate-900 leading-[1.1] mb-4">
              {t('hero.greeting')}{' '}
              <span className="text-gradient block sm:inline">{personal.name}</span>
            </h1>

            {/* Subtitle / Role */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 light:text-slate-700 mb-6 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-violet-400 light:text-violet-600" />
              <span>{getLocalized(personal.title)}</span>
            </h2>

            {/* Bio Paragraph */}
            <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {getLocalized(personal.bio)}
            </p>

            {/* CTAs & Resume Download */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>{t('hero.ctaProjects')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-slate-200 light:text-slate-800 font-semibold hover:border-violet-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>{t('hero.ctaContact')}</span>
              </a>

              {personal.resumeUrl && (
                <a
                  href={getLocalized(personal.resumeUrl)}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl glass-panel text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900 transition-colors"
                  title="Download Resume PDF"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('hero.ctaResume')}</span>
                </a>
              )}
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 light:border-slate-300/80 w-full">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500 light:text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.email}
                  className="p-2.5 rounded-lg glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Card / Visual Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Interactive Code Mockup Box */}
            <div className="rounded-2xl glass-panel p-6 border-slate-800/80 light:border-slate-300 shadow-2xl relative group overflow-hidden">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-500 light:text-slate-400">developer_dto.rs</span>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300 light:text-slate-800">
                <div>
                  <span className="text-red-400 light:text-red-600">let</span>{' '}
                  <span className="text-white-400 light:text-white-600">amedeo</span>
                  <span className="text-gray-400 light:text-gray-600">: Engineer = </span>
                  <span className="text-green-400 light:text-green-600">Engineer</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400 light:text-slate-500">name:</span>{' '}
                  <span className="text-emerald-400 light:text-emerald-600">"{personal.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400 light:text-slate-500">location:</span>{' '}
                  <span className="text-emerald-400 light:text-emerald-600">"{personal.location}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400 light:text-slate-500">passions:</span> [
                  <span className="text-amber-400 light:text-amber-600">"System Design"</span>,{' '}
                  <span className="text-amber-400 light:text-amber-600">"Programming"</span>,{' '}
                  <span className="text-amber-400 light:text-amber-600">"Guitar"</span>],
                </div>
                <div>&#125;;</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
