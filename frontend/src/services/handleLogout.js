import axios from "axios";

export const handleLogout = async (navigate, setLoggedIn) => {
  try {
    const res = await axios.post("/api/user/logout");
    const data = res.data;
    console.log(data);
    navigate("/");
    setLoggedIn(false);
    return data;
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};
