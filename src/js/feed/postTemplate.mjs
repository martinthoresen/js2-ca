const postContainer = document.querySelector("#post-container");

export function postContent(postId) {
  const singlePost = document.createElement("div");
  postContainer.appendChild(singlePost);
  singlePost.innerHTML = `<div class="card p-3 mb-5 bg-white shadow border-0">
  <a href = "">
<h3 class="card-title">${postId.title}</h3>
<img class="card-img img-responsive" src="${postId.media}" alt="A picture related to the post" />
<p class="card-body">${postId.body}</p>
<div>
  <button class="btn btn-info text-white">Edit Post</button>
  <button class="btn btn-danger">Delete Post</button>
</div>
</div>`;
}
