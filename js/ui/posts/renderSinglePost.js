export function renderSinglePost(container, post) {
  container.innerHTML = "";

  if (!post) {
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

  const author = post.tags[1];
  const authorElement = document.createElement("a");
  authorElement.href = `../account/user-profile.html?name=${author}`;
  authorElement.textContent = "Author: " + author;
  authorElement.classList.add("author-link");

  container.append(postElement);
  postElement.append(titleElement, bodyElement, authorElement);
}
