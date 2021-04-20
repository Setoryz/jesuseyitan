import { motion } from "framer-motion";
import Head from "next/head";
import RouteNav from "../components/layout/RouteNav/RouteNav";
import Portfolio from "../components/Portfolio/Portfolio";

const PortfolioPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Portfolio - Jesuseyitan</title>
      </Head>
      <Portfolio />
      <RouteNav prevLink={"/WhatIDo"} nextLink={"/Contact"} />
    </motion.div>
  );
};

export default PortfolioPage;
