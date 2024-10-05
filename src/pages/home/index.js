"use client";
import React, { useEffect } from "react";
import * as THREE from "three";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import StarfieldAnimation from "react-starfield-animation";

export const Home = () => {
  return (
    <HelmetProvider>
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
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
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
    </HelmetProvider>
  );
};
