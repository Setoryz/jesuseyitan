import PortfolioItem from "./PortfolioItem";
import styles from "./Portfolio.module.scss";
import { portfolio } from "../../constants/portfolio";

const Portfolio = () => {
  return (
    <>
      <div className={styles.portfolio}>
        <h3 className={styles.portfolio__heading}>What I've Done</h3>

        {/* Scrolling Portfolio */}
        <div className={styles.portfolio__list}>
          {portfolio.map((item, i) => (
            <PortfolioItem key={i} portfolioItem={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
