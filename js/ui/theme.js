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

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  document.getElementById("logo").src =
    savedTheme === "dark" ? "../assets/images/3.png" : "../assets/images/1.png";
});

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
