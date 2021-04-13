import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  // TODO:  FORM VALIDATION
  // TODO: SEND EMAIL

  return (
    <div className={styles.contact__form}>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          id="name"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          id="email"
        />

        <input
          type="text"
          name="subject"
          required
          placeholder="Your Subject"
          id="subject"
        />

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
  );
};

export default ContactForm;
