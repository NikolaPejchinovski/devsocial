import axios from "axios";

export const handleCreatePost = async (fetchPosts, setPosts, postContent) => {
  try {
    const res = await axios.post("/api/user/post/create", {
      content: postContent,
    });
    await fetchPosts(setPosts);
  } catch (error) {
    console.error("Couldn't create post", error);
  }
};
