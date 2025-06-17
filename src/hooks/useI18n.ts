'use client';

import { useTranslation, UseTranslationOptions } from 'react-i18next';

export const useI18n = (ns: string = 'common', options?: UseTranslationOptions<string>) => {
  const { t, i18n } = useTranslation(ns, options);
  
  return {
    t,
    i18n,
    language: i18n.language,
    isSpanish: i18n.language === 'es',
    isEnglish: i18n.language === 'en',
    changeLanguage: i18n.changeLanguage,
  };
};