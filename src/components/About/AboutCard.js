import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Salman Khalid </span>
            from <span className="purple"> Lahore Punjab, Pakistan.</span>
            <br />I am a Senior Software Engineer. I am proficient in C#, ASP.NET, React, Vue, MS SQL Server and MYSQL and have extensive experience with JavaScript, and .Net Core. My attention to detail, communication and time management skills have proven beneficial to various software and systems development projects for business in such areas as <b>healthcare, retail and logistics.</b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Quality of work should always be preferred along with honesty to clients."{" "}
          </p>
          <footer className="blockquote-footer">M Salman Khalid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
