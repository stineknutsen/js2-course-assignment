import { getPostIdFromUrl } from "../../utils/getPostIdFromUrl.js";
import { fetchSinglePost } from "../../api/posts/fetchSinglePost.js";
import { renderSinglePost } from "../../ui/posts/renderSinglePost.js";
import { copyCurrentUrlToClipboard } from "../../utils/copyUrlToClipboard.js";

export async function displaySinglePost() {
  const postId = getPostIdFromUrl();

  if (!postId) {
    window.location.href = "/";
  }

  const container = document.getElementById("post-container");

  try {
    const post = await fetchSinglePost(postId);
    renderSinglePost(container, post);
    const shareButton = document.getElementById("share-button");
    if (shareButton) {
      shareButton.addEventListener("click", copyCurrentUrlToClipboard);
    }
  } catch (error) {
    console.error("Error displaying post", error);
  }
}
