import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { likePost } from "../services/likePost";
import { usePosts } from "../contexts/PostContext";
import { fetchPosts } from "../services/fetchPosts";

const Post = ({ posts }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const { setPosts } = usePosts();
  const formatDate = (date) => {
    const currentDate = new Date(date);

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    return `${hours}:${minutes} ${day}/${month}/${year}`;
  };

  function handleLike(postId) {
    setLiked(true);
    likePost(postId, fetchPosts, setPosts);
  }

  return (
    <div className="post-container">
      {posts
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((post) => (
          <div key={post._id} className="post">
            <div className="post-author">
              <img
                className="author-profile-pic"
                src={post.author.profilePic.substring(
                  post.author.profilePic.lastIndexOf("uploads\\")
                )}
                alt="profile-pic"
              />
              <div className="date-and-name">
                <h4 className="author-username">{post.author.username}</h4>
                <div className="date-of-creation">
                  {formatDate(post.createdAt)}
                </div>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="stats">
              <div className="likes">
                <div
                  className={`heart ${liked && "liked"}`}
                  onDoubleClick={() => handleLike(post._id)}
                >
                  {liked ? <FaHeart /> : <FaRegHeart />}
                </div>{" "}
                {post.likes.length}
              </div>
              <div className="comments"></div>
              <div className="shares"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Post;
