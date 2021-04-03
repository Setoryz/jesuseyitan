import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jesuseyitan</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
