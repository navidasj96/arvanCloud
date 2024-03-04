import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEn from "./langs/en.json";
import translationFa from "./langs/fa.json";
import { localStorageGetItem } from "../utils/storage-available";

// ----------------------------------------------------------------------

// const lng = localStorageGetItem("i18nextLng")

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: translationEn },
      fa: { translation: translationFa },
    },
    lng: "fa",
    fallbackLng: "fa",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
