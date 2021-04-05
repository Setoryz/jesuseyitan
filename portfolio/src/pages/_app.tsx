import Head from "next/head";
import "../styles/globals.scss";
// Components
import Header from "../components/layout/Header/Header";
import { AppProps } from "next/dist/next-server/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jesuseyitan</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
