import React from "react";
import User from "./User";
import Feed from "../components/Feed";
import CreatePost from "./CreatePost";
import Button from "./Button";
import { FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";
import { handleLogout } from "../services/handleLogout";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

const DashboardSection = () => {
  const { setLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="dashboard-section">
      <div className="dashboard-left-side">
        <div className="profile">
          <FaUser />
          <span>Profile</span>
        </div>
        <div className="settings">
          <FaCog />
          <span>Settings</span>
        </div>
        <Button
          text={
            <div>
              <FaSignOutAlt /> Logout
            </div>
          }
          onClick={() => handleLogout(navigate, setLoggedIn)}
        />
      </div>
      <div className="dashboard-middle">
        <CreatePost />
        <Feed />
      </div>
      <div className="dashboard-right-side"></div>
    </div>
  );
};

export default DashboardSection;
