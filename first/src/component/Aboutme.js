import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../component/style.css";
import React from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Aboutme = () => {
  const responsive = {
    //default
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="aboutme" id="aboutme">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__backInLeft" : ""
                  }
                >
                  <div className="aboutme-container">
                    <div className="aboutme-bx">
                      <h2>About Me</h2>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>

            <p className="aboutmeyazi">
              Welcome! In this section of our ship, I offer a glimpse into who I
              am and my inner world.
            </p>
            <p className="aboutmeyazi2">
              Hi! I'm Seda MERCAN, a passionate individual born on July 9, 2001,
              with a strong desire to explore the vast world of technology.
              Currently, I am a third-year Computer Engineering student at Adana
              Alparslan Türkeş Science and Technology University. My journey
              into the realm of computer engineering has been an exciting and
              transformative one. As I progress through my academic journey, I
              find myself continuously intrigued by the ever-evolving world of
              web development. My focus lies in both Frontend and Backend
              development, where I aim to craft engaging and user-friendly
              digital experiences. In my pursuit of excellence, I have delved
              into the realms of React.Js, Javascript, and Python. These
              powerful technologies have captured my interest, and I am
              determined to enhance my skills and knowledge through continuous
              learning and exploration. Beyond academics, I actively participate
              in various projects and coding challenges to sharpen my coding
              prowess.Thank you for taking the time to learn a bit about me. I
              am thrilled about the opportunities that lie ahead, and I look
              forward to making my mark in the world of web development!
            </p>

            <Container>
              <Row>
                <Col md={4}></Col>
                <Col md={4}></Col>
                <Col md={4}></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
