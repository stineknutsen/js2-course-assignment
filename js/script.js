import { initialiseTheme } from "./ui/theme.js";
import { registerHandler } from "./handlers/auth/registerHandler.js";
import { loginHandler } from "./handlers/auth/loginHandler.js";
import { updateHeader } from "./ui/updateHeader.js";
import { displayFeed } from "./handlers/posts/displayFeed.js";
import { displayProfilePosts } from "./handlers/posts/displayProfilePosts.js";
import { createPostHandler } from "./handlers/posts/createPostHandler.js";
import { displaySinglePost } from "./handlers/posts/displaySinglePost.js";
import { editPostHandler } from "./handlers/posts/editPostHandler.js";
import { displayUserProfile } from "./handlers/profiles/displayUserProfile.js";

function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
    case "/index.html":
    case "/index":
      createPostHandler();
      displayFeed();
      break;
    case "/account/register.html":
    case "/account/register":
      registerHandler();
      break;
    case "/account/login.html":
    case "/account/login":
      loginHandler();
      break;
    case "/account/profile.html":
    case "/account/profile":
      updateHeader();
      displayProfilePosts();
      break;
    case "/post/":
    case "/post/index.html":
    case "/post/index":
      updateHeader();
      displaySinglePost();
      break;
    case "/post/edit.html":
    case "/post/edit":
      updateHeader();
      editPostHandler();
      break;
    case "/account/user-profile.html":
    case "/account/user-profile":
      updateHeader();
      displayUserProfile();
      break;
  }
}

router();
initialiseTheme();
