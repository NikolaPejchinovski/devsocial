import React, { useEffect } from "react";
import Button from "./Button";
import { Link, Navigate } from "react-router-dom";
import { handleAnimatedLine } from "../services/handleAnimatedLine";
import { useAuth } from "../contexts/AuthContext";

const Hero = () => {
  const { loggedIn } = useAuth();

  useEffect(() => {
    handleAnimatedLine();
  }, []);

  return (
    <section className="hero-section">
      {loggedIn && <Navigate to="/dashboard" replace={true} />}
      <div className="hero-container">
        <h1 className="hero-heading">
          <span className="hp1">Dive into the Developer</span>
          <span className="hp2">
            {" "}
            Community<span className="devsocial"> DevSocial</span>
          </span>
        </h1>
        <div className="hero-btns">
          <Link to="/sign-in">
            <Button text="Log In" className="login-btn" />
          </Link>
          <Link to="/sign-up">
            <Button text="Create Account" className="create-account-btn" />
          </Link>
        </div>
        <div className="animated-line">
          <span className="circle"></span>
          <span className="line"></span>
          <span className="circle"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
