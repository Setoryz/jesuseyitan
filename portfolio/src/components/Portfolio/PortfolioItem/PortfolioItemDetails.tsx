import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { PortfolioItemType } from "../../../constants/portfolio";
import styles from "./PortfolioItemDetails.module.scss";
import { variantsDetailsFadeIn } from "../../../constants/variants";
import { useRef, useState } from "react";
import ImagePreloader from "../../layout/Preloader/ImagePreloader";

type Props = {
  portfolioItem: PortfolioItemType;
};

const PortfolioItemDetails = ({ portfolioItem }: Props) => {
  const imageRef = useRef<null | HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.details}>
      {/* Container */}
      <motion.div
        className={styles.details__container}
        layoutId={`portfolio-item-container${portfolioItem.slug}`}
      >
        {/* Header Section */}
        <motion.div
          className={styles.details__image}
          layoutId={`portfolio-image-${portfolioItem.slug}`}
        >
          {/* Header Image */}
          {!imageLoaded && <ImagePreloader width={500} height={364} />}
          <img
            ref={imageRef}
            onLoad={() => setImageLoaded(true)}
            src={"/assets/images/portfolio/" + portfolioItem.image}
            alt={portfolioItem.title}
            style={imageLoaded ? { display: "inherit" } : { display: "none" }}
          />
        </motion.div>

        {/* Details / Descriptiono */}
        <div className={styles.details__info}>
          <a href={portfolioItem.project_url} target="_blank">
            <motion.h2 layoutId={`portfolio-item-title${portfolioItem.slug}`}>
              {portfolioItem.title}
            </motion.h2>
          </a>
          <motion.div
            variants={variantsDetailsFadeIn}
            initial="initial"
            animate="animate"
            exit="initial"
            className={styles.description}
          >
            {portfolioItem.description.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
          {/* Skills */}
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
      </motion.div>
      <motion.div
        variants={variantsDetailsFadeIn}
        initial="initial"
        animate="animate"
        exit="initial"
        className={styles.details__background}
        onClick={() => router.push("/Portfolio")}
      ></motion.div>
    </div>
  );
};

export default PortfolioItemDetails;
