export async function renderUserProfile(container, posts) {
  const urlParams = new URLSearchParams(window.location.search);
  const profileUsername = urlParams.get("name");

  const headerContainer = document.createElement("div");
  const profilePostsContainer = document.createElement("div");

  const username = document.createElement("h1");
  username.textContent = "Profile of: " + profileUsername;

  headerContainer.append(username);

  profilePostsContainer.textContent = "Posts: ";

  posts.forEach((post) => {
    const postElement = document.createElement("a");
    postElement.href = `../../post/index.html?id=${post.id}`;
    postElement.classList.add("post");

    const title = post.title;
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const body = post.body;
    const bodyElement = document.createElement("p");
    bodyElement.textContent = body;

    profilePostsContainer.append(postElement);
    postElement.append(titleElement, bodyElement);
  });

  console.log(profileUsername);
  console.log("hello, great success");

  container.append(headerContainer, profilePostsContainer);
}
