import { Container, Row, Col, Button, Card, CardImg } from "react-bootstrap";
import "../component/style.css";
import kart from  "../assets/images/blog.fb8ab7f271a937d5fc01.png";
import React from 'react';
import 'animate.css';
import TrackVisibility from "react-on-screen";
export const Projects = () => {
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
    <section className="projects" id="projects">
      <Container>
        <Row>
        <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__backInLeft" : ""
                  }
                >
          <div>
          <h2 className="baslik">My Projects</h2>
          </div>
          </div> )}
          </TrackVisibility>
          <div>
          <p className="yazi">Here are a few projects I've worked on recently.</p>
          </div>
       
          <Col md={4}>
            <Card className="card">
              <CardImg   variant="top" src={kart}></CardImg>
              <Card.Body>
                <Card.Title className="title">Brick Breaker Game </Card.Title>
                <Card.Text className="text">
                	On OpenGL environment in graphics mode
                </Card.Text>
                <a href="https://github.com/sedamer/BrickBreakerGame-OpenGL" target="_blank">
                <button className="buton-project"> <span>See Codes</span></button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card">
              <CardImg  variant="top" src={kart}></CardImg>
              <Card.Body>
                <Card.Title className="title">Brick Breaker Game </Card.Title>
                <Card.Text className="text">
                  On MinGW environment in graphics mode with WinBGIm 
                </Card.Text>
                <a href="https://github.com/sedamer/BrickBreakerGame-WinBGIm" target="_blank">
                <button className="buton-project"> <span>See Codes</span></button>
                </a>

              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card">
              <CardImg   variant="top" src={kart}></CardImg>
              <Card.Body>
                <Card.Title className="title">Memory Bloom Filter Table </Card.Title>
                <Card.Text className="text">
               Simple Bloom Filter Table/Data Structure stored in the memory as a binary array
                </Card.Text>
                <a href="https://github.com/sedamer/BrickBreakerGame-MinGW" target="_blank">
                <button className="buton-project"> <span>See Codes</span></button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
