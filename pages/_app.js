import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import NavBar from '../components/NavBar';
import theme from "../theme";

const SiteHead = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
);

const PageWrapper = ({ children, title }) => (
  <div className="container">
    <SiteHead title={title} />
    <NavBar />
    <main className="main">{children}</main>
  </div>
);

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  const pathToTitle = {
    "/": "Rahul Sharma - Full Stack Developer"
  };

  return (
    <ChakraProvider theme={theme}>
      <PageWrapper title={pathToTitle[pathname]}>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default MyApp
