import { AUTH_REGISTER_URL } from "../../constants/api.js";
import { showLoader, hideLoader } from "../../utils/loader.js";

export async function registerUser(userData) {
  try {
    showLoader("loader");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(AUTH_REGISTER_URL, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Registration failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  } finally {
    hideLoader("loader");
  }
}
