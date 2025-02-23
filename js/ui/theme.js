export function toggleTheme() {
  const htmlElement = document.documentElement;
  const logo = document.getElementById("logo");
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  logo.src =
    newTheme === "dark" ? "../assets/images/3.png" : "../assets/images/1.png";
}

export function initialiseTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const logo = document.getElementById("logo");
  logo.src =
    savedTheme === "dark" ? "../assets/images/3.png" : "../assets/images/1.png";

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

document.addEventListener("DOMContentLoaded", initialiseTheme);
