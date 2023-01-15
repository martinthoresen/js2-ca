const specificPostContainer = document.querySelector("#specific-post-container");
import { checkPostOwner } from "../auth/checkPostOwner.mjs";
import { putFetchWithToken } from "../feed/putFetchWithToken.mjs";
import { API_BASE_URL } from "../constants/constants.mjs";
import { displayAuthorizedButtons } from "../utils/authorizedButtons.mjs";
// import { editPost } from "../feed/editPost.mjs";
export function specificPostContent(post) {
  const singlePost = document.createElement("div");
  specificPostContainer.appendChild(singlePost);

  singlePost.innerHTML = `<div class="card p-5 mb-5 bg-white shadow border-0" id="post-card">
  <h3 class="card-title">${post.title}</h3>
  <img class="card-img" src="${post.media}" />
  <p class="text-primary mt-2"> by: @${post.author.name}</p>
  <p class="my-2">${post.body}</p>

  </div>`;
  if (checkPostOwner(post)) {
    singlePost.innerHTML = `<div class="card p-5 mb-5 bg-white shadow border-0" id="post-card">
    <h1 class="text-center" >Edit post</h1> 
    <form class="flex-column align-items-stretch gap-3 p-4 rounded-2 sticky-lg-top" id="create-post">
    ID: ${post.id}
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" name="title" placeholder="Write a title for your post..." required value="${post.title}" />
    </div>
    <div class="form-group">
      <label for="body">Body</label>
      <textarea id="body" maxlength="150" name="body" cols="" rows="6" class="form-control" >${post.body}</textarea>
    </div>
    <div class="form-group">
      <label for="post-media">Media</label>
      <input type="text" class="form-control" name="media" value="${post.media}" />
    </div>
    <div class="form-group">
      <label for="post-tags">Tags</label>
      <input type="text" class="form-control" name="tags" value="${post.tags}" />
    </div>
    <p id="message-container"></p>
    <button id="submit-edited-post" class="btn btn-primary my-3">Submit changes</button>
  </form>
    </div>`;
    displayAuthorizedButtons(post, singlePost);
    const postId = post.id;
    const updatePost = document.querySelector("#create-post");
    updatePost.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = event.target;
      const title = formData.title.value;
      const body = formData.body.value;
      const tagsString = formData.tags.value;
      const tags = tagsString.split(",");
      console.log(tags);
      const media = formData.media.value;
      const post = {
        title,
        body,
        tags,
        media,
      };
      console.log(post.id);
      putFetchWithToken(API_BASE_URL + `/api/v1/social/posts/${postId}`, post);
    });
  }
}
