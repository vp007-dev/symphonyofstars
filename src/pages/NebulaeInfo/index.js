import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
// import { dataportfolio, meta } from "../../content_option";


export const Nebulaeinfo = () => {
    return (
        
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
        {dataportfolio.map((data, i) => {
            return(
            <div key={id} className="po_item">
                <img src={data.img} alt="" />
            </div>
            );
        })}
        </div>


      </HelmetProvider>
    );
  };
  