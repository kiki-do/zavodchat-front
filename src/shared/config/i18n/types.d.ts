// import the original type declarations
import 'i18next';

// import all namespaces (for the default language, only)
import translations from '@/shared/config/i18n/resourses/ru/translations.json';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'translations';
    // custom resources type
    resources: {
      translations: typeof translations;
    };
    // other
  }
}
