import { motion } from "framer-motion";
import Head from "next/head";
import RouteNav from "../../components/layout/RouteNav/RouteNav";
import Portfolio from "../../components/Portfolio/Portfolio";
import { fade_in_out, variantsPage } from "../../constants/variants";

const PortfolioPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{
        y: 20,
        opacity: 0,
        transition: {
          // duration: 0.5,
          staggerChildren: 0,
          staggerDirection: 0,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
      }}
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
