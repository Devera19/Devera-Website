import React from "react";
import Reusable from "../utils/reusable/reusable";
import Card from "./cards/card";
import "./services.css";
import home from './images/home.jpg'
import mobile from './images/mobile.PNG'
import design from './images/design.PNG'
import desktop from './images/desktop.jpg'
import logo from './images/logo.jpg'

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
          background={home}
          title="Web Development"
          description="Creation of front and back end websites and stuff and stuff and stuff "
        />
        <Card
          className="reusable-cards"
          title="Mobile Application"
          background={mobile}
          description="Creation of front and back end websites and stuff and stuff and stuff "
        />
        <Card
          className="reusable-cards"
          title="UI & UX Design "
          background={design}
          description="Creation of front and back end websites and stuff and stuff and stuff "
        />
        <Card
          className="reusable-cards"
          title="Desktop Applications"
          background={desktop}
          description="Creation of front and back end websites and stuff and stuff and stuff "
        />
        <Card
          className="reusable-cards" 
          title="Logo Design"
          background={logo}
          description="Creation of front and back end websites and stuff and stuff and stuff "
        />
      </div>
    </div>
  );
}
