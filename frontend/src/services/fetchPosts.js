import axios from "axios";

export const fetchPosts = async (setPosts) => {
  try {
    const res = await axios.get("/api/posts");
    const data = res.data;
    setPosts(data.posts);
  } catch (error) {
    console.error("Can't fetch posts", error);
  }
};
