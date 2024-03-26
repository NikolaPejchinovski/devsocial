import React from "react";
import { FaChevronDown, FaPlus, FaUser } from "react-icons/fa";
import Button from "./Button";
import User from "./User";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { fetchPosts } from "../services/fetchPosts";
import { usePosts } from "../contexts/PostContext";
import { handleCreatePost } from "../services/handleCreatePost";
import { useUser } from "../contexts/UserContext";

const DashboardHeader = ({ handleLogout }) => {
  const [showSettings, setShowSettings] = useState(false);
  const { user } = useUser();

  return (
    <header className="dashboard-header">
      <div className="left-header-section">
        <Link to="/">
          <div className="logo">DevSocial</div>
        </Link>
      </div>
      <div className="right-header-section">
        {user && (
          <div className="profile-menu">
            <img
              src={user.profilePic.substring(
                user.profilePic.lastIndexOf("uploads\\")
              )}
              alt="profile-pic"
              className="dashboard-header-profile-pic"
            />
            <span className="user-name">{user.username}</span>
            <FaChevronDown />
          </div>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
