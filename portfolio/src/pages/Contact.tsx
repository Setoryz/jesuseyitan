import { motion } from "framer-motion";
import Head from "next/head";
import Contact from "../components/Contact/Contact";
import RouteNav from "../components/layout/RouteNav/RouteNav";

const ContactPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
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
