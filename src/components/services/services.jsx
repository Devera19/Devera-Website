import React from "react";
import Reusable from "../utils/reusable/reusable";
import Card from "./cards/card";
import "./services.css";

export default function Services() {
  return (
    <div className="services-container" id="services">
      <Reusable
        className="reusable-services"
        title="Services"
        subHeading="What can we do for you"
      />

      <div className="cards-container">
        <Card
          className="reusable-cards"
          background  
          title="Web Development"
          description="Creation of front and back end websites and stuff and stuff and stuff "
        />
        <Card
          className="reusable-cards"
          background = { <img src="./home-bg.jpg" alt=" Not available" /> } 
          title="Web Development"
          description="Creation of front and back end websites and stuff and stuff and stuff "
        />
        <Card
          className="reusable-cards"
          background = { <img src="./home-bg.jpg" alt=" Not available" /> } 
          title="Web Development"
          description="Creation of front and back end websites and stuff and stuff and stuff "
        />
        <Card
          className="reusable-cards"
          background = { <img src="./home-bg.jpg" alt=" Not available" /> } 
          title="Web Development"
          description="Creation of front and back end websites and stuff and stuff and stuff "
        />
        <Card
          className="reusable-cards"
          background = { <img src="./home-bg.jpg" alt=" Not available" /> } 
          title="Web Development"
          description="Creation of front and back end websites and stuff and stuff and stuff "
        />
      </div>
    </div>
  );
}
