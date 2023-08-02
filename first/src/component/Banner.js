import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../component/style.css"
import React from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import HeaderImg from "../assets/images/moon-png-44678.png";
export const Banner = () => {
  const toRotate = [" I'm Seda Mercan. Junior Frontend Web Developer."];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 800; // arbitrary indicate how much time passed
  const [delta, setDelta] = useState(120);
  const [index, setIndex] = useState(1);
  const [text, setText] = useState("");
//metnin hızını değiştirmek için delta ve period değişkenlerini kullanabiliriz.
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setIndex(1);
      setDelta(120);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>           
                 <span className="tagline">
                  <h1>{`Hello There!`}</h1> <span className="wrap">{text}</span>
                  <p>Greetings and welcome to my world of thoughts and expressions! Let's explore, learn, and grow together!</p>
                  <a href="#aboutme">
                  <button className="btn" type="button">
                    <strong>Get Start With Me</strong>
                    <div id="container-stars">
                      <div id="stars"></div>
                    </div>

                    <div id="glow">
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                  </button>
                  </a>
                </span>
                </div> }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={HeaderImg} alt="Header image"></img>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};
