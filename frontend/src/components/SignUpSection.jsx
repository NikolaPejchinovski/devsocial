import React from "react";
import SignUpForm from "./SignUpForm";

const SignUpSection = () => {
  return (
    <section className="sign-up-section">
      <div className="left-side">
        <SignUpForm />
      </div>
      <div className="right-side">
        <img src="/chat-icon.svg" alt="chat-icon" className="chat-icon" />
      </div>
    </section>
  );
};

export default SignUpSection;
