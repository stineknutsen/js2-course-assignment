import { followButtonHandler } from "../../handlers/profiles/followButtonHandler.js";

export async function renderUserProfile(container, posts) {
  const urlParams = new URLSearchParams(window.location.search);
  const profileUsername = urlParams.get("name");

  const headerContainer = document.createElement("div");
  const profilePostsContainer = document.createElement("div");

  const username = document.createElement("h1");
  username.textContent = profileUsername + "'s Profile";

  const button = document.createElement("button");
  button.id = "follow-button";
  button.classList.add("btn");
  button.textContent = "Follow";
  button.dataset.username = profileUsername;
  button.dataset.following = "false";

  headerContainer.append(username, button);

  profilePostsContainer.textContent = "Posts: ";

  posts.forEach((post) => {
    const postLink = document.createElement("a");
    postLink.href = `../../post/index.html?id=${post.id}`;

    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.classList.add("post-link");

    const title = post.title;
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const body = post.body;
    const bodyElement = document.createElement("p");
    bodyElement.textContent = body;

    profilePostsContainer.append(postLink);
    postLink.append(postElement);
    postElement.append(titleElement, bodyElement);
  });

  container.append(headerContainer, profilePostsContainer);

  button.addEventListener("click", followButtonHandler);
}
