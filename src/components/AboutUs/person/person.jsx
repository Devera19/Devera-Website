import React from "react";
import "./person.css";


export default function Person(props) {
  const { background, languages, title, desc } = props;

  return (
    <section className="person-cards">
      <div className="person-card-shape">
        <div className="header-info">
          <div className="person-icon">
          <img src={background} alt="logo" />
          </div>
          <span className="full-name">{title}</span>
        </div>
        <div className="person-info">
          <p>{desc}</p>
        </div>
        <div className="more-info">
        <i class="fa-solid fa-globe"></i>
         <span>{languages}</span>
        </div>

        <div className="contact-staff">

        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-github"></i>
        </div>

          
      </div>
    </section>
  );
}
