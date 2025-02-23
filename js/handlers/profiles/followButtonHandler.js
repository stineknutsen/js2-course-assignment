import { followUser } from "../../api/profiles/followUser.js";
import { unfollowUser } from "../../api/profiles/unfollowUser.js";

export async function followButtonHandler(event) {
  const button = event.target;
  const username = button.dataset.username;
  const isFollowing = button.dataset.following === "true";

  if (!username) {
    throw new Error("No username found");
  }

  if (!isFollowing) {
    await followUser(username);

    button.textContent = "Unfollow";
    button.dataset.following = "true";
  } else {
    await unfollowUser(username);

    button.textContent = "Follow";
    button.dataset.following = "false";
  }
}
