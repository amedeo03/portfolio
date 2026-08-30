import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioConfig } from '../config/portfolio.config';
import { Code2 } from 'lucide-react';

export const Footer = () => {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800/80 light:border-slate-300/80 bg-slate-950 light:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-cyan-400" />
          <span className="font-bold text-slate-200 light:text-slate-800 text-sm">
            {portfolioConfig.personal.name} © {year}
          </span>
          <span className="text-slate-600 light:text-slate-400">•</span>
          <span className="text-xs text-slate-500 light:text-slate-500">
            {t('footer.rights')}
          </span>
        </div>

        {/* Build Tech Note */}
        <div className="text-xs text-slate-400 light:text-slate-600 flex items-center gap-1">
          <span>{t('footer.builtWith')}</span>
        </div>

        {/* Current Active Language Indicator */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 light:text-slate-500">
          <span>LANG:</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 light:bg-slate-200 text-cyan-400 font-bold">
            {language.toUpperCase()}
          </span>
        </div>

      </div>
    </footer>
  );
};
