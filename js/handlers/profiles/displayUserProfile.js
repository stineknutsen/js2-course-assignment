import { fetchUserPosts } from "../../api/posts/fetchUserPosts.js";
import { renderProfilePosts } from "../../ui/posts/renderProfilePosts.js";
import { renderUserProfile } from "../../ui/profiles/renderUserProfile.js";
import { showLoader, hideLoader } from "../../utils/loader.js";
import { getUsername } from "../../utils/localStorage.js";

export async function displayUserProfile() {
  showLoader("loader");
  try {
    const userLoggedIn = localStorage.getItem("token");
    if (!userLoggedIn) {
      alert("You must be logged in to view this page");
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("name");

    if (username === getUsername()) {
      const posts = await fetchLoggedInUserPosts();
      const container = document.getElementById("user-profile-container");
      renderProfilePosts(container, posts);
    } else {
      await fetchUserPosts(username);
      const posts = await fetchUserPosts(username);
      const container = document.getElementById("user-profile-container");
      renderUserProfile(container, posts);
    }
  } catch (error) {
    alert("Error: Something went wrong during user profile display");
  } finally {
    hideLoader("loader");
  }
}
