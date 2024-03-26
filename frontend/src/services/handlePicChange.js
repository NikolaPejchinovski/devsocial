import axios from "axios";

export const handlePicChange = async (e, image, setClicked) => {
  e.preventDefault();
  console.log(image);
  const formData = new FormData();
  formData.append("file", image);
  console.log(`formData: ${formData}`);
  try {
    const res = await axios.post("/api/user/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    console.log(data);
    setClicked(false);
    window.location.reload();
  } catch (error) {
    console.error("Upload unsuccessfull", error);
  }
};
