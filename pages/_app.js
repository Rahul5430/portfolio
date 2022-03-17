import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import theme from "../theme";
import * as gtag from '../lib/gtag'

const SiteHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content="Rahul Sharma - Full Stack Developer" />
    <meta name="description" content="Rahul Sharma - Portfolio" />
    <meta name="author" content="Rahul Sharma" />
    {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#252934" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://rahulsharma.vercel.app/" />
    <meta
      property="og:title"
      content="Rahul Sharma - Full Stack Developer"
    />
    <meta
      property="og:description"
      content="Rahul Sharma's personal portfolio"
    />
    <meta property="og:image" content="https://res.cloudinary.com/rahulsharma/image/upload/v1627928959/logo_okieap.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://rahulsharma.vercel.app/" />
    <meta
      property="twitter:title"
      content="Rahul Sharma - Full Stack Developer"
    />
    <meta
      property="twitter:description"
      content="Rahul Sharma's personal portfolio"
    />
    <meta property="twitter:image" content="https://res.cloudinary.com/rahulsharma/image/upload/v1627928959/logo_okieap.png" /> */}
    <script
      async
      defer
      src="https://scripts.simpleanalyticscdn.com/latest.js"
    />
    <noscript>
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript>
  </Head>
);

const PageWrapper = ({ children, title }) => (
  <div className="container">
    <SiteHead title={title} />
    <NavBar />
    <main className="main">{children}</main>
    <Footer/>
  </div>
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const pathToTitle = {
    "/": "Rahul Sharma - Full Stack Developer"
  };

  return (
    <ChakraProvider theme={theme}>
      <PageWrapper title={pathToTitle[router.pathname]}>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default MyApp
