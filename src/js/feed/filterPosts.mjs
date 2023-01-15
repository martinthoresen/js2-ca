import { postContainer } from "./displayPosts.mjs";
import { postArray } from "./displayPosts.mjs";
import { postContent } from "./postTemplate.mjs";

export function filterPosts(posts, keyword) {
  let filteredPosts = posts.filter((post) => post.tags.includes(keyword));
  return filteredPosts;
}

export function displayFilteredPosts(keyword) {
  const filter = document.querySelector("#filter-" + keyword);
  filter.addEventListener("change", (event) => {
    if (event.target.checked) {
      postContainer.innerHTML = "";
      const filteredContent = filterPosts(postArray, keyword);
      filteredContent.forEach((element) => {
        postContent(element);
      });
    }
  });
}
