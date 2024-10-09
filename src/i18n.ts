import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Use the backend plugin
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'de'], // Add supported languages here
    fallbackLng: 'en',
    lng: 'en', // Default language
    backend: {
      loadPath: '/src/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false,
    },
    // debug: true,
  });

export default i18n;
