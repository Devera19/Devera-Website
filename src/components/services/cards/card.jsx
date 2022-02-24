import React from "react";
import "./card.css";

export default function Card(props) {
  const { background, title, description } = props;
  return (
    <section className="cards">
      <div className="card-shape">
        <div className="icon">{background}</div>
        <div className="info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
