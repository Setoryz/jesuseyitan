import PortfolioItem from "./PortfolioItem";
import styles from "./Portfolio.module.scss";
import { portfolio } from "../../constants/portfolio";
import { motion } from "framer-motion";
import { variantsPageSection } from "../../constants/variants";

const Portfolio = () => {
  return (
    <>
      <div className={styles.portfolio}>
        <motion.h2
          variants={variantsPageSection}
          className={styles.portfolio__heading}
        >
          What I've Done
        </motion.h2>

        {/* Scrolling Portfolio */}
        <motion.div
          variants={variantsPageSection}
          className={styles.portfolio__list__wrapper}
        >
          <div className={styles.portfolio__list}>
            {/* TODO: Fix Scrolling on large screens */}
            {portfolio.map((item, i) => (
              <PortfolioItem key={`${item.title} ${i}`} portfolioItem={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
