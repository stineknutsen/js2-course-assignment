import { fetchPosts } from "../../api/posts/fetchPosts.js";
import { renderFeedPosts } from "../../ui/posts/renderFeedPosts.js";
import { getToken } from "../../utils/localStorage.js";

export async function displayFeed() {
  const userLoggedIn = getToken();

  if (!userLoggedIn) {
    const frontPageContainer = document.getElementById("frontpage");
    frontPageContainer.style.display = "flex";
  } else {
    try {
      const posts = await fetchPosts();
      const container = document.getElementById("posts-container");

      renderFeedPosts(container, posts);
    } catch (error) {
      console.error("Error displaying posts", error);
      throw error;
    }
  }
}
