import { getPostIdFromUrl } from "../../utils/getPostIdFromUrl.js";
import { fetchSinglePost } from "../../api/posts/fetchSinglePost.js";

export async function renderEditPost() {
  const postId = getPostIdFromUrl();

  if (!postId) {
    alert("No post ID found in the URL. Redirecting...");
    window.location.href = "/account/profile.html";
    return;
  }

  try {
    const post = await fetchSinglePost(postId);

    if (post) {
      document.getElementById("title").value = post.title;
      document.getElementById("content").value = post.body;
    }
  } catch (error) {
    alert("Error displaying post");
  }
}
