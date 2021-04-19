import { ContactFormDataType, ContactFormErrors } from "./types";

export const initialError: ContactFormErrors = {
  name: false,
  email: false,
  subject: false,
  message: false,
};
export const initialData: ContactFormDataType = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export const errormessage = {
  name: "Please enter your name",
  email: "Please enter a valid email",
  subject: "Please enter your Subject",
  message: "Please enter your Message",
};
