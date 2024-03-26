import { useEffect, useState } from "react";
import Post from "./Post";
import { usePosts } from "../contexts/PostContext";
import { fetchPosts } from "../services/fetchPosts";

const Feed = () => {
  const { posts, setPosts } = usePosts();

  useEffect(() => {
    (async () => {
      await fetchPosts(setPosts);
    })();
  }, []);

  return (
    <div className="feed-container">
      <h1>Feed</h1>
      <span></span>
      <Post posts={posts} />
    </div>
  );
};

export default Feed;
