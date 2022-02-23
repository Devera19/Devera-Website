import React from "react";
import Typical from "react-typical";
import "./home.css";

export default function Home() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, We're <span className="highlighted-text">DEVERA</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Dev ",
                    1000,
                    "Desktop Dev 💻",
                    1000,
                    "Web Designer 🖥",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me </button>
            <a href="#">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    
    </div>
  );
}
