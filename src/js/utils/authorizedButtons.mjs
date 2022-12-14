import { checkPostOwner } from "../auth/checkPostOwner.mjs";
import { API_BASE_URL } from "../constants/constants.mjs";
import { deletePost } from "../feed/deletePost.mjs";
import { refresh } from "./refreshPage.mjs";

export function displayAuthorizedButtons(post, parent) {
  var isOwner = checkPostOwner(post);
  const authorizedButtons = document.createElement("div");
  const postCard = parent.querySelector("#post-card");
  if (isOwner === true) {
    postCard.appendChild(authorizedButtons);
    authorizedButtons.innerHTML = `
      <button id="delete-post-id-${post.id}" class="btn btn-danger">Delete Post</button>`;
  } else {
  }

  const deleteButton = document.querySelector(`#delete-post-id-${post.id}`);
  if (deleteButton) {
    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      var deleteUrl = API_BASE_URL + `/api/v1/social/posts/${post.id}`;
      deletePost(deleteUrl);
      refresh();
    });
  }
}
