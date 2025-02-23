import { fetchLoggedInUserPosts } from "../../api/posts/fetchLoggedInUserPosts.js";
import { renderProfilePosts } from "../../ui/posts/renderProfilePosts.js";
import { getUsername } from "../../utils/localStorage.js";
import {
  deleteButtonClick,
  editButtonClick,
} from "../../utils/buttonClicks.js";
export async function displayProfilePosts() {
  const userLoggedIn = getUsername();

  if (userLoggedIn) {
    const profile = document.getElementById("profile");
    profile.textContent = "Hello, " + userLoggedIn + "!";
  }

  try {
    const posts = await fetchLoggedInUserPosts();
    const container = document.getElementById("posts-container");

    renderProfilePosts(container, posts);
    editButtonClick();
    deleteButtonClick();
  } catch (error) {
    console.error("Error displaying posts", error);
    throw error;
  }
}
