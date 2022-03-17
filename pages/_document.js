import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA configuration */}
          <meta name='application-name' content='Rahul Sharma - Full Stack Developer' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Rahul Sharma - Full Stack Developer' />
          <meta name='description' content='Rahul Sharma - Full Stack Developer' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#252934' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#252934' />

          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/apple-touch-icon.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='apple-touch-icon' sizes='167x167' href='/apple-touch-icon.png' />

          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#252934' />
          <link rel='shortcut icon' href='/favicon.ico' />
          {/* <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' /> */}

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://rahulsharma.vercel.app/" />
          <meta property="twitter:title" content="Rahul Sharma - Full Stack Developer" />
          <meta property="twitter:description" content="Rahul Sharma's personal portfolio" />
          <meta property="twitter:image" content="https://res.cloudinary.com/rahulsharma/image/upload/v1627928959/logo_okieap.png" />
          <meta name='twitter:creator' content='@RahulSharma5430' />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rahulsharma.vercel.app/" />
          <meta property="og:title" content="Rahul Sharma - Full Stack Developer" />
          <meta property="og:description" content="Rahul Sharma's personal portfolio" />
          <meta property="og:image" content="https://res.cloudinary.com/rahulsharma/image/upload/v1627928959/logo_okieap.png" />
          <meta property='og:site_name' content='Rahul Sharma - Full Stack Developer' />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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