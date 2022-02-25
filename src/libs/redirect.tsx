import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { i18n } from 'next-i18next.config';

const detectLanguage = (): string => {
  return typeof window !== 'undefined'
    ? window.navigator.language.substring(0, 2) ?? i18n.defaultLocale
    : i18n.defaultLocale;
};

export const useRedirect = (to?: string) => {
  const router = useRouter();
  to = to || router.asPath;

  // language detection
  useEffect(() => {
    const detectedLanguage = detectLanguage();
    if (to?.startsWith('/' + detectedLanguage) && router.route === '/404') {
      // prevent endless loop
      router.replace('/' + detectedLanguage + router.route);
      return;
    }

    router.replace('/' + detectedLanguage + to);
  });

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to: string) => () => {
  useRedirect(to);
  return <></>;
};
