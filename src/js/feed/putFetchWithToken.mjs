import { loadKey } from "../storage/local-storage.mjs";
import { displayMessage } from "../utils/displayMessage.mjs";

export async function putFetchWithToken(url, post) {
  try {
    const token = loadKey("accessToken");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });
    if (response.ok) {
      const messageContainer = document.querySelector("#message-container");
      displayMessage(messageContainer, "Post has been updated!", "success");
    }
  } catch (error) {
    console.log(error);
  }
}
