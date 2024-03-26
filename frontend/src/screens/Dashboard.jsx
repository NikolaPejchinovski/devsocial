import React, { useEffect, useState } from "react";
import DashboardSection from "../components/DashboardSection";
import DashboardHeader from "../components/DashboardHeader";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";
import { handleFetchingUserData } from "../services/handleFetchingUserData";
import { handleLogout } from "../services/handleLogout";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { loggedIn, setLoggedIn } = useAuth();

  useEffect(() => {
    (async () => {
      await handleFetchingUserData(setLoggedIn, setUser);
    })();
  }, []);

  return (
    <div className="dashboard">
      <DashboardHeader
        handleLogout={() => handleLogout(navigate, setLoggedIn)}
      />
      {loggedIn ? (
        <DashboardSection />
      ) : (
        <h1 style={{ color: "white" }}>User not found!</h1>
      )}
    </div>
  );
};

export default Dashboard;
