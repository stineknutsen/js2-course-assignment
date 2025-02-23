import { POSTS_URL, NOROFF_API_KEY } from "../../constants/api.js";
import { getToken } from "../../utils/localStorage.js";
import { getPostIdFromUrl } from "../../utils/getPostIdFromUrl.js";
import { showLoader, hideLoader } from "../../utils/loader.js";

export async function updatePost(postId, updatedData) {
  try {
    showLoader("loader");
    postId = getPostIdFromUrl();
    const token = getToken();

    if (!token) {
      throw new Error("No token found");
    }

    const POST_ID_URL = `${POSTS_URL}/${postId}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-NOROFF-API-KEY": NOROFF_API_KEY,
      },
      body: JSON.stringify(updatedData),
    };

    const response = await fetch(POST_ID_URL, options);

    if (!response.ok) {
      throw new Error("Failed to update post. Please try again.");
    }

    alert("Post updated successfully!");
    return response.json();
  } catch (error) {
    console.error(error);
    alert(error.message);
  } finally {
    hideLoader("loader");
  }
}
