import { POSTS_URL, NOROFF_API_KEY } from "../../constants/api.js";
import { getToken } from "../../utils/localStorage.js";
import { showLoader, hideLoader } from "../../utils/loader.js";

export async function deletePost(postId) {
  const token = getToken();

  if (!token) {
    throw new Error("No token found");
  }

  try {
    showLoader("loader");

    const POST_ID_URL = `${POSTS_URL}/${postId}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-NOROFF-API-KEY": NOROFF_API_KEY,
      },
    };

    const response = await fetch(POST_ID_URL, options);

    if (!response.ok) {
      throw new Error("Failed to delete post. Please try again.");
    }

    alert("Post deleted successfully!");
  } catch (error) {
    console.error(error);
    alert(error.message);
  } finally {
    hideLoader("loader");
  }
}
