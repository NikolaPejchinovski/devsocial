import axios from "axios";

export const handleFetchingUserData = async (setLoggedIn, setUser) => {
  try {
    const res = await axios.get("/api/user/profile");
    const data = res.data;
    setUser(data);
    setLoggedIn(true);
    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
    setLoggedIn(false);
  }
};
