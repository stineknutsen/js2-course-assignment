import { PROFILES_URL, NOROFF_API_KEY } from "../../constants/api.js";
import { getToken } from "../../utils/localStorage.js";

export async function unfollowUser(username) {
  try {
    const token = getToken();

    if (!token) {
      throw new Error("No token found");
    }
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-NOROFF-API-KEY": NOROFF_API_KEY,
      },
    };

    const UNFOLLOW_URL = `${PROFILES_URL}/${username}/unfollow`;
    const response = await fetch(UNFOLLOW_URL, options);
    const json = await response.json();
    return json.data;
  } catch (error) {
    alert("Error unfollowing user");
  } finally {
  }
}
