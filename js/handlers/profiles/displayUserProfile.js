import { fetchUserPosts } from "../../api/posts/fetchUserPosts.js";
import { renderUserProfile } from "../../ui/profiles/renderUserProfile.js";
import { showLoader, hideLoader } from "../../utils/loader.js";

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

    const posts = await fetchUserPosts(username);
    const container = document.getElementById("user-profile-container");

    renderUserProfile(container, posts);
  } catch (error) {
    alert("Error: Something went wrong during user profile display");
  } finally {
    hideLoader("loader");
  }
}
