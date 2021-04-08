import styles from "./PortfolioItem.module.scss";

const PortfolioItem = () => {
  return (
    <div className={styles.portfolio__item_container}>
      <div className={styles.portfolio__item}>
        <div className={styles.portfolio__item_details}>
          <img
            src="/assets/images/menu-banner-01.png"
            alt=""
            className={styles.portfolio__item_image}
          />
          <p className={styles.portfolio__item_category}>Item Details</p>
        </div>
        <div className={styles.portfolio__item_title}>
          <div className={styles.portfolio__item_seperator}></div>
          <h3>
            <a href="" className={styles.portfolio__item_title}>
              Item Title
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
