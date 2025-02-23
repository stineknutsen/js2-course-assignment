import { NOROFF_API_KEY, TAG_URL } from "../../constants/api.js";
import { showLoader, hideLoader } from "../../utils/loader.js";
import { getToken } from "../../utils/localStorage.js";
export async function fetchPosts() {
  try {
    showLoader("loader");

    const token = getToken();

    if (!token) {
      throw new Error("No token found");
    }

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-NOROFF-API-KEY": NOROFF_API_KEY,
      },
    };

    const response = await fetch(TAG_URL, options);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching posts", error);
    throw error;
  } finally {
    hideLoader("loader");
  }
}
