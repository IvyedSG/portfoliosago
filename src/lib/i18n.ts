import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import esTranslation from '../locales/es/common.json';
import enTranslation from '../locales/en/common.json';

const resources = {
  es: {
    common: esTranslation,
  },
  en: {
    common: enTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Default language is Spanish
    fallbackLng: 'es', // Fallback to Spanish
    defaultNS: 'common',
    ns: ['common'],
    
    detection: {
      // Options for language detection
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    react: {
      useSuspense: false, // Disable suspense for SSR compatibility
    },
  });

export default i18n;