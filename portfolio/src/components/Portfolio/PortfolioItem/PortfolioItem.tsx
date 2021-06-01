import { useEffect, useRef, useState } from "react";
import styles from "./PortfolioItem.module.scss";
import { PortfolioItemType } from "../../../constants/portfolio";
import Link from "next/link";
import { motion } from "framer-motion";
import ImagePreloader from "../../layout/Preloader/ImagePreloader";

type Props = {
  portfolioItem: PortfolioItemType;
};
const PortfolioItem = ({ portfolioItem }: Props) => {
  const imageRef = useRef(null as null | HTMLImageElement);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageRef?.current?.complete) setImageLoaded(true);
  }, []);

  return (
    <motion.div
      className={styles.portfolio__item_container}
      layoutId={`portfolio-item-container${portfolioItem.slug}`}
      key={`${portfolioItem.title}`}
      exit={{ opacity: 0, transition: { when: "beforeChildren" } }}
    >
      <div className={styles.portfolio__item}>
        <Link
          href={`/Portfolio/${portfolioItem.slug}`}
          // target="_blank"
        >
          <div className={styles.portfolio__item_image}>
            <motion.div
              className={styles.portfolio__item_defaultwrap}
              layoutId={`portfolio-image-${portfolioItem.slug}`}
              exit={{ opacity: 0 }}
            >
              {!imageLoaded && <ImagePreloader width={500} height={364} />}
              <img
                ref={imageRef}
                onLoad={() => setImageLoaded(true)}
                src={"/assets/images/portfolio/" + portfolioItem.image}
                alt={portfolioItem.title}
                style={
                  imageLoaded ? { display: "inherit" } : { display: "none" }
                }
              />
            </motion.div>
            <div className={styles.portfolio__item_overlay}>
              <div className={styles.overlay__ctabutton}>
                <i className={"fas fa-expand-alt"} />
              </div>
              <h3>Read More</h3>
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
