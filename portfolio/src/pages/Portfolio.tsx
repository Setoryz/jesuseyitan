import { motion } from "framer-motion";
import Head from "next/head";
import RouteNav from "../components/layout/RouteNav/RouteNav";
import Portfolio from "../components/Portfolio/Portfolio";
import { fade_in_out, variantsPage } from "../constants/variants";

const PortfolioPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={variantsPage}
    >
      <Head>
        <title>Portfolio - Jesuseyitan</title>
      </Head>
      <Portfolio />
      <RouteNav prevLink={"/WhatIDo"} nextLink={"/Contact"} />
    </motion.div>
  );
};

export default PortfolioPage;
