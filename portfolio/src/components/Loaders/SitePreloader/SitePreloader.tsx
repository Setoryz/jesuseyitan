import { motion } from "framer-motion";
import styles from "./SitePreloader.module.scss";
import {
  preloader_container,
  preloader_splashBox,
} from "../../../constants/variants";

const SitePreloader = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={preloader_container}
      className={styles.sitePreloader}
    >
      <motion.div
        variants={preloader_splashBox}
        className={styles.blackbg}
      ></motion.div>

      <div>Someting</div>
    </motion.div>
  );
};

export default SitePreloader;
