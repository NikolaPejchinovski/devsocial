import axios from "axios";

export const likePost = async (postId, fetchPosts, setPosts) => {
  try {
    const res = await axios.put("/api/user/post/like", {
      postId,
    });
    const data = res.data;
    fetchPosts(setPosts);
  } catch (error) {
    // Handle errors if the request fails
    console.error("Error liking post:", error);
  }
};
