/**
 * Copies the current page URL to the clipboard.
 * Displays a success or error message depending on the outcome.
 *
 * @function
 */
export function copyUrlToClipboard() {
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
