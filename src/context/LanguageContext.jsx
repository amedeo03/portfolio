import React, { createContext, useContext, useEffect, useState } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('portfolio_lang');
    if (savedLang === 'en' || savedLang === 'it') return savedLang;
    const navLang = navigator.language || navigator.userLanguage;
    return navLang.startsWith('it') ? 'it' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'it' : 'en'));
  };

  // Extract nested translation key e.g., t('nav.home')
  const t = (path) => {
    const keys = path.split('.');
    let current = portfolioConfig.translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return path; // Fallback to path if missing
      }
    }
    return current;
  };

  // Helper for content objects like { en: "Text EN", it: "Text IT" }
  const getLocalized = (item) => {
    if (!item) return '';
    if (typeof item === 'string') return item;
    if (typeof item === 'object') {
      return item[language] || item['en'] || '';
    }
    return String(item);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, getLocalized }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
