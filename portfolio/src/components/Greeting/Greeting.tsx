import emoji from "react-easy-emoji";
import styles from "./Greeting.module.scss";
import welcomePerson from "../../assets/lottie/welcomePerson.lottie.json";
import DisplayLottie from "../../utils/DisplayLottie/DisplayLottie";
import { fade_in_out, variantsPageSection } from "../../constants/variants";
import { motion } from "framer-motion";

const Greeting = () => {
  return (
    <>
      <div className={styles.greeting}>
        <div className={styles.greet__main}>
          <div className={styles.greeting__main}>
            <motion.div
              variants={variantsPageSection}
              className={styles.greeting__text_container}
            >
              <h1 className={styles.greeting__text}>
                Hello, My name is <br /> Jesuseyitan{" "}
                <span className={styles.wave__emoji}>{emoji("👋🏾")}</span>
              </h1>
              <p className={styles.greeting__text_p}>
                I am a passionate Full Stack Software Developer 🚀 building Web
                Applications with Reactjs / Next JS / Nodejs / ASP.NET Core and
                some other cool libraries and frameworks.
              </p>
            </motion.div>
            {/* TODO - Add call to action Button: e.g Contact Me */}
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
