import React from "react";
import "./person.css";

export default function Person(props) {
  const { title, desc } = props;

  return (
    <section className="person-cards">
      <div className="person-card-shape">
        <div className="header-info">
          <div className="person-icon">
            <span className="full-name">{title}</span>
          </div>
        </div>
        <div className="person-info">
          <p>{desc}</p>
        </div>
      </div>
    </section>
  );
}
