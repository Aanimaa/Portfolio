import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Bonjour à tous ! Je suis <span className="purple">Aanima</span>{" "}
              de mon vrai nom <span className="purple">Strobbe Theo</span>.
              <br />
              Je suis actuellement étudiant en 2e année de{" "}
              <span className="purple">BUT Informatique</span> à{" "}
              <span className="purple">l'IUT de Lens</span>.
              <br />
              Je prépare mon avenir professionnel et je suis à la recherche d'un
              <span className="purple"> stage </span> pour avril 2026.
              <br />
              <br />
              En dehors du code, j'aime m'investir dans des activités qui demandent de la discipline et de l'esprit d'équipe :
            </p>

            <ul>
              <li className="about-activity">
                <ImPointRight /> La Musculation 🏋️
              </li>
              <li className="about-activity">
                <ImPointRight /> Le Badminton (Pratique & Coaching) 🏸
              </li>
              <li className="about-activity">
                <ImPointRight /> Les Jeux Vidéo 🎮
              </li>
              <li className="about-activity">
                <ImPointRight /> L'Intelligence Artificielle 🤖
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "La persévérance et l'esprit d'équipe sont les clés de la réussite."{" "}
            </p>
            <footer className="blockquote-footer">Théo</footer>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;