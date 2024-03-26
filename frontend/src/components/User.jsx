import React, { useState } from "react";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { handlePicChange } from "../services/handlePicChange";

const User = ({ user, handleLogout }) => {
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleFileSelection = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  if (!user) {
    return <div>Loading user data...</div>; // Handle case when user data is not yet available
  }

  return (
    <div className="user-container">
      {clicked && <div className="main-profile-pic-change-container"></div>}
      {clicked && (
        <div className="profile-pic-change">
          <div
            className="profile-pic-change-exit"
            onClick={() => setClicked(false)}
          >
            <FaTimes />
          </div>
          <h3>Upload a profile picture</h3>
          <form
            className="profile-pic-form"
            onSubmit={(e) => handlePicChange(e, image, setClicked)}
            encType="multipart/form-data"
          >
            <input
              type="file"
              name="file"
              accept=".png,.jpg,.jpeg"
              required
              onChange={handleFileSelection}
            />
            <Button text="Upload" type="submit" />
          </form>
        </div>
      )}
      <div className="settings-container">
        <div className="settings-top">
          <img
            src={user.profilePic.substring(
              user.profilePic.lastIndexOf("uploads\\")
            )}
            alt=""
            className="profile-pic"
            onClick={() => setClicked(true)}
          />
          <h4 className="username">
            Username:
            <br />
            <span className="username" style={{ fontWeight: "400" }}>
              {user.username}
            </span>
          </h4>
          <h4 className="email">
            Email:{" "}
            <span className="email" style={{ fontWeight: "400" }}>
              {user.email}
            </span>
          </h4>
        </div>
        <div className="settings-bottom">
          <Button text="Logout" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default User;
