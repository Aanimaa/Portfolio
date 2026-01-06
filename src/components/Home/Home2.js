import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LAISSEZ-MOI <span className="purple"> ME PRÉSENTER </span>
              </h1>
              <p className="home-about-body">
                Je suis un étudiant passionné, actuellement en 2e année de
                <i>
                  <b className="purple"> BUT Informatique à l'IUT de Lens. </b>
                </i>
                Je suis à la recherche d'un stage en tant que développeur informatique pour avril 2026.
                <br />
                <br />
                Je maîtrise plusieurs langages dont
                <i>
                  <b className="purple">
                    {" "}
                    Java, Python, PHP, ainsi que HTML/CSS et SQL (PostgreSQL).{" "}
                  </b>
                </i>
                <br />
                <br />
                Mes domaines d'intérêt incluent le développement
                <i>
                  <b className="purple">
                    {" "}
                    d'applications (comme mon projet Bomberman en JavaFX){" "}
                  </b>
                </i>
                et la création de sites web événementiels et e-commerce. Je m'intéresse également à
                <b className="purple"> l'Intelligence Artificielle. </b>
                <br />
                <br />
                J'ai l'habitude de travailler en équipe et j'utilise des outils comme
                <b className="purple"> Git et Bash </b>
                pour gérer mes projets et assurer leur bon déploiement.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}
export default Home2;