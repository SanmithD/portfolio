import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/nexa.png";
import leaf from "../../Assets/Projects/pet.jpg";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

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
              imgPath={chatify}
              isBlog={false}
              title="ChatBox"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NexaMind"
              description="My personal Ai page build with React.js, Tailwind Css and Gemini ai API key which takes the input from user and provide response to the User. Supports dark mode and easy to write blogs using markdown."
              demoLink="chat-ai-mauve-nu.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Roomify"
              description="Online Room booking platform build with MERN stack. Which supports Gemini ai api key in the website. And Cloudinary form media files."             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="My Pet"
              description="Designed and developed a pet adoption platform allowing users to view, adopt pets, and donate. Implemented user feedback, contact message features, and secure cloud media handling. Deployed the app on Vercel and Render for seamless scalability and performance. "
              demoLink="pet-adoption-front.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
