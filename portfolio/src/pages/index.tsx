import { motion } from "framer-motion";
import Head from "next/head";
import Greeting from "../components/Greeting/Greeting";
import RouteNav from "../components/layout/RouteNav/RouteNav";
import { fade_in_out, variantsPage } from "../constants/variants";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={variantsPage}
    >
      <Head>
        <title>Hello - Jesuseyitan</title>
      </Head>

      <Greeting />
      <RouteNav nextLink={"/WhatIDo"} />
    </motion.div>
  );
}
