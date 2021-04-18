import { initialError } from "./constants";
import { ContactFormDataKeys, ContactFormDataType } from "./types";

// TODO: write Tests
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

// TODO: write Tests
export const validateFormDataOnSubmit = (
  contactFormData: ContactFormDataType
) => {
  var errorCount = 0;
  var errors = initialError;
  Object.entries(contactFormData).forEach(([key, value]) => {
    if (validateFormData(key as ContactFormDataKeys, value)) {
      errors = {
        ...errors,
        [key]: true,
      };
      errorCount++;
    }
  });
  return { errorCount, errors };
};

export const validateEmail = (value: string) =>
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    value
  );

export const validateEmptyField = (value: string) => value.length > 0;

export default validateFormData;
