import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { useParams } from "react-router-dom";

// import { dataportfolio, meta } from "../../content_option";


export const Nebulaeinfo = () => {
    const { id } = useParams();
   const nebula = dataportfolio.find((n) => n.id === id);
    return nebula ?(
        
      <HelmetProvider>
        
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title>  Nebula | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
          </Helmet>
        </Container>
        {/* <section id = "nebulaeinfo" className="nebulaeinfo">

        </section> */}
        <div className="mb-5 po_items_ho">
        <h2>{nebula.description}</h2>
        <img src={nebula.img} alt={nebula.description} />
        </div>


      </HelmetProvider>
    ) : (
        <p>nebulae not found</p>
    );
  };
  