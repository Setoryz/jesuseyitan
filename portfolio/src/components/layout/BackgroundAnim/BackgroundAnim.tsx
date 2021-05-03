import styles from "./BackgroundAnim.module.scss";

const BackgroundAnim = () => {
  return (
    <div className={styles.backgroundAnim}>
      {/* <svg version='1.1' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <filter id='goo'>
      <fegaussianblur in='SourceGraphic' result='blur' stddeviation='10'></fegaussianblur>
      <fecolormatrix in='blur' mode='matrix' result='goo' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'></fecolormatrix>
      <feblend in2='goo' in='SourceGraphic'></feblend>
    </filter>
  </defs>
</svg> */}

      {[...Array(200)].map((element, index) => (
        <span key={index} className={styles.particle}></span>
      ))}
    </div>
  );
};

export default BackgroundAnim;
