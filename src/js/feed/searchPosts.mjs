import { postContainer } from "./displayPosts.mjs";
import { postArray } from "./displayPosts.mjs";
import { postContent } from "./postTemplate.mjs";

const searchSubmit = document.querySelector("#search-submit");
const searchInput = document.querySelector("#search-input");

searchSubmit.addEventListener("click", (event) => {
  postContainer.innerHTML = "";
  const searchValue = searchInput.value.toLowerCase();
  searchPosts(postArray, searchValue);
});

function searchPosts(posts, keyword) {
  let searchedPosts = posts.filter((post) => post.title.includes(keyword));
  searchedPosts.forEach((element) => {
    postContent(element);
  });
}
