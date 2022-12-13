import { API_BASE_URL } from "../constants/constants.mjs";
const errorMessage = document.querySelector("#error-message");

export async function registerUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    errorMessage.innerHTML = error;
  }
}
