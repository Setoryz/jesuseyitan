import DisplayLottie from "../../utils/DisplayLottie/DisplayLottie";
import styles from "./Skills.module.scss";
import codingPerson from "../../assets/lottie/codingPerson.lottie.json";
import SkillsIcons from "./SkillsIcons";
import { motion } from "framer-motion";
import { variantsPageSection } from "../../constants/variants";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__main}>
        <motion.div
          variants={variantsPageSection}
          className={styles.skills__image}
        >
          <DisplayLottie animationData={codingPerson} />
        </motion.div>

        <div className={styles.skills__text}>
          <motion.h1
            variants={variantsPageSection}
            className={styles.skills__text_heading}
          >
            What I do
          </motion.h1>

          <motion.p
            variants={variantsPageSection}
            className={styles.skills__text_subtitle}
          >
            FULL STACK DEVELOPER BUILDING HIGHLY SCALABLE APPLICATIONS
          </motion.p>

          <motion.div variants={variantsPageSection}>
            <SkillsIcons />
          </motion.div>

          <motion.div
            variants={variantsPageSection}
            className={styles.skills__text_list}
          >
            {SkillsTextList.map((skill, index) => (
              <p
                key={index + skill[0]}
                className={styles.skills__text_listitem}
              >
                ⚡ {skill}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

const SkillsTextList = [
  "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
  "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
  "Integration of third party services such as Firebase/ AWS",
  "Setting up of Github CI and CD Pipelines",
];
