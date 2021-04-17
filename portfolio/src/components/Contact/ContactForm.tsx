import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.scss";
import {
  ContactFormErrors,
  ContactFormDataType,
  ContactFormDataKeys,
} from "./types";
import validateFormData from "./utils/validateFormData";

const initialError: ContactFormErrors = {
  name: false,
  email: false,
  subject: false,
  message: false,
};
const initialData: ContactFormDataType = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
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
  const submitForm = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.contact__form}>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
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
          required
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
          required
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
          required
          rows={10}
          onChange={(e) => {
            handleChange("message", e.target.value);
          }}
        ></textarea>
        {formErrors.message && (
          <div className={styles.form__error}>{errormessage.message}</div>
        )}

        <button type="submit" onSubmit={submitForm}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const errormessage = {
  name: "Please enter your name",
  email: "Please enter a valid email",
  subject: "Please enter your Subject",
  message: "Please enter your Message",
};
export default ContactForm;
