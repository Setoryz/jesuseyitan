import emoji from "react-easy-emoji";
import styles from "./Greeting.module.scss";
import welcomePerson from "../../assets/lottie/welcomePerson.lottie.json";
import DisplayLottie from "../../utils/DisplayLottie/DisplayLottie";

const Greeting = () => {
  return (
    <>
      <div className={styles.greeting}>
        <div className="greet__main">
          <div className="greeting__main">
            <div className="greeting__text_container">
              <h1 className="greeting__text">
                Hello, My name is <br /> Jesuseyitan{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className={styles.greeting__text_p}>
                I am a passionate Full Stack Software Developer 🚀 having an
                experience of building Web pplications with Reactjs / Next JS /
                Nodejs / ASP.NET Core and some other cool libraries and
                frameworks.
              </p>
            </div>

            <div className="greeting__image_container">
              <DisplayLottie animationData={welcomePerson} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greeting;
