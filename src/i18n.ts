import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationFR from './locales/fr/translation.json';
import translationENG from './locales/en/translation.json';

//translations
const resources = {
  fr: {
    translation: translationFR
  },
  eng: {
    translation: translationENG
  }
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "eng",
    fallbackLng: "eng", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", 
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    // Return the key if translation is missing (for debugging)
    returnNull: false,
    returnEmptyString: false,
    returnObjects: true,
    // Don't show missing keys in production
    ...(process.env.NODE_ENV === 'development' && {
      missingKeyHandler: (
        lngs: readonly string[], 
        _ns: string, 
        key: string, 
        _fallbackValue: string, 
        _updateMissing: boolean, 
        _options: any
      ) => {
        console.warn(`Missing translation key: ${key} for language: ${lngs.join(', ')}`);
      }
    })
  });

export default i18n;
