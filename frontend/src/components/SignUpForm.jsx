import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { handleSignUp } from "../services/handleSignUp";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="sign-up-form-container">
      <h1>
        Join <span className="devsocial">DevSocial</span>
      </h1>
      <form
        className="sign-up-form"
        onSubmit={(e) => handleSignUp(e, username, email, password, navigate)}
      >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-buttons">
          <Button
            type="submit"
            className="form-submit-btn"
            text="Create Account"
          />
          <small>
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </small>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
