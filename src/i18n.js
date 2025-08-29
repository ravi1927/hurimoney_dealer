
import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';

    // Import your translation files (e.g., JSON files)
    import en from './locales/en.json';
    import  fr from './locales/fr.json';
    import ar from './locales/ar.json';

    const resources = {
      en: { translation: en },
  fr: { translation: fr },
  ar: { translation: ar },
    };

    i18n
      .use(initReactI18next) // passes i18n instance to react-i18next
      .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language if translation not found
        interpolation: {
          escapeValue: false, // React already escapes values
        },
      });

    export default i18n;