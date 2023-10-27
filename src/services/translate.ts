import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// The translations
// (tip move them in a JSON file and import them)

import fr from "../locales/fr.json";
import en from "../locales/en.json";
import pt from "../locales/pt.json";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: fr,
    },
    en: {
      translation: en,
    },
    pt: {
      translation: pt,
    },
    // Add more languages here
  },
  lng: "fr", // Default language
  fallbackLng: "en", // Fallback language if the translation is missing
  interpolation: {
    escapeValue: false, // React already escapes the output
  },
});

export default i18n;
