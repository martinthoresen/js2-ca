import { loadKey } from "../storage/local-storage.mjs";
export async function deletePost(url) {
  try {
    const token = loadKey("accessToken");
    const getData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
