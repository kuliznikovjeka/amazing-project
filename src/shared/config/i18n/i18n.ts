import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { LOCAL_STORAGE_LANGUAGE_KEY } from 'widgets/LanguageSwitcher';

const fallbackLng = localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) || 'ru';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: fallbackLng,
    debug: __IS_DEV__ ? true : false,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;