import React from "react";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="sign-up-page">
      <Header />
      <div className="sign-up-container">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
