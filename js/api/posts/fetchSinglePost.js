import { POSTS_URL, NOROFF_API_KEY } from "../../constants/api.js";
import { getPostIdFromUrl } from "../../utils/getPostIdFromUrl.js";
import { showLoader, hideLoader } from "../../utils/loader.js";
import { getToken } from "../../utils/localStorage.js";

export async function fetchSinglePost(postId) {
  postId = getPostIdFromUrl();

  try {
    showLoader("loader");
    const token = getToken();

    if (!token) {
      throw new Error("No token found");
    }
    const POST_ID_URL = `${POSTS_URL}/${postId}`;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-NOROFF-API-KEY": NOROFF_API_KEY,
      },
    };

    const response = await fetch(POST_ID_URL, options);

    if (response.ok) {
      const post = await response.json();
      return post.data;
    } else {
      alert("Failed to fetch post");
    }
  } catch (error) {
    throw new Error("Failed to fetch post");
  } finally {
    hideLoader("loader");
  }
}
