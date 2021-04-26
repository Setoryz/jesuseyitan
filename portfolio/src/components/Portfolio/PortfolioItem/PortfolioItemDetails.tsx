import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { PortfolioItemType } from "../../../constants/portfolio";
import styles from "./PortfolioItemDetails.module.scss";
import { variantsDetailsFadeIn } from "../../../constants/variants";

type Props = {
  portfolioItem: PortfolioItemType;
};
const PortfolioItemDetails = ({ portfolioItem }: Props) => {
  const router = useRouter();
  return (
    <div className={styles.details}>
      {/* Container */}
      <motion.div
        className={styles.details__container}
        layoutId={`portfolio-item-container${portfolioItem.slug}`}
      >
        {/* Header Section */}
        <div className={styles.details__image}>
          {/* Header Image */}
          <motion.img
            // ref={imageRef}
            src={"/assets/images/portfolio/" + portfolioItem.image}
            alt={portfolioItem.title}
            layoutId={`portfolio-image-${portfolioItem.slug}`}
            // onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Details / Descriptiono */}
        <div className={styles.details__info}>
          <a href={portfolioItem.project_url} target="_blank">
            <motion.h2 layoutId={`portfolio-item-title${portfolioItem.slug}`}>
              {portfolioItem.title}
            </motion.h2>
          </a>
          <div className={styles.description}>
            {portfolioItem.description.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {/* Skills */}
          <motion.div
            layoutId={`portfolio-item-stack${portfolioItem.slug}`}
            className={styles.technologies_used}
          >
            {portfolioItem.technologies_used.map((item, i) => (
              <span key={i}>{item}</span>
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
