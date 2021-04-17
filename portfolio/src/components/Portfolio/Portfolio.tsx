import PortfolioItem from "./PortfolioItem";
import styles from "./Portfolio.module.scss";
import { portfolio } from "../../constants/portfolio";

const Portfolio = () => {
  return (
    <>
      <div className={styles.portfolio}>
        <h2 className={styles.portfolio__heading}>What I've Done</h2>

        {/* Scrolling Portfolio */}
        <div className={styles.portfolio__list}>
          {portfolio.map((item, i) => (
            <PortfolioItem key={item.title} portfolioItem={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
