import { getToken } from "../../utils/localStorage.js";
import { NOROFF_API_KEY, PROFILES_URL } from "../../constants/api.js";

export async function fetchProfile(username) {
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

    const PROFILE_URL = `${PROFILES_URL}/${username}`;
    const response = await fetch(PROFILE_URL, options);
    const json = await response.json();
    return json.data;
  } catch (error) {
    alert("Error fetching profile");
  } finally {
  }
}
