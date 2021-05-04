import Head from "next/head";
import "../styles/globals.scss";
// Components
import Header from "../components/layout/Header/Header";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import SitePreloader from "../components/Loaders/SitePreloader/SitePreloader";
import { useEffect } from "react";
import BackgroundAnim from "../components/layout/BackgroundAnim/BackgroundAnim";
import Router from "next/router";

function MyApp({ Component, pageProps, router }: AppProps) {
  // ** Fix for Styles immediately route change is started

  const routeChange = () => {
    // Temporary fix to avoid flash of unstyled content
    // during route transitions. Keep an eye on this
    // issue and remove this code when resolved:
    // https://github.com/vercel/next.js/issues/17464

    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  Router.events.on("routeChangeComplete", routeChange);
  Router.events.on("routeChangeStart", routeChange);

  // useEffect(() => {
  //   Array.from(
  //     document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')
  //   ).forEach((node) => {
  //     node.removeAttribute("data-n-p");
  //   });
  //   const mutationHandler = (mutations: any) => {
  //     mutations.forEach(({ target }: any) => {
  //       if (target.nodeName === "STYLE") {
  //         if (target.getAttribute("media") === "x") {
  //           target.removeAttribute("media");
  //         }
  //       }
  //     });
  //   };
  //   const observer = new MutationObserver(mutationHandler);
  //   observer.observe(document.head, {
  //     subtree: true,
  //     attributeFilter: ["media"],
  //   });
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>Jesuseyitan</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <SitePreloader />
      <BackgroundAnim />
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
