import { useLayoutEffect, useRef, useState } from "react";
import styles from "./PortfolioItem.module.scss";
import { PortfolioItemType } from "../../constants/portfolio";

type Props = {
  portfolioItem: PortfolioItemType;
};
const PortfolioItem = ({ portfolioItem }: Props) => {
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
        <a
          href={portfolioItem.project_url}
          target="_blank"
          className={styles.portfolio__item_image}
        >
          <div className={styles.portfolio__item_defaultwrap}>
            <img
              ref={imageRef}
              src={"/assets/images/portfolio/" + portfolioItem.image}
              alt=""
            />
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
          <a href={portfolioItem.project_url} target="_blank">
            <h3>{portfolioItem.title}</h3>
          </a>
          <p className={styles.description}>{portfolioItem.description}</p>
          <div className={styles.technologies_used}>
            {portfolioItem.technologies_used.map((item, i) => (
              <>
                <span key={i}>{item}</span>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
