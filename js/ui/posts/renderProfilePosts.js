export function renderProfilePosts(container, posts) {
  if (!posts || posts.length === 0) {
    container.innerHTML = "<p>No posts to display</p>";
    return;
  }

  container.innerHTML = "Your posts:";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const title = post.title;
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const body = post.body;
    const bodyElement = document.createElement("p");
    bodyElement.textContent = body;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-div");

    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.classList.add("btn");
    editButton.textContent = "Edit";
    editButton.dataset.id = post.id;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.classList.add("btn-secondary");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.id = post.id;

    buttonsDiv.append(editButton, deleteButton);
    postElement.append(titleElement, bodyElement, buttonsDiv);
    container.append(postElement);
  });
}
