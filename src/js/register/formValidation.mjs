import { registerUser } from "./registerUser.mjs";
import { API_BASE_URL } from "../constants/constants.mjs";

const registerForm = document.querySelector("#register-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const securityPassword = document.querySelector("#security-password");
export const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

const isNameValid = () => {
  let valid = false;
  let regEx = /^(?=.{4,16}$)[a-zA-Z0-9_]+$/;

  if (regEx.test(name.value)) {
    valid = true;
  } else {
    valid = false;
  }
  return valid;
};

const isPasswordValid = () => {
  let valid = false;

  const passwordToMatch = password.value.trim();
  const securityPasswordToMatch = securityPassword.value.trim();

  if (passwordToMatch.length <= 7 && securityPasswordToMatch <= 7) {
    console.log("Password is less than 8 letters.");
  } else if (passwordToMatch !== securityPasswordToMatch) {
    console.log("Password does not match");
  } else {
    valid = true;
    console.log(valid);
  }
  return valid;
};

const isEmailValid = () => {
  let valid = false;

  if (email.value.includes("noroff.no" || "stud.noroff.no")) {
    valid = true;
  } else {
    console.log("Email must be a valid Noroff email");
  }
  return valid;
};

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);

  let isFormValid = isEmailValid() && isPasswordValid() && isNameValid();
  if (isFormValid === true) {
    console.log("isFormValid");
    registerUser(registerUrl, formProps);
  } else {
    console.log("error");
    console.log(isFormValid);
  }
});
