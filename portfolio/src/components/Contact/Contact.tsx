import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contact__heading}>Contact Me</h1>

      <div className={styles.contact__main}>
        <div className={styles.contact__details}>
          <h3>Get In Touch</h3>

          <div className={styles.detail}>
            <span className={styles.detail__title}>Email:</span>
            <a href="mailto:odukoyajesuseyitan@gmail.com">
              odukoyajesuseyitan@gmail.com
            </a>
          </div>
          <div className={styles.detail}>
            <span className={styles.detail__title}>Phone:</span>
            <a href="tel:+2347042872201">+234 704 2872 201</a>
          </div>
          <div className={styles.detail}>
            <span className={styles.detail__title}>Web:</span>
            <a href="www.jesuseyitan.com">www.jesuseyitan.com</a>
          </div>
        </div>

        <div className={styles.contact__form}>
          {/* <h3>Contact Me</h3> */}

          <form>
            {/* TODO name input */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              id="name"
            />

            {/* TODO email input */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              id="email"
            />
            {/* TODO subject input */}
            <input
              type="text"
              name="subject"
              required
              placeholder="Your Subject"
              id="subject"
            />
            {/* TODO email body input */}
            <textarea
              name="message"
              placeholder="Your Message"
              id="message"
              required
              rows={10}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
