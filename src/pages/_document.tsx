import Document, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

import { i18n } from 'next-i18next.config';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }

  render() {
    const currentLocale =
      (this.props.__NEXT_DATA__.query.locale as string) || i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
            rel="stylesheet"
          />
          {CssBaseline.flush()}
          <script
            async
            src="https://cdn.jsdelivr.net/npm/pwacompat"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
