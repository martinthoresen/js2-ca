import { loadKey } from "../storage/local-storage.mjs";
/**
 * Deletes a post via the API, targeting a link which contans the post ID
 * @param {string} url URL of the post to delete
 * @example
 * ```js
 * // Call the function with the URL of the post to delete
 * deletePost(url)
 * ```
 */
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
