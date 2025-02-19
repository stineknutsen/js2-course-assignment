import { AUTH_LOGIN_URL } from "../../constants/api.js";

export async function loginUser(userData) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(AUTH_LOGIN_URL, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Registration failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
}
