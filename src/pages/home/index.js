import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import StarfieldAnimation from "react-starfield-animation";
import { Portfolio } from "../portfolio";
import { ContactUs } from "../video";
import { introdata, meta } from "../../content_option";
import { Nebulaeinfo } from "../NebulaeInfo";

import "./style.css";

export const Home = () => {
  return (
    <HelmetProvider>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
                activeClass="selected" /* This adds the `selected` class to the active section */
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="video"
                smooth={true}
                duration={500}
                className="nav-link"
                activeClass="selected"
              >
                MUSICAL BACKDROP
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="nav-link"
                activeClass="selected"
              >
                NEBULAES
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="home">
        <StarfieldAnimation
          depth={500}
          alphaFactor={400}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center mx-8">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video" className="video">
        <ContactUs />
      </section>

      <section id="portfolio" className="portfolio">
        <Portfolio />
      </section>
    </HelmetProvider>
  );
};
