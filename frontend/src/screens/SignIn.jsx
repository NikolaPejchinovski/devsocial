import React from "react";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  return (
    <div className="sign-in-page">
      <Header />
      <div className="sign-in-container">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
