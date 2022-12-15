/* export function filterPosts(posts, keyword) {
  posts.filter(function (element) {
    console.log(element.tags.includes(keyword));
  });
} */
import { postContainer } from "./displayPosts.mjs";
import { postArray } from "./displayPosts.mjs";
import { postContent } from "./postTemplate.mjs";

export function filterPosts(posts, keyword) {
  var filteredPosts = posts.filter((post) => post.tags.includes(keyword));
  return filteredPosts;
}

export function displayFilteredPosts(keyword) {
  const filterTravel = document.querySelector("#filter-" + keyword);
  filterTravel.addEventListener("change", (event) => {
    if (event.target.checked) {
      postContainer.innerHTML = "";
      const filteredContent = filterPosts(postArray, keyword);
      filteredContent.forEach((element) => {
        postContent(element);
      });
    } else postContainer.innerHTML = "";
    postArray.forEach((element) => {
      postContent(element);
    });
  });
}
