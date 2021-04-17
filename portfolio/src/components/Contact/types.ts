export type ContactFormDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export type ContactFormDataKeys = "name" | "email" | "subject" | "message";
export type ContactFormErrors = {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
};
