const postContainer = document.querySelector("#post-container");
import { displayDeleteButton } from "../utils/deleteButton.mjs";
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
  displayDeleteButton(post, singlePost);
}
