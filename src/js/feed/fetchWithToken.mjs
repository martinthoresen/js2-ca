import { API_BASE_URL } from "../constants/constants.mjs";
import { load } from "../storage/local-storage.mjs";
export async function fetchWithToken(url) {
  try {
    const token = load("accessToken"); //localStorage.getItem("accessToken");
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

fetchWithToken(API_BASE_URL + "/api/v1/social/posts");
