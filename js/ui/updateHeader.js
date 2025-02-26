import { getToken, getUsername } from "../utils/localStorage.js";

export function updateHeader() {
  document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.getElementById("register-button");
    const loginButton = document.getElementById("login-button");

    const username = getUsername();
    const userLoggedIn = getToken();

    if (userLoggedIn) {
      registerButton.textContent = `${username}`;
      registerButton.href = "/account/profile.html";
      loginButton.textContent = "Sign Out";
      loginButton.href = "#";

      loginButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (confirm("Are you sure you want to sign out?")) {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          alert("You have been signed out");
          window.location.href = "/account/login.html";
        }
      });
    } else {
      alert("Log in to see displayed posts");
    }
  });
}
