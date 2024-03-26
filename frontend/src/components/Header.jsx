import Button from "./Button";
import { Link } from "react-router-dom/dist";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";
import axios from "axios";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { loggedIn } = useAuth();
  const { user } = useUser();

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/user/logout");
      const data = res.data;
      console.log(data);
      setLoggedIn(false);
      window.location.reload();
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <header>
      <div className="left-header-section">
        <Link to="/">
          <div className="logo">DevSocial</div>
        </Link>
      </div>

      {!loggedIn ? (
        <Button
          className="hamburger-menu"
          text={showMenu ? <FaTimes /> : <FaBars />}
          onClick={() => setShowMenu(!showMenu)}
        />
      ) : (
        <Button
          className="hamburger-menu"
          text={showSettings ? <FaTimes /> : <FaUser />}
          onClick={() => setShowSettings(!showSettings)}
        />
      )}
      <div className={`menu ${showMenu && "open"}`}>
        <Link to="/sign-in">
          <Button text="Sign In" className="sign-in-btn" />
        </Link>
        <Link to="/sign-up">
          <Button text="Sign Up" className="sign-up-btn" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
