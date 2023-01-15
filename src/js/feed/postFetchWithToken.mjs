import { loadKey } from "../storage/local-storage.mjs";

export async function postFetchWithToken(url, post) {
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
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}
