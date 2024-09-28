import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Portrait.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              From the moment I wrote my first line of code, I discovered a passion for{" "}
              <b className="purple">problem-solving</b> and <b className="purple">innovation</b>. Over time, I have honed my skills and continue to grow in the field of software engineering.
              <br />
              <br />
              I’m proficient in technologies such as{" "}
              <i>
                <b className="purple">Python with Django, JavaScript with React.js, and PHP with Laravel</b>
              </i>, along with a strong command of front-end essentials like{" "}
              <i>
                <b className="purple">HTML, CSS,</b>
              </i>{" "}
              and <b className="purple">Bootstrap</b>.
              <br />
              <br />
              My areas of interest lie in{" "}
              <b className="purple">Cloud computing, DevOps,</b> and{" "}
              <b className="purple">Artificial Intelligence</b>, where I aspire to build solutions that drive efficiency and unlock new possibilities in technology.
              <br />
              <br />
              Whenever possible, I channel my passion for development into projects, utilizing{" "}
              <i>
                <b className="purple">modern frameworks</b>
              </i>{" "}
              and tools like <b className="purple">React.js</b> to bring ideas to life. I'm driven by a desire to push boundaries, learn continuously, and contribute to the future of technology.
              <br />
              <br />
              Outside of tech, I’m passionate about <b className="purple">sports</b> and actively involved in <b className="purple">volunteering</b>, which helps me grow personally while giving back to the community.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Zouhair-gh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zouhair-ghaouri-0a843b217/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
