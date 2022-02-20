import { NextUIProvider } from '@nextui-org/react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { darkTheme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </RecoilRoot>
  );
}

export default MyApp;
