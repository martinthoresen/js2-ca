import { API_BASE_URL } from "../constants/constants.mjs";
import { fetchWithToken } from "../feed/getFetchWithToken.mjs";
import { specificPostContent } from "./specificPostTemplate.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const specificPost = await fetchWithToken(API_BASE_URL + "/api/v1/social/posts/" + id + "?_author=true");

specificPostContent(specificPost);
