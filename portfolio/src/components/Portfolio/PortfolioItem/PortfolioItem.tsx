import { useLayoutEffect, useRef, useState } from "react";
import styles from "./PortfolioItem.module.scss";
import { PortfolioItemType } from "../../../constants/portfolio";

type Props = {
  portfolioItem: PortfolioItemType;
};
const PortfolioItem = ({ portfolioItem }: Props) => {
  const imageRef = useRef(null as null | HTMLImageElement);

  return (
    <div className={styles.portfolio__item_container}>
      <div className={styles.portfolio__item}>
        <a
          href={portfolioItem.project_url}
          target="_blank"
          className={styles.portfolio__item_image}
        >
          <div className={styles.portfolio__item_defaultwrap}>
            <img
              ref={imageRef}
              src={"/assets/images/portfolio/" + portfolioItem.image}
              alt={portfolioItem.title}
              // onLoad={() => setImageLoaded(true)}
            />
          </div>
          <div className={styles.portfolio__item_overlay}>
            <div className={styles.overlay__ctabutton}></div>
            <h3>See Live</h3>
          </div>
        </a>

        <div className={styles.portfolio__item_details}>
          <a href={portfolioItem.project_url} target="_blank">
            <h3>{portfolioItem.title}</h3>
          </a>
          <div className={styles.description}>
            {portfolioItem.description.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.technologies_used}>
            {portfolioItem.technologies_used.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;