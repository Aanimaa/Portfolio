import React from "react";
import { Col, Row } from "react-bootstrap";
import arch from "../../Assets/TechIcons/arch_logo-1.png";
import vercel from "../../Assets/TechIcons/Vercel_favicon.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={arch} alt="archLinux" className="tech-icon-images" />
        <div className="tech-icons-text">ArchLinux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vercel} alt="Vercel" className="tech-icon-images" />
        <div className="tech-icons-text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
