const postContainer = document.querySelector("#post-container");
import { displayAuthorizedButtons } from "../utils/authorizedButtons.mjs";
export function postContent(post) {
  const singlePost = document.createElement("div");
  postContainer.appendChild(singlePost);

  singlePost.innerHTML = `<div class="card p-3 mb-5 bg-white shadow border-0" id="post-card">
  <a href="/post/index.html?id=${post.id}" class="text-decoration-none text-black">
  <p class="text-secondary"> id: ${post.id}</p>
<h3 class="card-title">${post.title}</h3>
<p class="text-primary"> by: @${post.author.name}</p>
<img class="card-img img-responsive" src="${post.media}"  />
<p class="card-body">${post.body}</p>
<p class="text-secondary">${post.tags}</p>

</a>
</div>`;
  displayAuthorizedButtons(post, singlePost);
}
