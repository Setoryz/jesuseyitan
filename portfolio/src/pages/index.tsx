import Head from "next/head";
import Greeting from "../components/Greeting/Greeting";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jesuseyitan</title>
      </Head>

      <Greeting />
      <Skills />
      <Portfolio />
    </div>
  );
}
