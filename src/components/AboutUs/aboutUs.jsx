import React from "react";
import Reusable from "../utils/reusable/reusable";
import "./aboutUs.css";
import Person from "./person/person";

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      {" "}
      <Reusable
        className="heading"
        title={"About Us"}
        subHeading={"Why Choose Us"}
      /> 

      <div className="person-cards-container">

      <Person
        title="Boulkenafet Sami"
        desc="Sometimes ou just want to suicide "
      />
      <Person
        title="Boulkenafet Sami"
        desc="Sometimes ou just want to suicide "
      />
      <Person
        title="Boulkenafet Sami"
        desc="Sometimes ou just want to suicide "
      />
      <Person
        title="Boulkenafet Sami"
        desc="Sometimes ou just want to suicide "
      />
      <Person
        title="Boulkenafet Sami"
        desc="Sometimes ou just want to suicide "
      />
    </div>
      </div>
  );
}
