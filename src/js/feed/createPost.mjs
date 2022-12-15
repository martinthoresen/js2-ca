import { API_BASE_URL } from "../constants/constants.mjs";
import { sendPost } from "./sendPost.mjs";

const form = document.querySelector("#create-post");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new formData(event.target);
  const title = formData.title.value;
  const body = formData.body.value;
  const tagsString = formData.tags.value;
  const tags = tagsString.split(",");
  const media = formProps.media.value;
  const post = {
    title,
    body,
    tags,
    media,
  };
  console.log(post);
  sendPost(API_BASE_URL + "/api/v1/social/posts", post);
});
