import PortfolioItem from "./PortfolioItem/PortfolioItem";
import styles from "./Portfolio.module.scss";
import { portfolio, PortfolioItemType } from "../../constants/portfolio";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
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
          exit={{ opacity: 0, transition: { when: "beforeChildren" } }}
        >
          <AnimateSharedLayout type="crossfade">
            <div className={styles.portfolio__list}>
              {portfolio.map((item, i) => (
                <PortfolioItem
                  key={`${item.title} ${i}`}
                  portfolioItem={item}
                />
              ))}
            </div>
            <AnimatePresence>
              {selectedPorfolioItem && (
                <PortfolioItemDetails portfolioItem={selectedPorfolioItem} />
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
