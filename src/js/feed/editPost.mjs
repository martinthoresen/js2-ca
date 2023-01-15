import { putFetchWithToken } from "./putFetchWithToken.mjs";
import * as displayMessage from "../utils/displayMessage.mjs";

const updatePost = document.querySelector("#submit-edited-post");
updatePost.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = event.target;
  const title = formData.title.value;
  const body = formData.body.value;
  const tagsString = formData.tags.value;
  const tags = tagsString.split(",");
  const media = formData.media.value;
  const post = {
    title,
    body,
    tags,
    media,
  };

  putFetchWithToken(API_BASE_URL + `/api/v1/social/posts/${post.id}`, post);
  messageContainer = document.querySelector("#message-container");
});
