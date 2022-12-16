import { loadKey } from "../storage/local-storage.mjs";

console.log(loadKey("data"));

export function checkPostOwner(post) {
  var loggedInEmail = loadKey("data").email;
  var posterEmail = post.author.email;
  if (loggedInEmail === posterEmail) {
    var isOwner = true;
  } else {
    var isOwner = false;
  }
  return isOwner;
}
