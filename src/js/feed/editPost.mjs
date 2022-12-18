import { putFetchWithToken } from "./putFetchWithToken.mjs";

const updatePost = document.querySelector("#submit-edited-post");
updatePost.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = event.target;
  const title = formData.title.value;
  const body = formData.body.value;
  const tagsString = formData.tags.value;
  const tags = tagsString.split(",");
  const media = formData.media.value;
  console.log(title, body, tagsString);
  const post = {
    title,
    body,
    tags,
    media,
  };
  console.log(post);

  putFetchWithToken(API_BASE_URL + `/api/v1/social/posts/${post.id}`, post);
  // refresh();
});
