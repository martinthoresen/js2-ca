import { fetchWithToken } from "./getFetchWithToken.mjs";
import { postContent } from "./postTemplate.mjs";
import { API_BASE_URL } from "../constants/constants.mjs";
import { toggleSpinner } from "../utils/loadingSpinner.mjs";
import { displayFilteredPosts } from "./filterPosts.mjs";
import { loadKey } from "../storage/local-storage.mjs";

export const postContainer = document.querySelector("#post-container");
const resetFilter = document.querySelector("#reset-filter");

export const postArray = await fetchWithToken(API_BASE_URL + "/api/v1/social/posts?_author=true");
toggleSpinner(postContainer);

let token = loadKey("accessToken");
if (!token) {
  window.location.replace("/login");
} else {
  postArray.forEach((element) => {
    postContent(element);
  });
}

displayFilteredPosts("cake");
displayFilteredPosts("christmas");
displayFilteredPosts("travel");
displayFilteredPosts("monster");

resetFilter.addEventListener("click", (event) => {
  event.preventDefault();
  const radioButton = document.querySelector("input[type=radio]:checked");
  radioButton.checked = false;
  postContainer.innerHTML = "";
  postArray.forEach((element) => {
    postContent(element);
  });
});
