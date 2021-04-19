import { FormEvent, useState } from "react";
import { errormessage, initialData, initialError } from "./utils/constants";
import styles from "./ContactForm.module.scss";
import { ContactFormDataKeys, EmailSentStatus } from "./utils/types";
import validateFormData, {
  validateFormDataOnSubmit,
} from "./utils/validateFormData";
import sendEmail from "./utils/sendEmail";
import InProgress from "../Loaders/InProgress/InProgress";
import Done from "../Loaders/Done/Done";

const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialError);
  const [emailSentStatus, setEmailSentStatus] = useState<EmailSentStatus>(
    "IDLE"
  );

  // TODO:  HANDLE CHANGE
  const handleChange = (key: ContactFormDataKeys, value: string) => {
    setContactFormData({ ...contactFormData, [key]: value });
    setFormErrors({
      ...formErrors,
      [key]: validateFormData(key as ContactFormDataKeys, value),
    });
  };

  // TODO: SEND EMAIL
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var { errorCount, errors } = validateFormDataOnSubmit(contactFormData);
    setFormErrors(errors);

    if (errorCount === 0) {
      // TODO: Logic to Send Email
      // alert("No Error");

      let templateParams = {
        from_name: contactFormData.name,
        user_email: contactFormData.email,
        subject: contactFormData.subject,
        message: contactFormData.message,
      };

      setEmailSentStatus("IN PROGRESS");

      // TODO: initlaize loading anim
      sendEmail(templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmailSentStatus("DONE");
          setTimeout(() => {
            setEmailSentStatus("IDLE");
            setContactFormData(initialData);
          }, 2000);
        },
        (error) => {
          setTimeout(() => {
            setEmailSentStatus("FAILED");
          }, 500);
          // setTimeout(() => {
          //   setEmailSentStatus("IDLE");
          // }, 2000);
        }
      );
    }
  };

  return (
    <div className={styles.contact__form}>
      <form onSubmit={handleSubmit}>
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
          value={contactFormData.subject}
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
          value={contactFormData.message}
          onChange={(e) => {
            handleChange("message", e.target.value);
          }}
        ></textarea>
        {formErrors.message && (
          <div className={styles.form__error}>{errormessage.message}</div>
        )}

        <button
          className={emailSentStatus === "FAILED" ? styles.failed : ""}
          type="submit"
        >
          {emailSentStatus === "IDLE" ? (
            "Send Message"
          ) : emailSentStatus === "IN PROGRESS" ? (
            <>
              Sending...
              <InProgress />
            </>
          ) : emailSentStatus === "DONE" ? (
            <>
              Sent
              <Done />
            </>
          ) : (
            <>Sending Failed, Try Again</>
          )}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
