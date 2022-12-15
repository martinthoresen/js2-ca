const postContainer = document.querySelector("#post-container");

export function postContent(post) {
  const singlePost = document.createElement("div");
  postContainer.appendChild(singlePost);
  singlePost.innerHTML = `<div class="card p-3 mb-5 bg-white shadow border-0">
  <a href = "" class="text-decoration-none text-black">
<h3 class="card-title">${post.title}</h3>
<img class="card-img img-responsive" src="${post.media}" alt="A picture related to the post" />
<p class="card-body">${post.body}</p>
<div>
  <button class="btn btn-info text-white">Edit Post</button>
  <button class="btn btn-danger">Delete Post</button>
</div>
</a>
</div>`;
}
