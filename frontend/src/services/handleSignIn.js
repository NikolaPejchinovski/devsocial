import axios from "axios";

export const handleSignIn = async (
  event,
  email,
  password,
  navigate,
  isUnauthorized
) => {
  try {
    event.preventDefault();

    const res = await axios.post("/api/user/login", {
      email,
      password,
    });

    const data = res.data;
    console.log(data);
    isUnauthorized(false);
    navigate("/dashboard");
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 404) {
      isUnauthorized(true);
    }
    console.error(error);
  }
};
