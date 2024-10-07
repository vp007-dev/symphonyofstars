import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { nebulaData } from "../../content_option";
import { FaPlay } from "react-icons/fa"; // Import the play icon

export const Nebulaeinfo = () => {
  const playSound = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Nebulae Details</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="nebula-details">
          {nebulaData.map((data) => (
            <div key={data.id} className="nebula-info">
              <h2 className="nebula-name">{data.name}</h2>
              <div className="flex-container">
                {data.img && (
                  <div className="nebula-image-container">
                    <img src={data.img} alt={data.name} className="nebula-image" />
                    <button
                      className="play-icon"
                      onClick={() => playSound(data.soundtrack)}
                      aria-label="Play Soundtrack"
                    >
                      <FaPlay />
                    </button>
                  </div>
                )}
                <div className="infoBox">
                  <p><strong>Type:</strong> {data.type || "N/A"}</p>
                  <p><strong>Location:</strong> {data.location || "N/A"}</p>
                  <p><strong>Coordinates:</strong> {data.coordinates || "N/A"}</p>
                  <p><strong>Size:</strong> {data.size || "N/A"}</p>
                  <p><strong>Discovery:</strong> {data.discovery || "N/A"}</p>
                  <p><strong>Formation:</strong> {data.formation || "N/A"}</p>
                  <p><strong>Key Features:</strong> {data.keyFeatures?.join(', ') || "N/A"}</p>
                  <p><strong>Star Formation:</strong> {data.starFormation || "N/A"}</p>
                  <p><strong>Notable Features:</strong> {data.notableFeatures || "N/A"}</p>
                  <p><strong>Observations:</strong> {data.observations || "N/A"}</p>
                  <p><strong>Scientific Importance:</strong> {data.scientificImportance || "N/A"}</p>
                  <p><strong>Current Status:</strong> {data.currentStatus || "N/A"}</p>
                  <p><strong>Telescopic Observations:</strong> {data.telescopicObservations || "N/A"}</p>
                </div>
              </div>
              <hr className="t_border my-4" />
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
