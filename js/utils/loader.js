export function showLoader(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }
  const loader = document.createElement("div");
  loader.classList.add("loader");
  container.appendChild(loader);
}

export function hideLoader(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }
  const loader = document.querySelector(".loader");
  if (loader) {
    container.remove(loader);
  }
}
