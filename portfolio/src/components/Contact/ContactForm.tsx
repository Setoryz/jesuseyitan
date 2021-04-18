import { FormEvent, useState } from "react";
import { errormessage, initialData, initialError } from "./utils/constants";
import styles from "./ContactForm.module.scss";
import {
  ContactFormErrors,
  ContactFormDataType,
  ContactFormDataKeys,
} from "./utils/types";
import validateFormData, {
  validateFormDataOnSubmit,
} from "./utils/validateFormData";

const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialError);

  // TODO:  HANDLE CHANGE
  const handleChange = (key: ContactFormDataKeys, value: string) => {
    setContactFormData({ ...contactFormData, [key]: value });
    setFormErrors({
      ...formErrors,
      [key]: validateFormData(key as ContactFormDataKeys, value),
    });
  };

  // TODO: SEND EMAIL
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var { errorCount, errors } = validateFormDataOnSubmit(contactFormData);
    setFormErrors(errors);

    if (errorCount === 0) {
      // TODO: Logic to Send Email
      alert("No Error");
    }
  };

  return (
    <div className={styles.contact__form}>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          // required
          id="name"
          value={contactFormData.name}
          onChange={(e) => {
            handleChange("name", e.target.value);
          }}
        />
        {formErrors.name && (
          <div className={styles.form__error}>{errormessage.name}</div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          // required
          id="email"
          value={contactFormData.email}
          onChange={(e) => {
            handleChange("email", e.target.value);
          }}
        />
        {formErrors.email && (
          <div className={styles.form__error}>{errormessage.email}</div>
        )}

        <input
          type="text"
          name="subject"
          // required
          placeholder="Your Subject"
          id="subject"
          onChange={(e) => {
            handleChange("subject", e.target.value);
          }}
        />
        {formErrors.subject && (
          <div className={styles.form__error}>{errormessage.subject}</div>
        )}

        <textarea
          name="message"
          placeholder="Your Message"
          id="message"
          // required
          rows={10}
          onChange={(e) => {
            handleChange("message", e.target.value);
          }}
        ></textarea>
        {formErrors.message && (
          <div className={styles.form__error}>{errormessage.message}</div>
        )}

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default ContactForm;
