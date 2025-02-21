import { getToken } from "../../utils/localStorage.js";
import { NOROFF_API_KEY, POSTS_URL, TAG } from "../../constants/api.js";

export async function createPost(post) {
  try {
    const token = getToken();

    if (!token) {
      throw new Error("No token found");
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-NOROFF-API-KEY": NOROFF_API_KEY,
      },
      body: JSON.stringify(post),
    };

    const TAG_URL = `${POSTS_URL}?_tag=${TAG}`;
    const response = await fetch(TAG_URL, options);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching posts", error);
    throw error;
  }
}
