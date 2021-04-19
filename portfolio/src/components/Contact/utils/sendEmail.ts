import * as emailjs from "emailjs-com";

const serviceID = "default_service";
const templateID = "contact_template_0bfqkhy";
const userID = "user_VYkd4OM5yJ0DUEsIhkNBa";

const sendEmail = async (templateParams: EmailTemplateParams) =>
  await emailjs.send(serviceID, templateID, templateParams, userID);

export default sendEmail;
type EmailTemplateParams = {
  from_name: string;
  user_email: string;
  subject: string;
  message: string;
};
