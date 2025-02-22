import { getPostIdFromUrl } from "../../utils/getPostIdFromUrl.js";
import { renderEditPost } from "../../ui/posts/renderEditPost.js";
import { updatePost } from "../../api/posts/updatePost.js";
import { deletePost } from "../../api/posts/deletePost.js";

export async function editPostHandler() {
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
      await updatePost(postId, updatedData);
      window.location.href = "/account/profile.html";
    });

    deleteButton.addEventListener("click", async (event) => {
      event.preventDefault();
      if (confirm("Are you sure you want to delete this post?")) {
        await deletePost(postId);
        window.location.href = "/account/profile.html";
      }
    });
  } catch (error) {
    console.error(error);
    console.error("Error displaying post", error);
  }
}
