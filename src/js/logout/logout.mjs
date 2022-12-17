import { removeKey } from "../storage/local-storage.mjs";

const logoutButton = document.querySelector("#logout-button");
console.log(logoutButton);
logoutButton.addEventListener("click", (event) => {
  event.preventDefault();
  removeKey("accessToken");
  removeKey("data");
});
