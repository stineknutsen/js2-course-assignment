/*

import { PROFILES_URL, NOROFF_API_KEY } from "../../constants/api.js";
import { getToken } from "../../utils/localStorage.js";


export async function fetchUsers() {
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

    const response = await fetch(PROFILES_URL, options);
    if (!response.ok) {
      throw new Error("Failed to fetch profiles.");
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
*/
