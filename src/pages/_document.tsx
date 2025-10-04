import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import Script from 'next/script';

interface MyDocumentProps extends DocumentInitialProps {
  nonce: string;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps & { nonce: string }> {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = ctx.req?.headers['x-nonce']?.toString() || '';

    return { ...initialProps, nonce };
  }

  render() {
    const locale = this.props.__NEXT_DATA__.locale || 'en';
    // const { nonce } = this.props as { nonce: string };
    const jsonLd = {
      '@context': 'http://schema.org',
      '@type': 'Organization',
      name: 'DEEPROOTS',
      url: 'https://www.deeproots.earth',
      logo: 'https://www.deeproots.earth/landing/logo.png',
      sameAs: [
        'https://twitter.com/DeepRoots_earth',
        'https://www.youtube.com/@DeepRoots',
        'https://t.me/DeepRootsCommunity',
        'https://reddit.com/r/DeepRoots',
        'https://discord.gg/DeepRoots',
        'https://www.tiktok.com/@DeepRoots',
      ],
    };

    return (
      <Html
        lang={locale}
        data-theme="dark"
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <script nonce={nonce} type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script> */}
          <Script
            id="json-ld"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify(jsonLd)}
          </Script>
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
