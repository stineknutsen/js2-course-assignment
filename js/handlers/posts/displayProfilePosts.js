import { fetchUserPosts } from "../../api/posts/fetchUserPosts.js";
import { renderProfilePosts } from "../../ui/posts/renderProfilePosts.js";
import { getUsername } from "../../utils/localStorage.js";
export async function displayProfilePosts() {
  const userLoggedIn = getUsername();

  if (userLoggedIn) {
    const profile = document.getElementById("profile");
    profile.textContent = "Hello, " + userLoggedIn + "!";
  }

  try {
    const posts = await fetchUserPosts();
    const container = document.getElementById("posts-container");

    renderProfilePosts(container, posts);
  } catch (error) {
    console.error("Error displaying posts", error);
    throw error;
  }
}
