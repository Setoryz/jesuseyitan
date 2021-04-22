import Head from "next/head";
import "../styles/globals.scss";
// Components
import Header from "../components/layout/Header/Header";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import SitePreloader from "../components/Loaders/SitePreloader/SitePreloader";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  // ** Fix for Styles immediately route change is started
  useEffect(() => {
    Array.from(
      document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')
    ).forEach((node) => {
      node.removeAttribute("data-n-p");
    });
    const mutationHandler = (mutations: any) => {
      mutations.forEach(({ target }: any) => {
        if (target.nodeName === "STYLE") {
          if (target.getAttribute("media") === "x") {
            target.removeAttribute("media");
          }
        }
      });
    };
    const observer = new MutationObserver(mutationHandler);
    observer.observe(document.head, {
      subtree: true,
      attributeFilter: ["media"],
    });
    return () => {
      observer.disconnect();
    };
  }, []);

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
