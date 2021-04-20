import Head from "next/head";
import Greeting from "../components/Greeting/Greeting";
import ScrollButton from "../components/layout/ScrollButton/ScrollButton";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jesuseyitan</title>
      </Head>

      <Greeting />
      <ScrollButton nextLink={"/WhatIDo"} />
    </div>
  );
}
