import { searchPosts } from "../../utils/searchPosts.js";

export function searchPostsHandler(posts) {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    searchPosts(searchValue, posts);
  });
}
