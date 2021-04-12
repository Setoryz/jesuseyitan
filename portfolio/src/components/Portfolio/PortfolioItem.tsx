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
        <a
          href={portfolioItem.project_url}
          target="_blank"
          className={styles.portfolio__item_image}
        >
          <div className={styles.portfolio__item_defaultwrap}>
            <img
              ref={imageRef}
              src={"/assets/images/" + portfolioItem.image}
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
          <p className={styles.technologies_used}>
            {portfolioItem.technologies_used.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;

const portfolioItem = {
  title: "Watch TV - User",
  description: `The customer facing point of Watch TV app built using react. It authenticate users and allows them to browse through a catalog of movies. Users can add movies to watchlist and go to the movie page to see more details, watch the trailer or watch the movie`,
  technologies_used: ["React", "Redux", "AWS S3", "Express"],
  image: "watch-tv.png",
  project_url: "https://watch-tv.jesuseyitan.com",
};
