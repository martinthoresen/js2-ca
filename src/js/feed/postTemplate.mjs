const postContainer = document.querySelector("#post-container");
import { checkPostOwner } from "../auth/checkPostOwner.mjs";
import { API_BASE_URL } from "../constants/constants.mjs";
import { deletePost } from "./deletePost.mjs";
export function postContent(post) {
  const singlePost = document.createElement("div");
  postContainer.appendChild(singlePost);

  singlePost.innerHTML = `<div class="card p-3 mb-5 bg-white shadow border-0" id="post-card">
  <a href = "post/" class="text-decoration-none text-black">
  <p class="text-secondary"> id: ${post.id}</p>
<h3 class="card-title">${post.title}</h3>
<p class="text-primary"> by: @${post.author.name}</p>
<img class="card-img img-responsive" src="${post.media}"  />
<p class="card-body">${post.body}</p>
<p class="text-secondary">${post.tags}</p>

</a>
</div>`;

  var isOwner = checkPostOwner(post);
  var deleteUrl = API_BASE_URL + `/v1/social/posts/${post.id}`;
  const authorizedButtons = document.createElement("div");
  const postCard = singlePost.querySelector("#post-card");
  if (isOwner === true) {
    console.log("is the owner");
    postCard.appendChild(authorizedButtons);
    authorizedButtons.innerHTML = `<button id="edit-post" class="btn btn-info text-white">Edit Post</button>
    <button id="delete-post" class="btn btn-danger">Delete Post</button>`;
    const deleteButton = document.querySelector("#delete-post")
    deleteButton.addEventListener("click", (event) => {
     deletePost(deleteUrl)
    }

    /* authorizedFeatures.appendChild(authorizedButtons)`<button class="btn btn-info text-white">Edit Post</button>
<button class="btn btn-danger">Delete Post</button>`; */
  } else {
    console.log("Is not the owner");
  }
  /* function showAuthorizedFeatures() {
    if (isOwner) {
      console.log("is owner");
    } else {
      authorizedFeatures.classList = "d-none";
    }
  } */
}
