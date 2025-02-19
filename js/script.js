import { toggleTheme } from "./ui/theme.js";
import { registerHandler } from "./handlers/auth/registerHandler.js";

function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
    case "/index.html":
      // displayPosts();
      break;
    case "/account/register.html":
      registerHandler();
      break;
    case "/account/login.html":
      // loginHandler();
      break;
    case "/account/profile.html":
      // displayProfile();
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
toggleTheme();
