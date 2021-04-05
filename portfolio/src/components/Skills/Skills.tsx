import DisplayLottie from "../../utils/DisplayLottie/DisplayLottie";
import styles from "./Skills.module.scss";
import codingPerson from "../../assets/lottie/codingPerson.lottie.json";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__main}>
        <div className={styles.skills__image}>
          <DisplayLottie animationData={codingPerson} />
        </div>

        <div className={styles.skills__text}>
          <h1 className={styles.skills__text_heading}>What I do</h1>

          <p className={styles.skills__text_subtitle}>
            FULL STACK DEVELOPER BUILDING HIGHLY SCALABLE APPLICATIONS
          </p>

          {/* TODO - Add Skills Icons */}
          <div className={styles.skills__text_list}>
            {SkillsTextList.map((skill, index) => (
              <p
                key={index + skill[0]}
                className={styles.skills__text_listitem}
              >
                ⚡ {skill}
              </p>
            ))}
          </div>
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
