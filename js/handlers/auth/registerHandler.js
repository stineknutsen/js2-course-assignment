import { registerUser } from "../../api/auth/registerUser.js";
import { showLoader, hideLoader } from "../../utils/loader.js";

export function registerHandler() {
  const registerForm = document.querySelector("#register-form");

  if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      showLoader("loader");

      try {
        await submitRegisterForm(event);
      } catch (error) {
        alert(`Error: Something went wrong during registration`);
      } finally {
        hideLoader("loader");
      }
    });
  }
}

async function submitRegisterForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    await registerUser(data);
    alert("Registration successful!");
    location.href = "/account/login.html";
  } catch (error) {
    alert(`Error: Something went wrong during registration`);
  }
}
