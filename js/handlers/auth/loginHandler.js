import { loginUser } from "../../api/auth/loginUser.js";
import { setToken, setUsername } from "../../utils/localStorage.js";

export function loginHandler() {
  const loginForm = document.querySelector("#login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", submitLoginForm);
  }
}

async function submitLoginForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    const response = await loginUser(data);

    const { data: userData } = response;
    const { accessToken, name } = userData;

    setToken(accessToken);
    setUsername(name);

    alert("Login successful!");
    console.log("User logged in", response);

    location.href = "/index.html";
  } catch (error) {
    alert(`Error: Something went wrong during login`);
  }
}
