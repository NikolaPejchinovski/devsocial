import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <h1 className="logo" style={{ fontSize: "48px" }}>
          DevSocial
        </h1>
        <p className="quote">"Strengthening Networks, Shaping the Future."</p>
      </div>
      <ul className="footer-links1">
        <li>Home</li>
        <li>About</li>
        <li>Company</li>
        <li>How to use</li>
      </ul>
      <ul className="footer-links2">
        <li>Sign In</li>
        <li>Sign Up</li>
        <li>Support</li>
        <li>Terms</li>
      </ul>
      <ul className="footer-links3">
        <li>LinkedIn</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>YouTube</li>
      </ul>
    </footer>
  );
};

export default Footer;
