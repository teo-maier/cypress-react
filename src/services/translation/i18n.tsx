import i18next from "i18next";

import { initReactI18next } from "react-i18next";
import translationEN from "../../locales/en/translation.json";
import translationRO from "../../locales/ro/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },

  ro: {
    translation: translationRO,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
