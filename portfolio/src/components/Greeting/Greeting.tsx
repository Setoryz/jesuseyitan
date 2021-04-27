import emoji from "react-easy-emoji";
import styles from "./Greeting.module.scss";
import welcomePerson from "../../assets/lottie/welcomePerson.lottie.json";
import DisplayLottie from "../../utils/DisplayLottie/DisplayLottie";
import { fade_in_out, variantsPageSection } from "../../constants/variants";
import { motion } from "framer-motion";
import Link from "next/link";

const Greeting = () => {
  return (
    <>
      <div className={styles.greeting}>
        <div className={styles.greet__main}>
          <div className={styles.greeting__main}>
            <div className={styles.greeting__text_container}>
              <motion.h1
                variants={variantsPageSection}
                className={styles.greeting__text}
              >
                Hello, My name is <br /> Jesuseyitan{" "}
                <span className={styles.wave__emoji}>{emoji("👋🏾")}</span>
              </motion.h1>
              <motion.div
                className={styles.greeting__text_details}
                variants={variantsPageSection}
              >
                <p className={styles.greeting__text_p}>
                  I am a passionate Full Stack Software Developer 🚀 building
                  Web Applications with Reactjs / Next JS / Nodejs & ASP.NET
                  Core.
                </p>

                <Link href="/Contact">
                  <button>Contact Me</button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              variants={variantsPageSection}
              className={styles.greeting__image_container}
            >
              <DisplayLottie animationData={welcomePerson} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greeting;
