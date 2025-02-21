export function renderSinglePost(container, post) {
  container.innerHTML = "";

  if (!post) {
    console.log("No post found");
    container.innerHTML = "<p>No post to display</p>";
    return;
  }

  const postElement = document.createElement("div");
  postElement.classList.add("post");

  const title = post.title;
  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const body = post.body;
  const bodyElement = document.createElement("p");
  bodyElement.textContent = body;

  container.append(postElement);
  postElement.append(titleElement, bodyElement);
}
