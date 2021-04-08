import PortfolioItem from "./PortfolioItem";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <>
      <div className={styles.portfolio}>
        <h3 className={styles.portfolio__heading}>What I've Done</h3>

        {/* Scrolling Portfolio */}
        <div className={styles.portfolio__list}>
          {[1, 2, 3].map((i) => (
            <PortfolioItem />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
