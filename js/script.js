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
      registerHandler();
      break;
    case "/account/login.html":
      loginHandler();
      break;
    case "/account/profile.html":
      updateHeader();
      displayProfilePosts();
      break;
    case "/post/":
    case "/post/index.html":
      updateHeader();
      displaySinglePost();
      break;
    case "/post/edit.html":
      updateHeader();
      editPostHandler();
      break;
    case "/account/user-profile.html":
      updateHeader();
      displayUserProfile();
      break;
  }
}

router();
initialiseTheme();
