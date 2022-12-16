import { API_BASE_URL } from "../constants/constants.mjs";
import { postFetchWithToken } from "./postFetchWithToken.mjs";

const submitPost = document.querySelector("#create-post");

/* submitPost.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  console.log(formData);
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
  postFetchWithToken(API_BASE_URL + "/api/v1/social/posts", post);
}); */

const createPost = document.querySelector("#create-post");
createPost.addEventListener("submit", (event) => {
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
  console.log(post);
  postFetchWithToken(API_BASE_URL + "/api/v1/social/posts", post);
});
