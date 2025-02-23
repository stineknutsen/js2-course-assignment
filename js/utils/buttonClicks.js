import { deletePost } from "../api/posts/deletePost.js";

export function editButtonClick() {
  document.querySelectorAll(".edit-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const postId = event.target.dataset.id;
      window.location.href = `../post/edit.html?id=${postId}`;
    });
  });
}

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
