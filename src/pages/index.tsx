import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { i18n } from '../../next-i18next.config';

const useRedirect = (to?: string) => {
  const router = useRouter();
  to = to || router.asPath;

  useEffect(() => {
    const detectLanguage =
      window.navigator.language.substring(0, 2) ?? i18n.defaultLocale;
    if (to?.startsWith(`/${detectLanguage}`) && router.route === '/404') {
      router.replace('/' + detectLanguage + router.route);
      return;
    }

    router.replace(`/${detectLanguage}${to}`);
  });

  return <></>;
};

const Redirect = () => {
  useRedirect();
  return <></>;
};

export default Redirect;
