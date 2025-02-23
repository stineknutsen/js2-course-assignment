import { createPost } from "../../api/posts/createPost.js";
import { TAG } from "../../constants/api.js";
import { showLoader, hideLoader } from "../../utils/loader.js";
import { getUsername } from "../../utils/localStorage.js";

export function createPostHandler() {
  showLoader("loader");
  try {
    const form = document.getElementById("create-post-form");

    if (!form) {
      alert("Form not found");
    }
    form.addEventListener("submit", submitCreatePostForm);
  } catch (error) {
    alert("Error: Something went wrong during post creation");
  } finally {
    hideLoader("loader");
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
