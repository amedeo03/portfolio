import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioConfig } from '../config/portfolio.config';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact = () => {
  const { t } = useLanguage();
  const { personal } = portfolioConfig;
  const [state, handleSubmit] = useForm('xbgrrgdl');

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            {t('sections.contactTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-100 mb-6">
                {t('contact.directContact')}
              </h3>

              {/* Email Card */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-cyan-500/40 transition-all">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email Address</div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-bold text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-cyan-500/40 transition-all">
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Base Location</div>
                  <div className="text-sm font-bold text-slate-200">
                    {personal.location}
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-cyan-500/40 transition-all">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Response Rate</div>
                  <div className="text-sm font-bold text-slate-200">
                    Within 24 Hours
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {t('contact.socialProfiles')}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 flex items-center justify-center gap-2 text-xs font-semibold hover:border-cyan-500/40 transition-all"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 flex items-center justify-center gap-2 text-xs font-semibold hover:border-cyan-500/40 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Formspree React Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl shadow-2xl">
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">
                  Message Delivered!
                </h3>
                <p className="text-slate-400 max-w-md text-sm">
                  {t('contact.successMessage')}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {t('contact.nameLabel')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder={t('contact.namePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-rose-400 mt-1" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {t('contact.emailLabel')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder={t('contact.emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-rose-400 mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-rose-400 mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {state.submitting ? (
                    <span>{t('contact.sendingButton')}</span>
                  ) : (
                    <>
                      <span>{t('contact.sendButton')}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
