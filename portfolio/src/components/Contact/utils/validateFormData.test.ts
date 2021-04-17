import { validateEmail, validateEmptyField } from "./validateFormData";

describe("Email validation check", () => {
  it("Should fail on value that is not email", () => {
    expect(validateEmail("seyitan")).toBeFalsy();
  });
  it("Should fail on value that is not email", () => {
    expect(validateEmail("seyitan@.com")).toBeFalsy();
  });
  it("Should fail on value that is not email", () => {
    expect(validateEmail("seyitan.com")).toBeFalsy();
  });
  it("Should pass when value is an email", () => {
    expect(validateEmail("seyitan@gmail.com")).toBeTruthy();
  });
  it("Should pass when value is an email", () => {
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
