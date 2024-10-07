import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import Particle from "../Particle";
import { BsGithub, BsPlayCircle } from "react-icons/bs";

// Import your project images
import leaf from "../../Assets/Projects/wimmo.png";
import emotion from "../../Assets/Projects/DreamTravel.png";
import editor from "../../Assets/Projects/codeEditor.png";
import wimmo from "../../Assets/Projects/wimmo.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/DreamTravel.png";

// VideoModal component
const VideoModal = ({ show, onHide, videoSrc }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Project Demo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ratio ratio-16x9">
          <video src={videoSrc} controls />
        </div>
      </Modal.Body>
    </Modal>
  );
};

// Updated ProjectCard component
const ProjectCard = ({ imgPath, title, description, ghLink, demoVideo }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub /> &nbsp; GitHub
        </Button>
        {demoVideo && (
          <Button
            variant="primary"
            onClick={() => setShowModal(true)}
            style={{ marginLeft: "10px" }}
          >
            <BsPlayCircle /> &nbsp; Demo
          </Button>
        )}
        <VideoModal
          show={showModal}
          onHide={() => setShowModal(false)}
          videoSrc={demoVideo}
        />
      </Card.Body>
    </Card>
  );
};

// The rest of the code remains the same...

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wimmo}
              title="Welcome Immo"
              description="Discover a revolutionary way to manage real estate with Welcome Immo! This smart platform takes the hassle out of property management, making it easier than ever for agencies to stay on top of their listings and communicate effortlessly with clients. Whether you're a busy agent or a potential homeowner, Welcome Immo simplifies everything – from receiving instant updates on new properties to interacting with a helpful AI assistant. Stay connected, save time, and enjoy a smooth, intuitive experience that puts you in control of real estate like never before."
              ghLink="https://github.com/soumyajit4419/wimmo"
              demoVideo="../../Assets/wimmo.mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoVideo="../../Assets/DreamTravel.mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoVideo="/path/to/editor-demo.mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoVideo="/path/to/plant-ai-demo.mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoVideo="/path/to/ai-social-good-demo.mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoVideo="/path/to/emotion-detection-demo.mp4"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;