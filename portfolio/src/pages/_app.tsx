import Head from "next/head";
import "../styles/globals.scss";
// Components
import Header from "../components/layout/Header/Header";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import SitePreloader from "../components/Loaders/SitePreloader/SitePreloader";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Jesuseyitan</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <SitePreloader />
      <Header />

      <AnimateSharedLayout type="crossfade">
        <AnimatePresence exitBeforeEnter>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}

export default MyApp;
