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
    {/* <noscript>
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript> */}
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
