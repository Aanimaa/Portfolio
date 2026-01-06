import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import load from "../../Assets/Projects/load.png";
import pacman from "../../Assets/Projects/Pacman.webp";
import smiler from "../../Assets/Projects/smiler.png";
import uniq from "../../Assets/Projects/uniqDay.png";
import mara from "../../Assets/Projects/marathon.png";
import cinef from "../../Assets/Projects/Cinéflix.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes Récents <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici une petite selection de projets effectuer en cours ou dans mon temps libre.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smiler}
              isBlog={false}
              title="Smiler"
              description="Mon site de cosmétique en React js. Rework graphique prévu."
              ghLink="https://github.com/Aanimaa/Smiller"
              demoLink="https://smiler-web.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pacman}
              isBlog={false}
              title="Pacman"
              description="Jeu Pacman en java, il s'agit d'un projet de cours en groupe."
              ghLink="https://gitlab.univ-artois.fr/noa_peru/pacman-noa-leo-theo-flavio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uniq}
              isBlog={false}
              title="UniqDay"
              description="Site d'évenmentiel en HTML/CSS effectuer en épreuve en tant que projet de groupe "
              demoLink="https://uniqday.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinef}
              isBlog={false}
              title="Cinéflix"
              description="Site de streaming en PHP avec Laravel.
              Projet de cours en équipe"
              ghLink="https://gitlab.univ-artois.fr/nathan_plouvin/cinehub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mara}
              isBlog={false}
              title="Projet Marathon"
              description="Projet Marathon (48h) en collaboration avec les MMI de l'IUT de lens dans lequel on devait faire un site de musique avec Laravel"
              ghLink="https://gitlab.univ-artois.fr/nathan_plouvin/leo-tristan-theo-nathan-lensymphony-web"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={load}
              isBlog={false}
              title="EO IA"
              description="Projet d'IA en python (EN cours de développement ...)"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
