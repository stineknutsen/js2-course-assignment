import { fetchPosts } from "../../api/posts/fetchPosts.js";
import { renderFeedPosts } from "../../ui/posts/renderFeedPosts.js";

export async function displayFeedPosts() {
  try {
    const posts = await fetchPosts();
    const container = document.getElementById("posts-container");

    renderFeedPosts(container, posts);
  } catch (error) {
    console.error("Error displaying posts", error);
    throw error;
  }
}
