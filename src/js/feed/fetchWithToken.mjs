import { API_BASE_URL } from "../constants/constants.mjs";
import { loadKey } from "../storage/local-storage.mjs";
export async function fetchWithToken(url) {
  try {
    const token = loadKey("accessToken"); //localStorage.getItem("accessToken");
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
