import React from "react";
import Reusable from "../utils/reusable/reusable";
import "./aboutUs.css";

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      {" "}
      <Reusable
        className="heading"
        title={"About Us"}
        subHeading={"Why Choose Us"}
      />
    </div>
  );
}
