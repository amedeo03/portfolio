import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioConfig } from '../config/portfolio.config';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative">
        
        {/* Centered Desktop Floating Navigation Bar */}
        <nav className="hidden md:flex items-center gap-6 glass-panel px-6 py-2.5 rounded-full border border-slate-800 shadow-2xl backdrop-blur-xl">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Integrated Language Switcher */}
          <div className="flex items-center pl-4 border-l border-slate-800">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 hover:border-cyan-500/50 border border-slate-800 transition-all cursor-pointer text-slate-200"
              title="Switch Language (EN / IT)"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className={language === 'en' ? 'text-cyan-400 font-bold' : 'opacity-60'}>
                EN
              </span>
              <span className="opacity-40">|</span>
              <span className={language === 'it' ? 'text-cyan-400 font-bold' : 'opacity-60'}>
                IT
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Header Controls */}
        <div className="flex items-center justify-between w-full md:hidden">
          <button
            onClick={toggleLanguage}
            className="px-3.5 py-1.5 rounded-full text-xs font-bold glass-panel text-cyan-400 cursor-pointer"
          >
            {language.toUpperCase()}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl glass-panel text-slate-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-slate-800 px-6 py-6 mt-3"
          >
            <ul className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-slate-200 hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
