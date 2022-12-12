import { API_BASE_URL } from "../register/constants.mjs";
export async function registerUser(url, data) {
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
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

const user = {
  name: "test_account_a",
  email: "test-account-a@noroff.no",
  password: "my-password",
};

registerUser(`${API_BASE_URL}/social/auth/register`, user);
