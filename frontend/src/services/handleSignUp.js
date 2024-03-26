import axios from "axios";

export const handleSignUp = async (e, username, email, password, navigate) => {
  try {
    e.preventDefault();
    const res = await axios.post("/api/user/register", {
      username,
      email,
      password,
    });

    const data = res.data;
    navigate("/");
  } catch (error) {
    console.error(error);
  }
};
