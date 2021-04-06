import styles from "./SkillsIcons.module.scss";

const SkillsIcons = () => {
  return (
    <div>
      <div className={styles.skills__icon_container}>
        <ul className={styles.skills__icons}>
          {skillsIcons.map((skill, index) => (
            <li key={index + skill.skillName} className={styles.skills__icon}>
              <i className={skill.fontAwesomeClassname} />
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsIcons;

const skillsIcons: SkillsIcon[] = [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5",
  },
  {
    skillName: "sass",
    fontAwesomeClassname: "fab fa-sass",
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js",
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react",
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node",
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm",
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws",
  },
  {
    skillName: "firebase",
    fontAwesomeClassname: "fas fa-fire",
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python",
  },
];
type SkillsIcon = { skillName: string; fontAwesomeClassname: string };
