import { ContactFormDataKeys } from "./types";
import validateFormData, {
  validateEmail,
  validateEmptyField,
} from "./validateFormData";

describe("Email validation check", () => {
  it("Should fail on value that is not email = 'seyitan'", () => {
    expect(validateEmail("seyitan")).toBeFalsy();
  });
  it("Should fail on value that is not email = 'seyitan@.com'", () => {
    expect(validateEmail("seyitan@.com")).toBeFalsy();
  });
  it("Should fail on value that is not email = 'seyitan.com'", () => {
    expect(validateEmail("seyitan.com")).toBeFalsy();
  });
  it("Should pass when value is an email = 'seyitan@gmail.com'", () => {
    expect(validateEmail("seyitan@gmail.com")).toBeTruthy();
  });
  it("Should pass when value is an email = 'mee@jesuseyitan.com.ng'", () => {
    expect(validateEmail("mee@jesuseyitan.com.ng")).toBeTruthy();
  });
});

describe("Empty Field Validation Check", () => {
  it("should return false on empty string", () => {
    expect(validateEmptyField("")).toBeFalsy();
  });
  it("should return true when string is not empty", () => {
    expect(validateEmptyField("g")).toBeTruthy();
  });
  it("should return true when string is not empty", () => {
    expect(validateEmptyField("something")).toBeTruthy();
  });
});

describe("Validate Form Data OnChange Check", () => {
  it("Should return true when fields are empty", () => {
    const sampleFormData = { name: "", email: "", subject: "", message: "" };
    Object.entries(sampleFormData).forEach(([key, value]) => {
      expect(validateFormData(key as ContactFormDataKeys, value)).toBeTruthy();
    });
  });
  it("Should return false when fields are valid", () => {
    const sampleFormData = {
      name: "Odukoya",
      email: "seyi@g.co",
      subject: "Something",
      message: "A Long Message",
    };
    Object.entries(sampleFormData).forEach(([key, value]) => {
      expect(validateFormData(key as ContactFormDataKeys, value)).toBeFalsy();
    });
  });
});
