import Head from "next/head";
import Greeting from "../components/Greeting/Greeting";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jesuseyitan</title>
      </Head>

      <Greeting />
    </div>
  );
}
