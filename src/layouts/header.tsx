import type { FC } from 'react';
import Head from 'next/head';
import { capitalize } from 'lodash';

export interface HeaderProps {
  title?: string;
  description?: string;
  url?: string;
}

const Header: FC<HeaderProps> = ({ title, description, url }) => {
  let pageTitle = title ? `${capitalize(title)} | ` : '';
  pageTitle += 'DevToysPWA';

  const pageDesctiption = description ? description : 'DevToysPWA';
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} key="title" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:description" content={pageDesctiption} />
      <meta name="description" content={pageDesctiption} />
      <meta
        name="viewport"
        key="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=2.0"
      />
    </Head>
  );
};

export default Header;
