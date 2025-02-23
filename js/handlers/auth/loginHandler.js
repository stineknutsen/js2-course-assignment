import { loginUser } from "../../api/auth/loginUser.js";
import { setToken, setUsername } from "../../utils/localStorage.js";
import { showLoader, hideLoader } from "../../utils/loader.js";

export function loginHandler() {
  const loginForm = document.querySelector("#login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      showLoader("loader");

      try {
        await submitLoginForm(event);
      } catch (error) {
        alert(`Error: Something went wrong during login`);
      } finally {
        hideLoader("loader");
      }
    });
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

    location.href = "/index.html";
  } catch (error) {
    alert(`Error: Something went wrong during login`);
  }
}
