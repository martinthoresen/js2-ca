import { loadKey } from "../storage/local-storage.mjs";

export async function sendPost(url, post) {
  try {
    const token = loadKey("accessToken");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });
    if (response.ok) {
      console.log("success");
    }
  } catch (error) {
    console.log(error);
  }
}
