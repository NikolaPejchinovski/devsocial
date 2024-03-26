import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import Button from "./Button";
import { fetchPosts } from "../services/fetchPosts";
import { usePosts } from "../contexts/PostContext";
import { handleCreatePost } from "../services/handleCreatePost";

const CreatePost = () => {
  const { user } = useUser();
  const [postContent, setPostContent] = useState("");
  const { setPosts } = usePosts();
  return (
    <div className="create-post-container">
      <div className="user-picture">
        <img
          src={user.profilePic.substring(
            user.profilePic.lastIndexOf("uploads\\")
          )}
          alt="profile-pic"
        />
      </div>
      <input
        type="text"
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="What's on your mind?"
      ></input>
      <span></span>
      <div className="create-post-btn-container">
        <Button
          text="Post"
          type="submit"
          className="create-post-btn"
          onClick={() =>
            handleCreatePost(() => fetchPosts(setPosts), setPosts, postContent)
          }
        />
      </div>
    </div>
  );
};

export default CreatePost;
