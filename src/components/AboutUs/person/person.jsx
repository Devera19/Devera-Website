import React from "react";
import "./person.css";

export default function Person(props) {

    const {title, desc} = props

    return (
    <section className="person-cards">
      <div className="person-card-shape">
        <div className="person-icon"></div>
        <div className="person-info">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </section>
  );
}
