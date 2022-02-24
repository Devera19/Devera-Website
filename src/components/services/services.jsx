import React from "react";
import Reusable from "../utils/reusable/reusable";
import "./services.css";

export default function Services() {
  return (
    <div className="services-container" id="services">
      <Reusable className="reusable-services" title="Services" subHeading="What can we do for you" />

      <section className="cards">
        <div className="card-shape">
            <div className="icon">
                Icon here
            </div>
            <div className="info">
                <h3>Web Development</h3>
                <p>Creation of backend and frontend applications</p>
            </div>
        </div>
      </section>

    </div>
  );
}
