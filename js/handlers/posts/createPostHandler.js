import { createPost } from "../../api/posts/createPost.js";
import { TAG } from "../../constants/api.js";
import { getUsername } from "../../utils/localStorage.js";

export function createPostHandler() {
  const form = document.getElementById("create-post-form");

  if (form) {
    form.addEventListener("submit", submitCreatePostForm);
  }
}

async function submitCreatePostForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const username = getUsername();
  data.tags = [TAG, username];

  try {
    await createPost(data);
    alert("Post created successfully!");
    form.reset();
    location.reload();
  } catch (error) {
    alert(`Error: Something went wrong during post creation`);
  }
}
