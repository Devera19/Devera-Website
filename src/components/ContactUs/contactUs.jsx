import React from "react";
import "./contactUs.css";
import Reusable from "../utils/reusable/reusable";
import social from './social.jpeg'

export default function ContactUs() {
  return (
    <div className="contactus-container">
      <div className="contactus-header">
        <Reusable title="Contact us" subHeading="Let's keep in touch" />
      </div>

      <div className="contactus-body">
        <div className="contactus-left">
          <h2> Get in touch 🤝</h2>

          <div className="second-icons">
            <a href="https://www.facebook.com/profile.php?id=100015419709090">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-google-plus"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>

          <div className="send-message">
            <span className="send-your-message">Send your message !</span>
            <img src={social} alt="" />
          </div>
        </div>
        <div className="contactus-right">
          <span> Name </span>
          <input className="input-name"></input>
          <span> Email </span>
          <input className="input-email"></input>
          <span> Message </span>
          <input className="input-message"></input>
        </div>
      </div>
    </div>
  );
}
