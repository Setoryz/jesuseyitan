import { motion } from "framer-motion";
import Head from "next/head";
import RouteNav from "../components/layout/RouteNav/RouteNav";
import Skills from "../components/Skills/Skills";
import { fade_in_out, variantsPage } from "../constants/variants";

const SkillsPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={variantsPage}
    >
      <Head>
        <title>What I do - Jesuseyitan</title>
      </Head>
      <Skills />
      <RouteNav prevLink={"/"} nextLink={"/Portfolio"} />
    </motion.div>
  );
};

export default SkillsPage;
