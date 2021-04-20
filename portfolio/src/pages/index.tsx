import Head from "next/head";
import Greeting from "../components/Greeting/Greeting";
import RouteNav from "../components/layout/RouteNav/RouteNav";
import ScrollButton from "../components/layout/ScrollButton/ScrollButton";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jesuseyitan</title>
      </Head>

      <Greeting />
      <RouteNav nextLink={"/WhatIDo"} />
    </div>
  );
}
