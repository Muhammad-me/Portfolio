import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import transEn from "./locale/en/translation.json";
import transRu from "./locale/ru/translation.json";
import transUz from "./locale/uz/translation.json";

const resources = {
  en: { translation: transEn },
  ru: { translation: transRu },
  uz: { translation: transUz },
};

const fallbackLng = "uz";
const availableLanguages = ["uz", "ru", "en"];

i18n.use(initReactI18next).init({
  resources,
  lng: ["en", "ru", "uz"],
  interpolation: { escapeValue: false },
  fallbackLng,

  detection: {
    checkWhitelist: true,
  },

  debug: false,

  whitelist: availableLanguages,
});
