import { getPostIdFromUrl } from "../../utils/getPostIdFromUrl.js";
import { fetchSinglePost } from "../../api/posts/fetchSinglePost.js";
import { renderSinglePost } from "../../ui/posts/renderSinglePost.js";
import { copyUrlToClipboard } from "../../utils/copyUrlToClipboard.js";
import { showLoader, hideLoader } from "../../utils/loader.js";

export async function displaySinglePost() {
  showLoader("loader");
  try {
    const postId = getPostIdFromUrl();

    if (!postId) {
      window.location.href = "/";
    }

    const container = document.getElementById("post-container");

    const post = await fetchSinglePost(postId);
    renderSinglePost(container, post);
    const shareButton = document.getElementById("share-button");
    if (shareButton) {
      shareButton.addEventListener("click", copyUrlToClipboard);
    }
  } catch (error) {
    alert("Error: Something went wrong during post display");
  } finally {
    hideLoader("loader");
  }
}
