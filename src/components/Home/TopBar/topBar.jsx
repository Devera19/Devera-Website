import React from "react";
import "./topBar.css";

export default function TopBar() {
  return (
    <div className="topbar-container">
      <div className="wrapper">
        <div className="left">
          <span className="logo">DEVERA</span>
        </div>

        <div className="right">
          <a href="#home" className="home">
            Home
          </a>
          <a href="#aboutus" className="aboutus">
            About us
          </a>
          <a href="#testimonials" className="testimonials">
            Testimonials
          </a>
          <a href="#contactus" className="contactus">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
