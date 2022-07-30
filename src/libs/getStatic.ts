import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticPropsContext } from 'next';

import { i18n } from 'next-i18next.config';

export const getI18nPaths = () => {
  return i18n.locales.map((locale) => ({
    params: {
      locale,
    },
  }));
};

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export async function getI18nProps(
  ctx: GetStaticPropsContext,
  ns = ['common']
) {
  const locale = ctx?.params?.locale;
  let props = {
    ...(await serverSideTranslations(locale as string, ns)),
  };
  return props;
}

export function makeStaticProps(ns?: string[]) {
  return async function getStaticProps(ctx: GetStaticPropsContext) {
    return {
      props: await getI18nProps(ctx, ns),
    };
  };
}
