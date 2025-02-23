import { getPostIdFromUrl } from "../../utils/getPostIdFromUrl.js";
import { renderEditPost } from "../../ui/posts/renderEditPost.js";
import { updatePost } from "../../api/posts/updatePost.js";
import { deletePost } from "../../api/posts/deletePost.js";
import { showLoader, hideLoader } from "../../utils/loader.js";

export async function editPostHandler() {
  showLoader("loader");
  try {
    const postId = getPostIdFromUrl();

    if (!postId) {
      alert("No post ID found in the URL. Redirecting...");
      window.location.href = "/account/profile.html";
      return;
    }

    renderEditPost();

    const updateButton = document.getElementById("update-button");
    const deleteButton = document.getElementById("delete-button");

    updateButton.addEventListener("click", async (event) => {
      event.preventDefault();
      const updatedData = {
        title: document.getElementById("title").value,
        body: document.getElementById("content").value,
      };

      try {
        await updatePost(postId, updatedData);
        window.location.href = "/account/profile.html";
      } catch (error) {
        alert("Error: Something went wrong during post update");
      }
    });

    deleteButton.addEventListener("click", async (event) => {
      event.preventDefault();
      if (confirm("Are you sure you want to delete this post?")) {
        try {
          await deletePost(postId);
          window.location.href = "/account/profile.html";
        } catch (error) {
          alert("Error: Something went wrong during post deletion");
        }
      }
    });
  } catch (error) {
    alert("Error: Something went wrong during post display");
  } finally {
    hideLoader("loader");
  }
}
