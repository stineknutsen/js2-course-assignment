import { fetchUserPosts } from "../../api/posts/fetchUserPosts.js";
import { renderUserProfile } from "../../ui/profiles/renderUserProfile.js";

export async function displayUserProfile() {
  const userLoggedIn = localStorage.getItem("token");
  if (!userLoggedIn) {
    throw new Error("No token found");
  }

  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("name");

  const posts = await fetchUserPosts(username);
  const container = document.getElementById("user-profile-container");

  renderUserProfile(container, posts);

  console.log("dibirub");
}
