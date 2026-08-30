import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioConfig } from '../config/portfolio.config';
import { motion } from 'framer-motion';
import { Code2, Layers, Cloud, Cpu } from 'lucide-react';

export const Skills = () => {
  const { t, getLocalized } = useLanguage();
  const { competences } = portfolioConfig;

  // Icon mapping helper
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-violet-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-emerald-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            {t('sections.skillsTitle')}
          </h2>
        </div>

        {/* Compact Competences Grid (3 Categories: Languages, Frameworks, DevOps) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {competences.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl shadow-xl hover:border-cyan-500/40 transition-all flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-100">
                  {getLocalized(cat.category)}
                </h3>
              </div>

              {/* Small Skill Pills Grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skillName, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:scale-105 transition-all shadow-sm cursor-default"
                  >
                    {skillName}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
