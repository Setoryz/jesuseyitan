import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.scss";
import {
  ContactFormErrors,
  ContactFormDataType,
  ContactFormDataKeys,
} from "./types";

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

  // TODO:  FORM VALIDATION
  const validateFormData = (
    key: ContactFormDataKeys,
    value = contactFormData[key]
  ) => {
    var isValid = true;
    switch (key) {
      case "name":
        if (value.length < 1) isValid = false;
        break;
      case "email":
        isValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        );
        break;
      case "subject":
      case "message":
        if (value.length < 1) isValid = false;
        break;
    }
    setFormErrors({ ...formErrors, [key]: !isValid });
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
            setContactFormData({ ...contactFormData, name: e.target.value });
            validateFormData("name", e.target.value);
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
            setContactFormData({ ...contactFormData, email: e.target.value });
            validateFormData("email", e.target.value);
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
            setContactFormData({ ...contactFormData, subject: e.target.value });
            validateFormData("subject", e.target.value);
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
            setContactFormData({ ...contactFormData, message: e.target.value });
            validateFormData("message", e.target.value);
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
