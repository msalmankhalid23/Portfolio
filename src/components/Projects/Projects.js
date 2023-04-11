import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import topshelf from "../../Assets/Projects/topshelf.png";
import code from "../../Assets/Projects/code-problems.jpeg";
import imdb from "../../Assets/Projects/imdb-clone.png";
import cart from "../../Assets/Projects/e-shopping-cart.png";

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
              imgPath={imdb}
              isBlog={false}
              title="Clone of IMDB Site"
              description="The clone of IMDB website. Its the sample project to showcase the work, how Rest API are integrated in the React based web app. It also represents The functioanl components and redux saga usage."
              ghLink="https://github.com/msalmankhalid23/imdb-clone-sk"
              demoLink="https://imdb-clone-sk.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="E-Shopping-Cart"
              description="Its the react sampe ecommerce site. It based on the syled components"
              ghLink="https://github.com/msalmankhalid23/e-shoppingcart"
              demoLink="https://c4mania.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={code}
              isBlog={false}
              title="Problem Solvings"
              description="The complex problems to sharpen the programming skills, These are basically Codility challenges are solved"
              ghLink="https://github.com/msalmankhalid23/complex-problems"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={topshelf}
              isBlog={false}
              title=".Net TopShelp (Third party)"
              description="Its sample project to use the TopShelf Thirdparty library"
              ghLink="https://github.com/msalmankhalid23/DotNetTopShelf" 
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
