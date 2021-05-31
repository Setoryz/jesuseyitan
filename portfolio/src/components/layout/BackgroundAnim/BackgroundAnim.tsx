import styles from "./BackgroundAnim.module.scss";

const BackgroundAnim = () => {
  return (
    <div className={styles.backgroundAnim}>
      {[...Array(400)].map((element, index) => (
        <span key={index} className={styles.particle}></span>
      ))}
    </div>
  );
};

export default BackgroundAnim;
