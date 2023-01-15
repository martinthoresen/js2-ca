import { loadKey } from "../storage/local-storage.mjs";

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
