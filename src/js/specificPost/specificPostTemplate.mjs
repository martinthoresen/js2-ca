const specificPostContainer = document.querySelector("#specific-post-container");

export function specificPostContent(post) {
  const singlePost = document.createElement("div");
  singlePost.classList("card");
  specificPostContainer.appendChild(singlePost);
  singlePost.innerHTML = `<div class="card p-3 mb-5 bg-white shadow border-0">
  
  <h3 class="card-title">${post.title}</h3>
  <img class="card-img img-responsive" src="${post.media}" alt="A picture related to the post" />
  <p class="card-body">${post.body}</p>
  <div>
    <button class="btn btn-info text-white">Edit Post</button>
    <button class="btn btn-danger">Delete Post</button>
  </div>
  </div>`;
}
