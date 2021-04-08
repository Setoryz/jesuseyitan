import Head from "next/head";
import "../styles/globals.scss";
// Components
import Header from "../components/layout/Header/Header";
import { AppProps } from "next/dist/next-server/lib/router/router";
import ScrollButton from "../components/layout/ScrollButton/ScrollButton";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jesuseyitan</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ScrollButton />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
