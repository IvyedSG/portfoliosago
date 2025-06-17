export interface TranslationResources {
  common: {
    navigation: {
      home: string;
      about: string;
      projects: string;
      resume: string;
      contact: string;
      blog: string;
    };
    hero: {
      greeting: string;
      name: string;
      role: string;
      description: string;
      downloadCV: string;
      contactMe: string;
    };
    // Add more sections as needed
  };
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: TranslationResources;
  }
}