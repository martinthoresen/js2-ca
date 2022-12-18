import { loadKey } from "../storage/local-storage.mjs";

export async function putFetchWithToken(url, post) {
  try {
    const token = loadKey("accessToken");
    console.log(post);
    const response = await fetch(url, {
      method: "PUT",
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
