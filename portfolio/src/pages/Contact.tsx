import { motion } from "framer-motion";
import Head from "next/head";
import Contact from "../components/Contact/Contact";
import RouteNav from "../components/layout/RouteNav/RouteNav";
import { fade_in_out, variantsPage } from "../constants/variants";

const ContactPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={variantsPage}
    >
      <Head>
        <title>Contact - Jesuseyitan</title>
      </Head>
      <Contact />
      <RouteNav prevLink={"/Portfolio"} />
    </motion.div>
  );
};

export default ContactPage;
