import React from "react";
import "./aboutUs.css";
import Person from "./person/person";
import madara from './images/madara.jpg'
import itachi from './images/itachi.jpg'
import obito from './images/obito.jpg'
import deidara from './images/deidara.jpg'
import kakuzu from './images/kakuzu.jpg'
import pain from './images/pain.jpg'

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <h4 className="aboutus-header">
        We're a group of six enthusiastic computer science engineers with high
        hopes and dreams, full of potencial and very hard workers, we're here to
        satisfy every need that our clients can hope for.
      </h4>
      <div className="person-cards-container">
        <Person
          title="Boulkenafet Sami"
          desc="Front End and Desktop Developer "
          languages="English, French, Arabic."
          background={madara}
        />
        <Person
          title="Zahreddine Soualem"
          desc="Backend and Logo Designer "
          languages="English, Arabic."
          background={itachi}
        />
        <Person
          title="Akram Akram"
          desc="Front End Developer "
          languages="English, French, Arabic."
          background={obito}
        />
        <Person
          title="Khaled Benbouabdallah"
          desc="Back End Developer "
          languages="English, French, Arabic."
          background={deidara}
        />
        <Person
          title="Mohamed Mohamed"
          desc="UI & UX Designer  "
          languages="English, French, Arabic."
          background={kakuzu}
        />
        <Person
          title="Islem Islem"
          desc="Mobile Application developer "
          languages="English, French, Arabic."
          background={pain}
        />
      </div>
    </div>
  );
}
