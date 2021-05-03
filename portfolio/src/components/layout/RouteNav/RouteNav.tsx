import { motion } from "framer-motion";
import Link from "next/link";
import ScrollButton from "../ScrollButton/ScrollButton";
import styles from "./RouteNav.module.scss";

type Props = {
  nextLink?: string;
  prevLink?: string;
};

const RouteNav = ({ nextLink, prevLink }: Props) => {
  return (
    <div
      className={`${styles.routeNav} ${
        nextLink && prevLink ? styles.doubleNavStyling : {}
      }`}
    >
      {prevLink && (
        <motion.div layoutId="routeNav__prev">
          <Link href={prevLink}>
            <div className={styles.routeNav__prev}>
              <ScrollButton />
            </div>
          </Link>
        </motion.div>
      )}
      {nextLink && (
        <motion.div layoutId="routeNav__next">
          <Link href={nextLink}>
            <div className={styles.routeNav__next}>
              <ScrollButton />
            </div>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default RouteNav;
