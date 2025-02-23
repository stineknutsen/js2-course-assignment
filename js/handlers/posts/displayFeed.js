import { fetchPosts } from "../../api/posts/fetchPosts.js";
import { renderFeedPosts } from "../../ui/posts/renderFeedPosts.js";
import { showLoader, hideLoader } from "../../utils/loader.js";
import { getToken } from "../../utils/localStorage.js";
import { searchPostsHandler } from "./searchPostsHandler.js";

export async function displayFeed() {
  showLoader("loader");
  const userLoggedIn = getToken();

  if (!userLoggedIn) {
    const frontPageContainer = document.getElementById("frontpage");
    frontPageContainer.style.display = "flex";
  } else {
    try {
      const posts = await fetchPosts();
      if (!posts || posts.length === 0) {
        alert("No posts found");
        return;
      }
      const container = document.getElementById("posts-container");

      renderFeedPosts(container, posts);
      searchPostsHandler(posts);
    } catch (error) {
      alert("Error: Something went wrong during feed display");
    } finally {
      hideLoader("loader");
    }
  }
}
