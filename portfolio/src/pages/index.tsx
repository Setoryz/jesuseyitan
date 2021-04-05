import Head from "next/head";
import Greeting from "../components/Greeting/Greeting";
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
    </div>
  );
}
