import { registerUser } from "../../api/auth/registerUser.js";

export function registerHandler() {
  const registerForm = document.querySelector("#register-form");

  if (registerForm) {
    registerForm.addEventListener("submit", submitRegisterForm);
  }
}
async function submitRegisterForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    const response = await registerUser(data);
    alert("Registration successful!");
    console.log("User registeres", response);

    location.href = "/account/login.html";
  } catch (error) {
    alert(`Error: Something went wrong during registration`);
  }
}
