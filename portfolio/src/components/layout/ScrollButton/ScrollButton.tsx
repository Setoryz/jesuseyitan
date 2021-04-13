import styles from "./ScrollButton.module.scss";

const ScrollButton = () => {
  return (
    <div>
      <div className={styles.scrollbutton__container}>
        <span className={styles.scrollbutton}></span>
      </div>
    </div>
  );
};

export default ScrollButton;
