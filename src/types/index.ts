export interface I18nProps {
  _nextI18Next: {
    initialLocale: string;
    initialI18nStore: {
      [locale: string]: unknown;
    };
    userConfig: {
      i18n: unknown;
      default: unknown;
    };
  };
}
