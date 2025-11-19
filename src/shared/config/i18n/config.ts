import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((lng: string) =>
      import(`./resources/${lng}/translations.json`).then(m => m.default)
    )
  )
  .init({
    fallbackLng: 'ru',
    interpolation: { escapeValue: false },
    detection: {
      // порядок определения языка
      order: ['localStorage', 'navigator', 'htmlTag', 'cookie', 'querystring'],
      // ключ для хранения выбора языка пользователем
      lookupLocalStorage: 'i18nextLng',
      // кеш для выбранного языка
      caches: ['localStorage'],
    },
  });

export default i18n;
