import { fetchWithToken } from "./fetchWithToken.mjs";
import { postContent } from "./postTemplate.mjs";
import { API_BASE_URL } from "../constants/constants.mjs";
import { toggleSpinner } from "../utils/loadingSpinner.mjs";
import { displayFilteredPosts, filterPosts } from "./filterPosts.mjs";

export const postContainer = document.querySelector("#post-container");

export const postArray = await fetchWithToken(API_BASE_URL + "/api/v1/social/posts?_author=true");
toggleSpinner(postContainer);

postArray.forEach((element) => {
  postContent(element);
});

displayFilteredPosts("cake");
displayFilteredPosts("christmas");
displayFilteredPosts("travel");
displayFilteredPosts("monster");
