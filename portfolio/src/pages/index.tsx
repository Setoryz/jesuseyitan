import { motion } from "framer-motion";
import Head from "next/head";
import Greeting from "../components/Greeting/Greeting";
import RouteNav from "../components/layout/RouteNav/RouteNav";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Hello - Jesuseyitan</title>
      </Head>

      <Greeting />
      <RouteNav nextLink={"/WhatIDo"} />
    </motion.div>
  );
}
