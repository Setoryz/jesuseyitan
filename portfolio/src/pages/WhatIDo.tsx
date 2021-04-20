import { motion } from "framer-motion";
import Head from "next/head";
import RouteNav from "../components/layout/RouteNav/RouteNav";
import Skills from "../components/Skills/Skills";

const SkillsPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>What I do - Jesuseyitan</title>
      </Head>
      <Skills />
      <RouteNav prevLink={"/"} nextLink={"/Portfolio"} />
    </motion.div>
  );
};

export default SkillsPage;
