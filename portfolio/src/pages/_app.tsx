import Head from "next/head";
import "../styles/globals.scss";
// Components
import Header from "../components/layout/Header/Header";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Jesuseyitan</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
