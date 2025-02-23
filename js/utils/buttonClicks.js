import { deletePost } from "../api/posts/deletePost.js";

/**
 * Adds click event listeners to all edit buttons.
 * Redirects to the edit page of the selected post using the post ID.
 *
 * @function
 */
export function editButtonClick() {
  document.querySelectorAll(".edit-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const postId = event.target.dataset.id;
      window.location.href = `../post/edit.html?id=${postId}`;
    });
  });
}

/**
 * Adds click event listeners to all delete buttons.
 * Prompts the user for confirmation before deleting a post.
 * Deletes the selected post if confirmed and reloads the page.
 *
 * @function
 */
export function deleteButtonClick() {
  document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const postId = event.target.dataset.id;
      if (confirm("Are you sure you want to delete this post?")) {
        await deletePost(postId);
        window.location.reload();
      }
    });
  });
}
