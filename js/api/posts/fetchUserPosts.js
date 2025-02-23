import { getToken } from "../../utils/localStorage.js";
import { NOROFF_API_KEY, PROFILES_URL } from "../../constants/api.js";

export async function fetchUserPosts(username) {
  try {
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

    const USER_URL = `${PROFILES_URL}/${username}/posts`;
    const response = await fetch(USER_URL, options);
    const json = await response.json();
    return json.data;
  } catch (error) {
    alert("Error fetching posts");
    throw error;
  } finally {
  }
}
