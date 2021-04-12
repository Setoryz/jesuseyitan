import { useLayoutEffect, useRef, useState } from "react";
import styles from "./PortfolioItem.module.scss";

const PortfolioItem = () => {
  const [detailsWidth, setDetailsWidth] = useState<null | number>(null);
  const imageRef = useRef(null as null | HTMLImageElement);

  const ResizeDetails = () => {
    console.log("layout changed");
    if (imageRef.current) setDetailsWidth(imageRef.current.clientWidth);
  };
  useLayoutEffect(() => {
    ResizeDetails();
    window.addEventListener("resize", ResizeDetails);
    return () => {
      window.removeEventListener("resize", ResizeDetails);
    };
  }, []);

  return (
    <div className={styles.portfolio__item_container}>
      <div className={styles.portfolio__item}>
        <a href="" className={styles.portfolio__item_image}>
          <div className={styles.portfolio__item_defaultwrap}>
            <img ref={imageRef} src="/assets/images/watch-tv.png" alt="" />
          </div>
          <div className={styles.portfolio__item_overlay}>
            <div className={styles.overlay__ctabutton}></div>
            <h3>See Live</h3>
          </div>
        </a>

        <div
          className={styles.portfolio__item_details}
          style={{ maxWidth: detailsWidth ?? "100%" }}
        >
          <div className={styles.portfolio__item_seperator}></div>
          <a href="">
            <h3>Watch TV - User</h3>
          </a>
          <p className={styles.description}>
            The customer facing point of Watch TV app Technologies Used, React,
            Redux, AWS S3, Express,{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
