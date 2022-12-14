import { registerUser } from "./registerUser.mjs";
import { API_BASE_URL } from "../constants/constants.mjs";
import { displayMessage } from "../utils/displayMessage.mjs";

export const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

const registerForm = document.querySelector("#register-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const securityPassword = document.querySelector("#security-password");

const nameContainer = document.querySelector("#name-container");
const emailContainer = document.querySelector("#email-container");
const passwordContainer = document.querySelector("#password-container");
const securityPasswordContainer = document.querySelector("#security-password-container");
const registerContainer = document.querySelector("#register-container");

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

  if (password.value <= 7) {
  } else {
    valid = true;
    console.log(valid);
  }
  return valid;
};

const isSecurityPasswordValid = () => {
  let valid = false;

  const passwordToMatch = password.value.trim();
  const securityPasswordToMatch = securityPassword.value.trim();
  if (passwordToMatch === securityPasswordToMatch) {
    valid = true;
  }
  return valid;
};

const isEmailValid = () => {
  let valid = false;

  if (email.value.includes("noroff.no" || "stud.noroff.no")) {
    valid = true;
  } else {
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
    displayMessage(registerContainer, "Please check your inputs.");
  }
  if (isNameValid() === false) {
    displayMessage(nameContainer, "Invalid username, please check if it matches the requirements.");
  }
  if (isEmailValid() === false) {
    displayMessage(emailContainer, "Invalid email, please check if it is a valid Noroff email.");
  }
  if (isPasswordValid() === false) {
    displayMessage(passwordContainer, "Password is less than 8 characters.");
  }
  if (isSecurityPasswordValid() === false) {
    displayMessage(securityPasswordContainer, "Password doesn't match");
  }
});
