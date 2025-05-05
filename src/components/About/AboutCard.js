import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanmith Devadiga</span> from{" "}
            <span className="purple">Mangalore, Karnataka, India.</span>
            <br />
            I am currently interning as a Software Developer at{" "}
            <span className="purple">Vision Flow Technologies Pvt. Ltd.</span>
            <br />
            I have completed my Diploma in Computer Science and Engineering at SNM Polytechnic, Moodbidri.
            <br />
            <br />
            During my internship, I collaborated on front-end development using ReactJS,
            built full-stack web applications, participated in UI/UX design, and used modern tools to meet project goals.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Sanmith</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
