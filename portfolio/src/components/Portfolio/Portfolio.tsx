import PortfolioItem from "./PortfolioItem/PortfolioItem";
import styles from "./Portfolio.module.scss";
import { portfolio, PortfolioItemType } from "../../constants/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { variantsPageSection } from "../../constants/variants";
import PortfolioItemDetails from "./PortfolioItem/PortfolioItemDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const router = useRouter();
  const { portfolioItemSlug } = router.query;
  const [
    selectedPorfolioItem,
    setSelectedPortfolioItem,
  ] = useState<PortfolioItemType>();
  useEffect(() => {
    if (portfolioItemSlug) {
      setSelectedPortfolioItem(
        portfolio.find((item) => item.slug === portfolioItemSlug[0])
      );
    }
    return () => {
      setSelectedPortfolioItem(undefined);
    };
  }, [portfolioItemSlug]);
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
      <AnimatePresence>
        {selectedPorfolioItem && (
          <PortfolioItemDetails portfolioItem={selectedPorfolioItem} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
