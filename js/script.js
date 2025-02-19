import { toggleTheme } from "./ui/theme.js";
import { registerHandler } from "./handlers/auth/registerHandler.js";
import { loginHandler } from "./handlers/auth/loginHandler.js";
import { updateHeader } from "./ui/updateHeader.js";
import { displayFeedPosts } from "./handlers/posts/displayFeedPosts.js";
import { displayProfilePosts } from "./handlers/posts/displayProfilePosts.js";
function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
    case "/index.html":
      displayFeedPosts();
      break;
    case "/account/register.html":
      registerHandler();
      break;
    case "/account/login.html":
      loginHandler();
      break;
    case "/account/profile.html":
      displayProfilePosts();
      break;
    case "/post/":
    case "/post/index.html":
      // displayPost();
      break;
    case "/post/create.html":
      // createPostHandler();
      break;
    case "/post/edit.html":
    // editPostHandler();
  }
}

router();
updateHeader();
toggleTheme();
