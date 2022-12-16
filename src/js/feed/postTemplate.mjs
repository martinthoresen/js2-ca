const postContainer = document.querySelector("#post-container");
import { checkPostOwner } from "../auth/checkPostOwner.mjs";
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
  const authorizedButtons = document.createElement("div");
  const postCard = singlePost.querySelector("#post-card");
  if (isOwner === true) {
    console.log("is the owner");
    postCard.appendChild(authorizedButtons);
    authorizedButtons.classList = "";
    authorizedButtons.innerHTML = `<button class="btn btn-info text-white">Edit Post</button>
    <button class="btn btn-danger">Delete Post</button>`;

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
