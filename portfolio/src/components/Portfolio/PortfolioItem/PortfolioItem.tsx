import { useLayoutEffect, useRef, useState } from "react";
import styles from "./PortfolioItem.module.scss";
import { PortfolioItemType } from "../../../constants/portfolio";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  portfolioItem: PortfolioItemType;
};
const PortfolioItem = ({ portfolioItem }: Props) => {
  const imageRef = useRef(null as null | HTMLImageElement);

  return (
    <motion.div
      className={styles.portfolio__item_container}
      layoutId={`portfolio-item-container${portfolioItem.slug}`}
    >
      <div className={styles.portfolio__item}>
        <Link
          href={`/Portfolio/${portfolioItem.slug}`}
          // target="_blank"
        >
          <div className={styles.portfolio__item_image}>
            <div className={styles.portfolio__item_defaultwrap}>
              <motion.img
                ref={imageRef}
                src={"/assets/images/portfolio/" + portfolioItem.image}
                alt={portfolioItem.title}
                layoutId={`portfolio-image-${portfolioItem.slug}`}
                // onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className={styles.portfolio__item_overlay}>
              <div className={styles.overlay__ctabutton}></div>
              <h3>See Live</h3>
            </div>
          </div>
        </Link>

        <div className={styles.portfolio__item_details}>
          <a href={portfolioItem.project_url} target="_blank">
            <motion.h3 layoutId={`portfolio-item-title${portfolioItem.slug}`}>
              {portfolioItem.title}
            </motion.h3>
          </a>

          <motion.div
            layoutId={`portfolio-item-stack${portfolioItem.slug}`}
            className={styles.technologies_used}
          >
            {portfolioItem.technologies_used.map((item, i) => (
              <motion.span
                layoutId={`portfolio-item-stack${portfolioItem.slug}-${i}`}
                key={i}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
