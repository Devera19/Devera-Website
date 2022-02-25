import React from "react";
import Reusable from "../utils/reusable/reusable";
import "./aboutUs.css";
import Person from "./person/person";

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <h4 className="aboutus-header">
        We're a group of six enthiousiastic computer science engeneers with high
        hopes and dreams, full of petenciel and very hard workers, we're here to
        satisfy every need that our clients can hope for.
      </h4>
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
