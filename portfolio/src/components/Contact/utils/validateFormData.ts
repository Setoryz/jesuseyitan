import { ContactFormDataKeys } from "../types";

const validateFormData = (key: ContactFormDataKeys, value: string) => {
  var isValid = true;
  switch (key) {
    case "email":
      isValid = validateEmail(value);
      break;
    case "name":
    case "subject":
    case "message":
      isValid = validateEmptyField(value);
      break;
  }
  return !isValid;
};

export const validateEmail = (value: string) =>
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    value
  );

export const validateEmptyField = (value: string) => value.length > 0;

export default validateFormData;
