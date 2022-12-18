import { clearStorage } from "../storage/local-storage.mjs";
import { refresh } from "../utils/refreshPage.mjs";

const logoutButton = document.querySelector("#logout-button");
logoutButton.addEventListener("click", (event) => {
  event.preventDefault();
  clearStorage();
});
