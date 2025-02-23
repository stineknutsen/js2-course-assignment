import { searchPostsHandler } from "../handlers/posts/searchPostsHandler.js";
import { renderFeedPosts } from "../ui/posts/renderFeedPosts.js";

export function searchPosts(searchTerm, posts) {
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.body.toLowerCase().includes(searchTerm)
  );

  const postsContainer = document.getElementById("posts-container");
  renderFeedPosts(postsContainer, filteredPosts);
}
