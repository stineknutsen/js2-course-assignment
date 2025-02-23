import { fetchLoggedInUserPosts } from "../../api/posts/fetchLoggedInUserPosts.js";
import { renderProfilePosts } from "../../ui/posts/renderProfilePosts.js";
import { getUsername } from "../../utils/localStorage.js";
import {
  deleteButtonClick,
  editButtonClick,
} from "../../utils/buttonClicks.js";
import { showLoader, hideLoader } from "../../utils/loader.js";
export async function displayProfilePosts() {
  showLoader("loader");

  try {
    const userLoggedIn = getUsername();

    if (userLoggedIn) {
      const profile = document.getElementById("profile");
      profile.textContent = "Hello, " + userLoggedIn + "!";
    }
    const posts = await fetchLoggedInUserPosts();
    if (!posts || posts.length === 0) {
      alert("No posts found");
      return;
    }
    const container = document.getElementById("posts-container");

    renderProfilePosts(container, posts);
    editButtonClick();
    deleteButtonClick();
  } catch (error) {
    alert("Error: Something went wrong during profile display");
  } finally {
    hideLoader("loader");
  }
}
