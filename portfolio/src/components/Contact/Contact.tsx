import { motion } from "framer-motion";
import { variantsPageSection } from "../../constants/variants";
import styles from "./Contact.module.scss";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <motion.h1
        variants={variantsPageSection}
        className={styles.contact__heading}
      >
        Contact Me
      </motion.h1>

      <motion.div
        variants={variantsPageSection}
        className={styles.contact__main}
      >
        <div className={styles.contact__details}>
          <h3>Get In Touch</h3>
          <div className={styles.detail}>
            <span className={styles.detail__title}>Email:</span>
            <a href="mailto:odukoyajesuseyitan@gmail.com">
              odukoyajesuseyitan@gmail.com
            </a>
          </div>
          <div className={styles.detail}>
            <span className={styles.detail__title}>Phone:</span>
            <a href="tel:+2347042872201">+234 704 2872 201</a>
          </div>
          <div className={styles.detail}>
            <span className={styles.detail__title}>Web:</span>
            <a href="https://www.jesuseyitan.com">www.jesuseyitan.com</a>
          </div>
        </div>

        <motion.div variants={variantsPageSection}>
          <ContactForm />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
