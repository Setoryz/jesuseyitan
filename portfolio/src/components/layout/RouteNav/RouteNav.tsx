import Link from "next/link";
import { CSSProperties } from "react";
import ScrollButton from "../ScrollButton/ScrollButton";
import styles from "./RouteNav.module.scss";

type Props = {
  // hasNext: { type: Boolean; default: false };
  nextLink?: string;
  prevLink?: string;
};

const RouteNav = ({ nextLink, prevLink }: Props) => {
  return (
    <div
      className={styles.routeNav}
      style={nextLink && prevLink ? doubleNavStyling : {}}
    >
      {prevLink && (
        <Link href={prevLink}>
          <div className={styles.routeNav__prev}>
            <ScrollButton />
          </div>
        </Link>
      )}
      {nextLink && (
        <Link href={nextLink}>
          <div className={styles.RouteNav__next}>
            <ScrollButton />
          </div>
        </Link>
      )}
    </div>
  );
};

export default RouteNav;

const doubleNavStyling: CSSProperties = {
  justifyContent: "space-between",
  paddingLeft: "3rem",
  paddingRight: "3rem",
};
