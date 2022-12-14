import { API_BASE_URL } from "../constants/constants.mjs";
export const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;
import { clear, save } from "../storage/local-storage.mjs";

const loginForm = document.querySelector("#login-form");

async function loginUser(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    const accessToken = json.accessToken;
    save("accessToken", accessToken);
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
    clear(accessToken);
  }
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  const formProps = Object.fromEntries(formData);

  loginUser(loginUrl, formProps);
});
