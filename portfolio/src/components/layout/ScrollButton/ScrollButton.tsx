import styles from "./ScrollButton.module.scss";

const ScrollButton = () => {
  return (
    <div className={styles.scrollbutton__container}>
      {/* <span className={styles.scrollbutton}></span> */}
      <span className={styles.scrollbutton__main}></span>
      <span className={styles.scrollbutton__main_2}></span>
      <span className={styles.scrollbutton__main_3}></span>
    </div>
  );
};

export default ScrollButton;
