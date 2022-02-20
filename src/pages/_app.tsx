import { NextUIProvider } from '@nextui-org/react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

import { darkTheme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </RecoilRoot>
  );
}

export default MyApp;
