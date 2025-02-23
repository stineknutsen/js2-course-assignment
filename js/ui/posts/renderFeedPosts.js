import { getToken } from "../../utils/localStorage.js";

export function renderFeedPosts(container, posts) {
  const userLoggedIn = getToken();

  if (userLoggedIn) {
    const createPost = document.getElementById("create-post");
    createPost.style.display = "block";
  }

  const searcPosts = document.getElementById("search-container");
  searcPosts.style.display = "block";

  if (!posts || posts.length === 0) {
    container.innerHTML = "<p>No posts to display</p>";
    return;
  }

  container.innerHTML = "";

  posts.forEach((post) => {
    const postLink = document.createElement("a");
    postLink.href = `./post/index.html?id=${post.id}`;

    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.classList.add("post-link");

    const title = post.title;
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const body = post.body;
    const bodyElement = document.createElement("p");
    bodyElement.textContent = body;

    const author = post.tags[1];
    const authorElement = document.createElement("p");
    authorElement.textContent = "Author: " + author;

    container.append(postLink);
    postLink.append(postElement);
    postElement.append(titleElement, bodyElement, authorElement);
  });
}
