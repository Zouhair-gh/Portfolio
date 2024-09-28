import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">GHAOURI Zouhair</span>{" "}
            from <span className="purple">Morocco</span>.
            <br />
            I am currently a 2nd-year Software Engineering student at the
            Moroccan School of Engineering Sciences.
            <br />
            I am passionate about exploring Web Development, DevOps, and
            Artificial Intelligence, always looking for opportunities to apply
            these cutting-edge technologies to real-world problems.
            <br />
            <br />
            Apart from coding, here are some activities I enjoy:
          </p>
          <ul>
          <li className="about-activity">
            <ImPointRight /> Volunteering to develop leadership and teamwork skills
          </li>
          <li className="about-activity">
            <ImPointRight /> Participating in Hackathons to hone problem-solving abilities
          </li>
          <li className="about-activity">
            <ImPointRight /> Continuous Learning through Online Courses and Certifications
          </li>
          <li className="about-activity">
            <ImPointRight /> Practicing Communication and Collaboration in Team Projects
          </li>
        </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always striving to innovate and create solutions that make a
            positive impact!"
          </p>
          <footer className="blockquote-footer">Zouhair</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
