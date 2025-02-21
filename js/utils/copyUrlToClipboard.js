export function copyCurrentUrlToClipboard() {
  const url = window.location.href;

  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert("Link copied to clipboard!");
    })
    .catch((error) => {
      alert(`Error copying link to clipboard: ${error}`);
    });
}
