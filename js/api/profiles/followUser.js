import { PROFILES_URL, NOROFF_API_KEY } from "../../constants/api.js";
import { getToken } from "../../utils/localStorage.js";

export async function followUser(username) {
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

    const FOLLOW_URL = `${PROFILES_URL}/${username}/follow`;
    const response = await fetch(FOLLOW_URL, options);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error following user", error);
    throw error;
  }
}
