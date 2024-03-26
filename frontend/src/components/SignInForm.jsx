import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { handleSignIn } from "../services/handleSignIn";

const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [unauthorized, isUnauthorized] = useState(false);

  return (
    <div className="form-container">
      <form
        className="sign-in-form"
        onSubmit={(e) =>
          handleSignIn(e, email, password, navigate, isUnauthorized)
        }
      >
        <h1>Welcome Back,</h1>
        <h4 style={{ color: "red", fontWeight: "400" }}>
          {unauthorized && "Invalid email or password, try again"}
        </h4>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="forgot-password">Forgot Password?</p>
        <div className="form-buttons">
          <Button type="submit" className="form-submit-btn" text="Sign In" />
          <small>
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </small>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
