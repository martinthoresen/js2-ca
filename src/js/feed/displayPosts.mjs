import { fetchWithToken } from "./fetchWithToken.mjs";
import { postContent } from "./postTemplate.mjs";
import { API_BASE_URL } from "../constants/constants.mjs";
import { toggleSpinner } from "../utils/loadingSpinner.mjs";

const postContainer = document.querySelector("#post-container");

const postArray = await fetchWithToken(API_BASE_URL + "/api/v1/social/posts");

postArray.forEach((element) => {
  console.log(postContent(element));
});

toggleSpinner(postContainer);
