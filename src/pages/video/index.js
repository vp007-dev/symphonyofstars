import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import sampleVideo from "../../assets/video.mp4"; // Adjust the path as necessary

export const ContactUs = () => {


  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Musical Backdrop</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Musical Backdrop</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
        <div className="video-container">
          <video controls className="video-element">
            <source src={sampleVideo} type="video/mp4" />
          </video>
        </div> 
        </Row>
      </Container>
    </HelmetProvider>
  );
};
